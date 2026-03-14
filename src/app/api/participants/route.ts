import { NextRequest, NextResponse } from "next/server";
import { getAllParticipants, saveAllParticipants } from "@/lib/redis";
import { Participant } from "@/types";

export async function GET() {
  try {
    const participants = await getAllParticipants();
    return NextResponse.json(participants);
  } catch (error) {
    console.error("Failed to fetch participants:", error);
    return NextResponse.json(
      { error: "Kunne ikke hente deltakere" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, golfboxNumber, caddyName, imageUrl } = body;

    if (!name || !golfboxNumber) {
      return NextResponse.json(
        { error: "Navn og Golfbox-nummer er påkrevd" },
        { status: 400 }
      );
    }

    const newParticipant: Participant = {
      id: crypto.randomUUID(),
      name,
      golfboxNumber,
      registeredAt: new Date().toISOString(),
      ...(caddyName && { caddyName }),
      ...(imageUrl && { imageUrl }),
    };

    const participants = await getAllParticipants();
    participants.push(newParticipant);
    await saveAllParticipants(participants);

    return NextResponse.json(newParticipant, { status: 201 });
  } catch (error) {
    console.error("Failed to add participant:", error);
    return NextResponse.json(
      { error: "Kunne ikke registrere deltaker" },
      { status: 500 }
    );
  }
}
