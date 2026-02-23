"use client";

import type { Room } from "@/types/room";

function formatPrice(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export default function RoomCard({ room }: { room: Room }) {
  const handleBook = () => {
    console.log("Book room:", room.id);
  };

  return (
    <article
      className="group flex flex-col rounded-xl border border-gray-100 bg-white p-5 shadow-sm shadow-gray-100/50 transition-all duration-200 hover:border-gray-200 hover:shadow-md hover:shadow-gray-200/40 focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:ring-offset-2"
      aria-labelledby={`room-${room.id}-name`}
    >
      <header className="mb-3">
        <h3
          id={`room-${room.id}-name`}
          className="line-clamp-2 min-h-[2.75rem] font-semibold leading-snug text-gray-900"
          title={room.name}
        >
          {room.name}
        </h3>
        <p className="mt-1 text-sm text-gray-500" aria-label={`Sleeps ${room.sleeps}`}>
          Sleeps {room.sleeps} • {room.sqFt ? `${room.sqFt} sq ft` : "— sq ft"}
        </p>
        <a
          href="#"
          className="mt-2 inline-block text-sm font-medium text-blue-600 underline decoration-blue-600/50 underline-offset-2 transition-colors hover:text-blue-700 hover:decoration-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:ring-offset-1 rounded"
          onClick={(e) => e.preventDefault()}
        >
          Room Details and Photos
        </a>
      </header>

      <div className="my-4 h-px w-full bg-gray-200" role="separator" />

      <div className="text-sm text-gray-500">
        {room.refundable ? "Refundable" : "Non-Refundable"}
      </div>

      <div className="mt-3 space-y-2" role="group" aria-label="Pricing">
        <div className="flex items-baseline gap-2">
          <span className="text-sm text-gray-500">Per night</span>
          <span className="font-semibold text-gray-900">
            {formatPrice(room.perNight)}
          </span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="text-2xl font-bold text-gray-900">
              {formatPrice(room.total)}
            </span>
            <span className="ml-1 text-sm font-normal text-gray-500">total</span>
          </div>
          <button
            type="button"
            onClick={handleBook}
            className="shrink-0 rounded-lg bg-emerald-600 px-5 py-2.5 font-semibold text-white shadow-sm transition-all duration-200 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 active:bg-emerald-800 disabled:pointer-events-none disabled:opacity-50"
            aria-label={`Book ${room.name}`}
          >
            Book
          </button>
        </div>
      </div>
    </article>
  );
}
