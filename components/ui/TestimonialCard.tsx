import Card from "./Card";

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
}

export default function TestimonialCard({
  name,
  role,
  quote,
}: TestimonialCardProps) {
  return (
    <Card>
      <div className="space-y-4">
        <p className="text-sm text-n-600 leading-relaxed italic">
          &ldquo;{quote}&rdquo;
        </p>
        <div>
          <p className="text-sm font-semibold text-n-900">{name}</p>
          <p className="text-xs text-n-500">{role}</p>
        </div>
      </div>
    </Card>
  );
}
