import Card from "./Card";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
}

export default function ServiceCard({
  title,
  description,
  features,
}: ServiceCardProps) {
  return (
    <Card hover>
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-n-900">{title}</h3>
        <p className="text-sm text-n-600 leading-relaxed">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-n-500"
            >
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
