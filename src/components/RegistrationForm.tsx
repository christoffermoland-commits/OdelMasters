"use client";

import { useState } from "react";
import { useParticipants } from "@/context/ParticipantsContext";

export default function RegistrationForm() {
  const { addParticipant } = useParticipants();
  const [name, setName] = useState("");
  const [golfboxNumber, setGolfboxNumber] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !golfboxNumber.trim()) return;

    addParticipant({ name: name.trim(), golfboxNumber: golfboxNumber.trim() });
    setName("");
    setGolfboxNumber("");
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-masters-text mb-1">
          Navn
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Skriv inn ditt navn"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-masters-text focus:border-masters-green focus:ring-2 focus:ring-masters-green/20 outline-none transition"
        />
      </div>
      <div>
        <label htmlFor="golfbox" className="block text-sm font-medium text-masters-text mb-1">
          Golfbox-nummer
        </label>
        <input
          id="golfbox"
          type="text"
          value={golfboxNumber}
          onChange={(e) => setGolfboxNumber(e.target.value)}
          required
          placeholder="Skriv inn ditt Golfbox-nummer"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-masters-text focus:border-masters-green focus:ring-2 focus:ring-masters-green/20 outline-none transition"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-masters-gold hover:bg-masters-yellow text-masters-dark font-bold py-3 px-6 rounded-lg transition-colors text-lg"
      >
        Meld deg på
      </button>
      {success && (
        <p className="text-masters-green font-medium text-center animate-pulse">
          Du er nå påmeldt! Lykke til!
        </p>
      )}
    </form>
  );
}
