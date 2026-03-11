import Link from "next/link";

interface CompetitionCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export default function CompetitionCard({
  title,
  description,
  href,
  icon,
}: CompetitionCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-xl shadow-md overflow-hidden border-2 border-transparent hover:border-masters-gold transition-all hover:shadow-lg"
    >
      <div className="p-8 text-center">
        <div className="mx-auto mb-4 text-masters-green group-hover:text-masters-gold transition-colors">
          {icon}
        </div>
        <h3 className="font-serif text-xl font-bold text-masters-green mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </Link>
  );
}
