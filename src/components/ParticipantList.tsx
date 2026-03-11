"use client";

import { useParticipants } from "@/context/ParticipantsContext";

export default function ParticipantList() {
  const { participants } = useParticipants();

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

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-masters-green text-masters-white">
            <th className="px-6 py-3 text-left text-sm font-medium">#</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Navn</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Golfbox-nr</th>
          </tr>
        </thead>
        <tbody>
          {participants.map((p, i) => (
            <tr
              key={p.id}
              className={i % 2 === 0 ? "bg-white" : "bg-masters-light"}
            >
              <td className="px-6 py-4 text-sm font-medium text-masters-text">
                {i + 1}
              </td>
              <td className="px-6 py-4 text-sm text-masters-text">{p.name}</td>
              <td className="px-6 py-4 text-sm text-masters-text">
                {p.golfboxNumber}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
