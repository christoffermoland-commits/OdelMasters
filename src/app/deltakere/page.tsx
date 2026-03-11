import ParticipantList from "@/components/ParticipantList";

export const metadata = {
  title: "Deltakere | Odel Masters",
};

export default function DeltakerePage() {
  return (
    <div className="py-12 px-4">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-masters-green text-center mb-8">
          Deltakere
        </h1>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <ParticipantList />
        </div>
      </div>
    </div>
  );
}
