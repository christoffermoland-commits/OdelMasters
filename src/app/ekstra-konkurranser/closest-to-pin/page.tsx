import Link from "next/link";

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
              plassere ballen nærmest flagget på utvalgte par 3-hull. Det er
              presisjonen som teller &mdash; ikke lengden.
            </p>
          </section>

          <section className="bg-white rounded-xl shadow-md p-8">
            <h2 className="font-serif text-xl font-bold text-masters-green mb-4">
              Regler
            </h2>
            <ul className="list-disc list-inside text-masters-text space-y-2">
              <li>Konkurransen gjelder på utvalgte par 3-hull</li>
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
