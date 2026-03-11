import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";

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
              Inspirert av de legendariske hullene på Augusta National, er Amen
              Corner en konkurranse-i-konkurransen der den samlede scoren på
              hull 13, 14 og 15 avgjør. Disse tre hullene er Odel Masters sin
              versjon av golfens mest avgjørende strekk &mdash; det er her
              turneringen vinnes og tapes.
            </p>
          </section>

          {/* Hull 13 */}
          <section className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-masters-green px-8 py-3 flex items-center justify-between">
              <h2 className="font-serif text-xl font-bold text-masters-gold">
                Hull 13
              </h2>
              <div className="flex gap-4 text-masters-white text-sm">
                <span>Par 4</span>
                <span>385 m</span>
                <span>Hcp 3</span>
              </div>
            </div>
            <div className="p-8 space-y-4">
              <p className="text-masters-text leading-relaxed">
                Første hull i Amen Corner. Et langt par 4 der presisjonen fra
                tee er avgjørende. Banens tredje vanskeligste hull.
              </p>
              <VideoEmbed
                videoUrl="https://www.youtube.com/watch?v=BWd3kjzJ7dE"
                title="Hull 13 - Amen Corner"
              />
            </div>
          </section>

          {/* Hull 14 */}
          <section className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-masters-green px-8 py-3 flex items-center justify-between">
              <h2 className="font-serif text-xl font-bold text-masters-gold">
                Hull 14
              </h2>
              <div className="flex gap-4 text-masters-white text-sm">
                <span>Par 3</span>
                <span>121 m</span>
                <span>Hcp 17</span>
              </div>
            </div>
            <div className="p-8 space-y-4">
              <p className="text-masters-text leading-relaxed">
                Banens korteste hull og midten av Amen Corner. Kort men
                krevende &mdash; her kan man hente inn slag, eller miste alt.
              </p>
              <VideoEmbed
                videoUrl="https://www.youtube.com/watch?v=Jv48s0fvMvQ"
                title="Hull 14 - Amen Corner"
              />
            </div>
          </section>

          {/* Hull 15 */}
          <section className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-masters-green px-8 py-3 flex items-center justify-between">
              <h2 className="font-serif text-xl font-bold text-masters-gold">
                Hull 15
              </h2>
              <div className="flex gap-4 text-masters-white text-sm">
                <span>Par 4</span>
                <span>344 m</span>
                <span>Hcp 7</span>
              </div>
            </div>
            <div className="p-8 space-y-4">
              <p className="text-masters-text leading-relaxed">
                Siste hull i Amen Corner. Et middels par 4 der turneringen kan
                avgjøres. Holder du nervene i sjakk?
              </p>
              <VideoEmbed
                videoUrl="https://www.youtube.com/watch?v=2kSbb2rIlLs"
                title="Hull 15 - Amen Corner"
              />
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-md p-8">
            <h2 className="font-serif text-xl font-bold text-masters-green mb-4">
              Regler
            </h2>
            <ul className="list-disc list-inside text-masters-text space-y-2">
              <li>Samlet score på hull 13, 14 og 15 teller</li>
              <li>Lavest samlet score vinner</li>
              <li>Ved likt resultat avgjør scoren på hull 14</li>
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
