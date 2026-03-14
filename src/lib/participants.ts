import { Participant } from "@/types";

export async function getParticipants(): Promise<Participant[]> {
  const res = await fetch("/api/participants");
  if (!res.ok) throw new Error("Kunne ikke hente deltakere");
  return res.json();
}

export async function addParticipant(
  p: Omit<Participant, "id" | "registeredAt">
): Promise<Participant> {
  const res = await fetch("/api/participants", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(p),
  });
  if (!res.ok) throw new Error("Kunne ikke registrere deltaker");
  return res.json();
}

export async function removeParticipant(id: string): Promise<void> {
  const res = await fetch(`/api/participants/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Kunne ikke slette deltaker");
}
