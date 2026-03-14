import { NextRequest, NextResponse } from "next/server";
import { getAllParticipants, saveAllParticipants } from "@/lib/redis";

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const participants = await getAllParticipants();
    const filtered = participants.filter((p) => p.id !== id);

    if (filtered.length === participants.length) {
      return NextResponse.json(
        { error: "Deltaker ikke funnet" },
        { status: 404 }
      );
    }

    await saveAllParticipants(filtered);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete participant:", error);
    return NextResponse.json(
      { error: "Kunne ikke slette deltaker" },
      { status: 500 }
    );
  }
}
