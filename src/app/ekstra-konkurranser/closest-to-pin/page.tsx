import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

export const metadata = {
  title: "Closest to Pin | Odel Masters",
};

export default function ClosestToPinPage() {
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
          Closest to Pin
        </h1>

        <div className="space-y-6">
          <section className="bg-white rounded-xl shadow-md p-8">
            <h2 className="font-serif text-xl font-bold text-masters-green mb-4">
              Om konkurransen
            </h2>
            <p className="text-masters-text leading-relaxed">
              Closest to Pin er en konkurranse der spillerne konkurrerer om å
              plassere ballen nærmest flagget. Det er presisjonen som teller
              &mdash; ikke lengden.
            </p>
          </section>

          <section className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-masters-green px-8 py-3 flex items-center justify-between">
              <h2 className="font-serif text-xl font-bold text-masters-gold">
                Hull 6
              </h2>
              <div className="flex gap-4 text-masters-white text-sm">
                <span>Par 3</span>
                <span>158 m</span>
                <span>Hcp 14</span>
              </div>
            </div>
            <div className="p-8 space-y-4">
              <p className="text-masters-text leading-relaxed">
                Par 3 med krav om presisjon. Hvem klarer å plassere utslagsballen
                nærmest flagget?
              </p>
              <VideoEmbed
                videoUrl="https://www.youtube.com/watch?v=hMn4rSuA3Fg"
                title="Hull 6 - Closest to Pin"
              />
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-md p-8">
            <h2 className="font-serif text-xl font-bold text-masters-green mb-4">
              Regler
            </h2>
            <ul className="list-disc list-inside text-masters-text space-y-2">
              <li>Konkurransen gjelder på hull 6 (par 3, 158 meter)</li>
              <li>Ballen må lande på greenen for å telle</li>
              <li>Avstanden måles fra ballen til flagget</li>
              <li>Korteste avstand vinner</li>
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
