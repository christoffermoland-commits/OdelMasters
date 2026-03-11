import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

export const metadata = {
  title: "Longest Drive | Odel Masters",
};

export default function LongestDrivePage() {
  return (
    <div className="py-12 px-4">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/ekstra-konkurranser"
          className="text-masters-green hover:text-masters-dark text-sm font-medium mb-6 inline-block"
        >
          &larr; Tilbake til Ekstra Konkurranser
        </Link>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-masters-green mb-8">
          Longest Drive
        </h1>

        <div className="space-y-6">
          <section className="bg-white rounded-xl shadow-md p-8">
            <h2 className="font-serif text-xl font-bold text-masters-green mb-4">
              Om konkurransen
            </h2>
            <p className="text-masters-text leading-relaxed">
              Longest Drive handler om å slå ballen lengst mulig fra tee. Her
              gjelder det å kombinere kraft og teknikk for å få maksimal
              distanse.
            </p>
          </section>

          <section className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-masters-green px-8 py-3 flex items-center justify-between">
              <h2 className="font-serif text-xl font-bold text-masters-gold">
                Hull 9
              </h2>
              <div className="flex gap-4 text-masters-white text-sm">
                <span>Par 4</span>
                <span>400 m</span>
                <span>Hcp 4</span>
              </div>
            </div>
            <div className="p-8 space-y-4">
              <p className="text-masters-text leading-relaxed">
                Avslutning på første ni. Et langt og krevende par 4 &mdash; den
                perfekte arenaen for å vise hvem som slår lengst.
              </p>
              <VideoEmbed
                videoUrl="https://www.youtube.com/watch?v=sBudODCmsgA"
                title="Hull 9 - Longest Drive"
              />
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-md p-8">
            <h2 className="font-serif text-xl font-bold text-masters-green mb-4">
              Regler
            </h2>
            <ul className="list-disc list-inside text-masters-text space-y-2">
              <li>Konkurransen gjelder på hull 9 (par 4, 400 meter)</li>
              <li>Ballen må lande i fairway for å telle</li>
              <li>Lengste drive målt fra tee vinner</li>
              <li>Kun ett forsøk per spiller</li>
            </ul>
          </section>

          <section className="bg-white rounded-xl shadow-md p-8">
            <h2 className="font-serif text-xl font-bold text-masters-green mb-4">
              Resultater
            </h2>
            <p className="text-gray-500 italic">
              Resultater publiseres etter turneringen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
