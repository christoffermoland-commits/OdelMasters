import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: process.env.odelmastersdb_KV_REST_API_URL!,
  token: process.env.odelmastersdb_KV_REST_API_TOKEN!,
});

const PARTICIPANTS_KEY = "participants";

import { Participant } from "@/types";

export async function getAllParticipants(): Promise<Participant[]> {
  const data = await redis.get<Participant[]>(PARTICIPANTS_KEY);
  return data ?? [];
}

export async function saveAllParticipants(
  participants: Participant[]
): Promise<void> {
  await redis.set(PARTICIPANTS_KEY, participants);
}
