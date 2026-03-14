"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { Participant } from "@/types";
import {
  getParticipants,
  addParticipant as addToApi,
  removeParticipant as removeFromApi,
} from "@/lib/participants";

interface ParticipantsContextType {
  participants: Participant[];
  loading: boolean;
  error: string | null;
  addParticipant: (
    p: Omit<Participant, "id" | "registeredAt">
  ) => Promise<void>;
  removeParticipant: (id: string) => Promise<void>;
}

const ParticipantsContext = createContext<ParticipantsContextType | null>(null);

const LOCAL_STORAGE_KEY = "odel-masters-participants";

export function ParticipantsProvider({ children }: { children: ReactNode }) {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchParticipants = useCallback(async () => {
    try {
      setError(null);
      const data = await getParticipants();
      setParticipants(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Kunne ikke hente deltakere"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  // Migrate localStorage data to API on first load
  useEffect(() => {
    const migrateAndFetch = async () => {
      if (typeof window !== "undefined") {
        const localData = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (localData) {
          try {
            const localParticipants: Participant[] = JSON.parse(localData);
            if (localParticipants.length > 0) {
              for (const p of localParticipants) {
                await addToApi({
                  name: p.name,
                  golfboxNumber: p.golfboxNumber,
                  ...(p.caddyName && { caddyName: p.caddyName }),
                  ...(p.imageUrl && { imageUrl: p.imageUrl }),
                });
              }
            }
            localStorage.removeItem(LOCAL_STORAGE_KEY);
          } catch {
            // If migration fails, just continue with API data
          }
        }
      }
      await fetchParticipants();
    };

    migrateAndFetch();
  }, [fetchParticipants]);

  const addParticipant = async (
    p: Omit<Participant, "id" | "registeredAt">
  ) => {
    const newParticipant = await addToApi(p);
    setParticipants((prev) => [...prev, newParticipant]);
  };

  const removeParticipant = async (id: string) => {
    await removeFromApi(id);
    setParticipants((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <ParticipantsContext.Provider
      value={{ participants, loading, error, addParticipant, removeParticipant }}
    >
      {children}
    </ParticipantsContext.Provider>
  );
}

export function useParticipants() {
  const context = useContext(ParticipantsContext);
  if (!context) {
    throw new Error(
      "useParticipants must be used within a ParticipantsProvider"
    );
  }
  return context;
}
