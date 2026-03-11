"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Participant } from "@/types";
import {
  getParticipants,
  addParticipant as addToStorage,
  removeParticipant as removeFromStorage,
} from "@/lib/participants";

interface ParticipantsContextType {
  participants: Participant[];
  addParticipant: (p: Omit<Participant, "id" | "registeredAt">) => void;
  removeParticipant: (id: string) => void;
}

const ParticipantsContext = createContext<ParticipantsContextType | null>(null);

export function ParticipantsProvider({ children }: { children: ReactNode }) {
  const [participants, setParticipants] = useState<Participant[]>([]);

  useEffect(() => {
    setParticipants(getParticipants());
  }, []);

  const addParticipant = (p: Omit<Participant, "id" | "registeredAt">) => {
    const newParticipant = addToStorage(p);
    setParticipants((prev) => [...prev, newParticipant]);
  };

  const removeParticipant = (id: string) => {
    removeFromStorage(id);
    setParticipants((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <ParticipantsContext.Provider
      value={{ participants, addParticipant, removeParticipant }}
    >
      {children}
    </ParticipantsContext.Provider>
  );
}

export function useParticipants() {
  const context = useContext(ParticipantsContext);
  if (!context) {
    throw new Error("useParticipants must be used within a ParticipantsProvider");
  }
  return context;
}
