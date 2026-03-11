import { Participant } from "@/types";

const STORAGE_KEY = "odel-masters-participants";

export function getParticipants(): Participant[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function addParticipant(
  p: Omit<Participant, "id" | "registeredAt">
): Participant {
  const participants = getParticipants();
  const newParticipant: Participant = {
    ...p,
    id: crypto.randomUUID(),
    registeredAt: new Date().toISOString(),
  };
  participants.push(newParticipant);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(participants));
  return newParticipant;
}

export function removeParticipant(id: string): void {
  const participants = getParticipants().filter((p) => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(participants));
}
