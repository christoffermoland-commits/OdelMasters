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
            <th className="px-3 py-3 text-left text-sm font-medium">#</th>
            <th className="px-3 py-3 text-left text-sm font-medium"></th>
            <th className="px-3 py-3 text-left text-sm font-medium">Navn</th>
            <th className="px-3 py-3 text-left text-sm font-medium">Golfbox-nr</th>
            <th className="px-3 py-3 text-left text-sm font-medium">Caddy</th>
          </tr>
        </thead>
        <tbody>
          {participants.map((p, i) => (
            <tr
              key={p.id}
              className={i % 2 === 0 ? "bg-white" : "bg-masters-light"}
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
