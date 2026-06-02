import { flights } from "@/lib/flights";

export const metadata = {
  title: "Flights | Odel Masters",
};

export default function FlightsPage() {
  return (
    <div className="py-12 px-4">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-masters-green mb-3">
            Flights
          </h1>
          <p className="text-gray-600 text-lg">
            Søndag 7. juni — Arendal og Omegn Golfklubb
          </p>
        </div>

        <div className="space-y-6">
          {flights.map((flight) => (
            <div
              key={flight.group}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="bg-masters-green px-6 py-3 flex items-center justify-between">
                <h2 className="text-masters-gold font-serif text-xl font-bold">
                  {flight.name ?? `Flight ${flight.group}`}
                </h2>
                <span className="text-masters-white text-sm font-medium">
                  Tee: {flight.teeTime}
                </span>
              </div>
              <ul className="divide-y divide-gray-100">
                {flight.players.map((player, i) => (
                  <li
                    key={i}
                    className="px-6 py-4 flex items-center gap-3"
                  >
                    <span className="w-7 h-7 rounded-full bg-masters-light text-masters-green text-sm font-bold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-masters-text">{player}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
