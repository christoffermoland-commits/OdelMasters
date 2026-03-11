import Link from "next/link";

export const metadata = {
  title: "Amen Corner | Odel Masters",
};

export default function AmenCornerPage() {
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
          Amen Corner
        </h1>

        <div className="space-y-6">
          <section className="bg-white rounded-xl shadow-md p-8">
            <h2 className="font-serif text-xl font-bold text-masters-green mb-4">
              Om konkurransen
            </h2>
            <p className="text-masters-text leading-relaxed">
              Inspirert av de legendariske hullene 11, 12 og 13 på Augusta
              National, er Amen Corner en konkurranse-i-konkurransen der den
              samlede scoren på tre utvalgte hull avgjør. Disse hullene er kjent
              for å være avgjørende &mdash; det er her turneringen vinnes og
              tapes.
            </p>
          </section>

          <section className="bg-white rounded-xl shadow-md p-8">
            <h2 className="font-serif text-xl font-bold text-masters-green mb-4">
              Hullene
            </h2>
            <div className="space-y-4 text-masters-text">
              <div className="flex gap-4 items-start">
                <span className="bg-masters-green text-masters-gold font-bold rounded-full w-8 h-8 flex items-center justify-center text-sm shrink-0">
                  11
                </span>
                <p>
                  <strong>Hull 11</strong> &mdash; Par 4, 400 meter. Langt og
                  krevende med vann langs venstre side.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="bg-masters-green text-masters-gold font-bold rounded-full w-8 h-8 flex items-center justify-center text-sm shrink-0">
                  12
                </span>
                <p>
                  <strong>Hull 12</strong> &mdash; Par 3, 145 meter. Kort men
                  lumsk. Vind spiller en stor rolle.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="bg-masters-green text-masters-gold font-bold rounded-full w-8 h-8 flex items-center justify-center text-sm shrink-0">
                  13
                </span>
                <p>
                  <strong>Hull 13</strong> &mdash; Par 5, 470 meter.
                  Risiko/belønning &mdash; går du for greenen i to?
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-md p-8">
            <h2 className="font-serif text-xl font-bold text-masters-green mb-4">
              Regler
            </h2>
            <ul className="list-disc list-inside text-masters-text space-y-2">
              <li>Samlet score på hull 11, 12 og 13 teller</li>
              <li>Lavest samlet score vinner</li>
              <li>Ved likt resultat avgjør scoren på hull 12</li>
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
