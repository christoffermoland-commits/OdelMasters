import Image from "next/image";
import RegistrationForm from "@/components/RegistrationForm";
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
        </div>
      </section>

      {/* Registration */}
      <section className="py-12 px-4">
        <div className="mx-auto max-w-md">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="font-serif text-2xl font-bold text-masters-green text-center mb-6">
              Påmelding
            </h2>
            <RegistrationForm />
            <div className="mt-6 text-center">
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
