import CompetitionCard from "@/components/CompetitionCard";

export const metadata = {
  title: "Ekstra Konkurranser | Odel Masters",
};

const FlagIcon = () => (
  <svg className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
  </svg>
);

const RocketIcon = () => (
  <svg className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
);

const TrophyIcon = () => (
  <svg className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0116.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a9.011 9.011 0 01-5.02 1.529 9.011 9.011 0 01-5.021-1.529" />
  </svg>
);

export default function EkstraKonkurranserPage() {
  return (
    <div className="py-12 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-masters-green mb-3">
            Ekstra Konkurranser
          </h1>
          <p className="text-gray-600 text-lg">
            Ekstra sjanser til å vinne utover hovedturneringen
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <CompetitionCard
            title="Closest to Pin"
            description="Hvem kommer nærmest flagget? Presisjon er alt."
            href="/ekstra-konkurranser/closest-to-pin"
            icon={<FlagIcon />}
          />
          <CompetitionCard
            title="Longest Drive"
            description="Hvem slår lengst? Kraft og teknikk avgjør."
            href="/ekstra-konkurranser/longest-drive"
            icon={<RocketIcon />}
          />
          <CompetitionCard
            title="Amen Corner"
            description="De tre mest avgjørende hullene. Hvem takler presset?"
            href="/ekstra-konkurranser/amen-corner"
            icon={<TrophyIcon />}
          />
        </div>
      </div>
    </div>
  );
}
