import HoleCard from "@/components/HoleCard";
import { holes } from "@/lib/holes";

export const metadata = {
  title: "Hullpresentasjon | Odel Masters",
};

export default function HullpresentasjonPage() {
  return (
    <div className="py-12 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-masters-green mb-3">
            Hullpresentasjon
          </h1>
          <p className="text-gray-600 text-lg">
            Bli kjent med alle 18 hull på Arendal og Omegn Golfklubb
          </p>
        </div>

        <div className="space-y-8">
          {holes.map((hole) => (
            <HoleCard key={hole.number} hole={hole} />
          ))}
        </div>
      </div>
    </div>
  );
}
