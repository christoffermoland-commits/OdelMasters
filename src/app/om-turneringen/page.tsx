import Image from "next/image";

export const metadata = {
  title: "Om Turneringen | Odel Masters",
};

export default function OmTurneringenPage() {
  return (
    <div className="py-12 px-4">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Image
            src="/Odelmasters_logo.png"
            alt="Odel Masters"
            width={150}
            height={150}
            className="mx-auto mb-6"
          />
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-masters-green mb-3">
            Om Turneringen
          </h1>
          <p className="text-gray-600 text-lg">
            En tradisjon i golfsportens ånd
          </p>
        </div>

        <div className="space-y-8">
          {/* Om turneringen */}
          <section className="bg-white rounded-xl shadow-md p-8">
            <h2 className="font-serif text-2xl font-bold text-masters-green mb-4">
              Odel Masters
            </h2>
            <p className="text-masters-text leading-relaxed">
              Odel Masters er en golfturnering som samler golfentusiaster til en
              uforglemmelig dag på greenen. Inspirert av den legendariske Masters
              Tournament i Augusta, bringer vi den samme spenningen og
              tradisjonen til Sørlandet.
            </p>
          </section>

          {/* Bane */}
          <section className="bg-white rounded-xl shadow-md p-8">
            <h2 className="font-serif text-2xl font-bold text-masters-green mb-4">
              Banen
            </h2>
            <p className="text-masters-text leading-relaxed">
              Turneringen spilles på <strong>Arendal og Omegn Golfklubb</strong>,
              en av Sørlandets fineste golfbaner. Med 18 varierte hull som byr
              på utfordringer for alle nivåer, er dette den perfekte arenaen for
              Odel Masters.
            </p>
          </section>

          {/* Format */}
          <section className="bg-white rounded-xl shadow-md p-8">
            <h2 className="font-serif text-2xl font-bold text-masters-green mb-4">
              Format
            </h2>
            <p className="text-masters-text leading-relaxed">
              Turneringen spilles som slagspill med gjeldende handicap. Score
              kan følges og registreres i Golf Gamebook. Flights blir trukket
              nærmere turneringsdato.
            </p>
          </section>

          {/* Praktisk info */}
          <section className="bg-white rounded-xl shadow-md p-8">
            <h2 className="font-serif text-2xl font-bold text-masters-green mb-4">
              Praktisk Informasjon
            </h2>
            <div className="space-y-3 text-masters-text">
              <div className="flex gap-3">
                <span className="font-bold min-w-[100px]">Sted:</span>
                <span>Arendal og Omegn Golfklubb</span>
              </div>
              <div className="flex gap-3">
                <span className="font-bold min-w-[100px]">Påmelding:</span>
                <span>Via hjemmesiden</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
