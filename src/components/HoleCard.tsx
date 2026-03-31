import Image from "next/image";
import { Hole } from "@/types";
import VideoEmbed from "./VideoEmbed";

export default function HoleCard({ hole }: { hole: Hole }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="bg-masters-green px-6 py-3 flex items-center justify-between">
        <h3 className="text-masters-gold font-serif text-xl font-bold">
          Hull {hole.number}
        </h3>
        <div className="flex gap-4 text-masters-white text-sm">
          <span>Par {hole.par}</span>
          <span>{hole.lengthMeters} m</span>
          <span>Hcp {hole.handicap}</span>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <p className="text-masters-text">{hole.description}</p>
        {hole.imageUrl && (
          <Image
            src={hole.imageUrl}
            alt={`Hull ${hole.number}`}
            width={800}
            height={500}
            className="w-full rounded-lg object-cover"
          />
        )}
        <VideoEmbed videoUrl={hole.videoUrl} title={`Hull ${hole.number}`} />
      </div>
    </div>
  );
}
