function SkeletonCard() {
  return (
    <div
      className="
      card
      animate-pulse
      rounded-2xl
      p-5
      bg-[var(--card)]
    "
    >
      <div
        className="
        h-6
        bg-gray-300
        rounded
        w-2/3
        mb-4
      "
      />

      <div className="space-y-3">
        <div className="h-4 bg-gray-300 rounded" />
        <div className="h-4 bg-gray-300 rounded" />
        <div className="h-4 bg-gray-300 rounded w-5/6" />
      </div>

      <div
        className="
        h-4
        bg-gray-300
        rounded
        w-20
        mt-5
      "
      />
    </div>
  );
}

export default SkeletonCard;