import Image from "next/image";
import RegistrationSection from "@/components/RegistrationSection";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-masters-green py-16 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <Image
            src="/Odelmasters_logo.png"
            alt="Odel Masters"
            width={300}
            height={300}
            className="mx-auto mb-6"
            priority
          />
          <h1 className="text-masters-gold font-serif text-4xl sm:text-5xl font-bold mb-3">
            Velkommen til Odel Masters
          </h1>
          <p className="text-masters-white/90 text-lg">
            Arendal og Omegn Golfklubb
          </p>
          <p className="text-masters-gold font-serif text-xl font-bold mt-4">
            Søndag 7. juni kl. 14:00
          </p>
        </div>
      </section>

      {/* Registration */}
      <section className="py-12 px-4">
        <div className="mx-auto max-w-md">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="font-serif text-2xl font-bold text-masters-green mb-4">
              Påmelding
            </h2>
            <p className="text-gray-600 mb-6">
              Registrer deg for Odel Masters
            </p>
            <RegistrationSection />
            <div className="mt-6">
              <Link
                href="/deltakere"
                className="text-masters-green hover:text-masters-dark text-sm font-medium underline"
              >
                Se alle deltakere
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fjorårets vinner */}
      <section className="pb-12 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 relative">
                <Image
                  src="/images/vinner-2025.jpg"
                  alt="Christoffer Moland – vinner av Odel Masters 2025"
                  width={400}
                  height={600}
                  className="w-full h-80 md:h-full object-cover object-top"
                />
              </div>
              <div className="md:w-2/3 p-8 flex flex-col justify-center">
                <h2 className="font-serif text-2xl font-bold text-masters-green mb-2">
                  Fjorårets vinner
                </h2>
                <p className="text-masters-gold font-serif text-xl font-bold mb-3">
                  Christoffer Moland
                </p>
                <p className="text-masters-text">
                  Vinner av Odel Masters 2025 med <strong>67 slag (−5)</strong>.
                  Christoffer tok hjem den grønne jakken med solid margin ned til
                  andreplassen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultater 2025 */}
      <section className="pb-12 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl font-bold text-masters-green mb-6 text-center">
            Resultater 2025
          </h2>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-masters-green text-masters-white">
                    <th className="px-4 py-3 text-left text-sm font-medium">#</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Navn</th>
                    <th className="px-4 py-3 text-center text-sm font-medium">HCP</th>
                    <th className="px-4 py-3 text-center text-sm font-medium">Score</th>
                    <th className="px-4 py-3 text-center text-sm font-medium">Til par</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { pos: 1, name: "Christoffer Moland", hcp: 20, score: 67, toPar: "−5" },
                    { pos: 2, name: "Andreas Frivold", hcp: 12, score: 70, toPar: "−2" },
                    { pos: 3, name: "Odd Arne Eliassen", hcp: 8, score: 72, toPar: "E" },
                    { pos: 4, name: "Jorn Lindberg", hcp: 8, score: 73, toPar: "+1" },
                    { pos: 5, name: "Duc Minh Nham", hcp: 10, score: 73, toPar: "+1" },
                    { pos: 6, name: "Øyvind Vågsnes", hcp: 11, score: 74, toPar: "+2" },
                    { pos: 7, name: "Eljar Rol", hcp: 13, score: 75, toPar: "+3" },
                    { pos: 8, name: "Kristian Mouland", hcp: 17, score: 77, toPar: "+5" },
                    { pos: 9, name: "Karsten Sandåker", hcp: 10, score: 80, toPar: "+8" },
                    { pos: 10, name: "Kenneth Gundersen", hcp: 18, score: 80, toPar: "+8" },
                    { pos: 11, name: "Frode Fugelsnes", hcp: 19, score: 89, toPar: "+17" },
                  ].map((r, i) => (
                    <tr
                      key={r.pos}
                      className={`${i % 2 === 0 ? "bg-white" : "bg-masters-light"} ${r.pos === 1 ? "font-bold" : ""}`}
                    >
                      <td className="px-4 py-3 text-sm text-masters-text">{r.pos}</td>
                      <td className="px-4 py-3 text-sm text-masters-text">{r.name}</td>
                      <td className="px-4 py-3 text-sm text-masters-text text-center">{r.hcp}</td>
                      <td className="px-4 py-3 text-sm text-masters-text text-center">{r.score}</td>
                      <td className="px-4 py-3 text-sm text-masters-text text-center">{r.toPar}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="pb-16 px-4">
        <div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Link
            href="/om-turneringen"
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg hover:border-masters-gold border-2 border-transparent transition-all"
          >
            <h3 className="font-serif text-lg font-bold text-masters-green mb-2">
              Om Turneringen
            </h3>
            <p className="text-gray-600 text-sm">Les mer om Odel Masters</p>
          </Link>
          <Link
            href="/hullpresentasjon"
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg hover:border-masters-gold border-2 border-transparent transition-all"
          >
            <h3 className="font-serif text-lg font-bold text-masters-green mb-2">
              Hullpresentasjon
            </h3>
            <p className="text-gray-600 text-sm">Se alle 18 hull</p>
          </Link>
          <Link
            href="/ekstra-konkurranser"
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg hover:border-masters-gold border-2 border-transparent transition-all"
          >
            <h3 className="font-serif text-lg font-bold text-masters-green mb-2">
              Ekstra Konkurranser
            </h3>
            <p className="text-gray-600 text-sm">
              Closest to Pin, Longest Drive & mer
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
