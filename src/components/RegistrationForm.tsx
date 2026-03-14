"use client";

import { useState } from "react";
import { useParticipants } from "@/context/ParticipantsContext";
import ImageUpload from "./ImageUpload";

interface RegistrationFormProps {
  onSuccess?: () => void;
}

export default function RegistrationForm({ onSuccess }: RegistrationFormProps) {
  const { addParticipant } = useParticipants();
  const [name, setName] = useState("");
  const [golfboxNumber, setGolfboxNumber] = useState("");
  const [caddyName, setCaddyName] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !golfboxNumber.trim()) return;

    setSubmitting(true);
    setError(null);

    try {
      await addParticipant({
        name: name.trim(),
        golfboxNumber: golfboxNumber.trim(),
        ...(caddyName.trim() && { caddyName: caddyName.trim() }),
        ...(imageUrl && { imageUrl }),
      });

      setName("");
      setGolfboxNumber("");
      setCaddyName("");
      setImageUrl(null);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onSuccess?.();
      }, 1500);
    } catch {
      setError("Noe gikk galt. Prøv igjen.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Profile photo upload */}
      <div className="flex justify-center">
        <ImageUpload
          onImageSelect={(base64) => setImageUrl(base64)}
          currentImage={imageUrl}
        />
      </div>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-masters-text mb-1"
        >
          Navn
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={submitting}
          placeholder="Skriv inn ditt navn"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-masters-text focus:border-masters-green focus:ring-2 focus:ring-masters-green/20 outline-none transition disabled:opacity-50"
        />
      </div>

      <div>
        <label
          htmlFor="golfbox"
          className="block text-sm font-medium text-masters-text mb-1"
        >
          Golfbox-nummer
        </label>
        <input
          id="golfbox"
          type="text"
          value={golfboxNumber}
          onChange={(e) => setGolfboxNumber(e.target.value)}
          required
          disabled={submitting}
          placeholder="Skriv inn ditt Golfbox-nummer"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-masters-text focus:border-masters-green focus:ring-2 focus:ring-masters-green/20 outline-none transition disabled:opacity-50"
        />
      </div>

      <div>
        <label
          htmlFor="caddy"
          className="block text-sm font-medium text-masters-text mb-1"
        >
          Caddie <span className="text-gray-400 font-normal">(valgfritt)</span>
        </label>
        <input
          id="caddy"
          type="text"
          value={caddyName}
          onChange={(e) => setCaddyName(e.target.value)}
          disabled={submitting}
          placeholder="Navn på caddie"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-masters-text focus:border-masters-green focus:ring-2 focus:ring-masters-green/20 outline-none transition disabled:opacity-50"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-masters-gold hover:bg-masters-yellow text-masters-dark font-bold py-3 px-6 rounded-lg transition-colors text-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? "Registrerer..." : "Meld deg på"}
      </button>

      {success && (
        <p className="text-masters-green font-medium text-center animate-pulse">
          Du er nå påmeldt! Lykke til!
        </p>
      )}

      {error && (
        <p className="text-masters-red font-medium text-center">{error}</p>
      )}
    </form>
  );
}
