// File: src/components/StarRating.tsx

export default function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < count ? "#b8860b" : "#d4c4a0" }}>★</span>
      ))}
    </div>
  );
}