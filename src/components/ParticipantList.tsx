"use client";

import { useState } from "react";
import { useParticipants } from "@/context/ParticipantsContext";

export default function ParticipantList() {
  const { participants, loading, error, removeParticipant } =
    useParticipants();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Laster deltakere...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-masters-red text-lg">{error}</p>
      </div>
    );
  }

  if (participants.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Ingen deltakere påmeldt ennå.</p>
        <a
          href="/"
          className="inline-block mt-4 text-masters-green hover:text-masters-dark font-medium underline"
        >
          Gå til påmelding
        </a>
      </div>
    );
  }

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Fjerne ${name} fra deltakerlisten?`)) return;
    setDeletingId(id);
    try {
      await removeParticipant(id);
    } catch {
      alert("Kunne ikke slette deltaker. Prøv igjen.");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-masters-green text-masters-white">
            <th className="px-3 py-3 text-left text-sm font-medium">#</th>
            <th className="px-3 py-3 text-left text-sm font-medium"></th>
            <th className="px-3 py-3 text-left text-sm font-medium">Navn</th>
            <th className="px-3 py-3 text-left text-sm font-medium">
              Golfbox-nr
            </th>
            <th className="px-3 py-3 text-left text-sm font-medium">Caddie</th>
            <th className="px-3 py-3 text-right text-sm font-medium"></th>
          </tr>
        </thead>
        <tbody>
          {participants.map((p, i) => (
            <tr
              key={p.id}
              className={`${i % 2 === 0 ? "bg-white" : "bg-masters-light"} ${deletingId === p.id ? "opacity-50" : ""}`}
            >
              <td className="px-3 py-3 text-sm font-medium text-masters-text">
                {i + 1}
              </td>
              <td className="px-3 py-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
                  {p.imageUrl ? (
                    <img
                      src={p.imageUrl}
                      alt={p.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0116.5 0"
                      />
                    </svg>
                  )}
                </div>
              </td>
              <td className="px-3 py-3 text-sm text-masters-text">{p.name}</td>
              <td className="px-3 py-3 text-sm text-masters-text">
                {p.golfboxNumber}
              </td>
              <td className="px-3 py-3 text-sm text-gray-500">
                {p.caddyName || "\u2014"}
              </td>
              <td className="px-3 py-3 text-right">
                <button
                  onClick={() => handleDelete(p.id, p.name)}
                  disabled={deletingId === p.id}
                  className="text-gray-400 hover:text-masters-red transition-colors cursor-pointer disabled:opacity-50"
                  aria-label={`Fjern ${p.name}`}
                  title="Fjern deltaker"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
