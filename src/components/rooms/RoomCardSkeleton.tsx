export default function RoomCardSkeleton() {
  return (
    <div
      className="flex flex-col rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
      role="status"
      aria-label="Loading room"
    >
      <div className="mb-3">
        <div className="h-5 w-4/5 animate-pulse rounded bg-gray-200" />
        <div className="mt-2 h-4 w-1/3 animate-pulse rounded bg-gray-100" />
        <div className="mt-3 h-3 w-1/2 animate-pulse rounded bg-gray-100" />
      </div>
      <div className="h-3 w-1/4 animate-pulse rounded bg-gray-100" />
      <div className="mt-4 flex flex-1 flex-col gap-4">
        <div className="space-y-2">
          <div className="h-4 w-20 animate-pulse rounded bg-gray-100" />
          <div className="h-6 w-16 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-12 animate-pulse rounded bg-gray-100" />
          <div className="h-7 w-20 animate-pulse rounded bg-gray-200" />
        </div>
        <div className="h-12 w-full animate-pulse rounded-lg bg-gray-200" />
      </div>
      <span className="sr-only">Loading room option...</span>
    </div>
  );
}
