export function Marquee({ items }: { items: React.ReactNode[] }) {
  return (
    <div className="relative overflow-hidden">
      <div className="animate-marquee whitespace-nowrap will-change-transform">
        {[...items, ...items].map((it, i) => (
          <span key={i} className="mx-8 inline-flex items-center opacity-80">
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}
