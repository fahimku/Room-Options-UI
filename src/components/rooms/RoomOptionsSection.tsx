"use client";

import { useEffect, useState } from "react";
import type { Room } from "@/types/room";
import { ROOMS_MOCK } from "@/types/room";
import RoomCard from "./RoomCard";
import RoomCardSkeleton from "./RoomCardSkeleton";

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 6;

export default function RoomOptionsSection() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRooms(ROOMS_MOCK);
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const visibleRooms = rooms.slice(0, visibleCount);
  const hasMore = rooms.length > visibleCount;

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + LOAD_MORE_COUNT);
  };

  return (
    <section
      className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
      aria-labelledby="room-options-heading"
    >
      <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2
          id="room-options-heading"
          className="text-2xl font-bold tracking-tight text-gray-900"
        >
          Room Options
        </h2>
        <div
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50/80 px-3 py-1.5"
          aria-label="Best Price Guaranteed"
        >
          {process.env.NEXT_PUBLIC_FONT_AWESOME_KIT_ID ? (
            <i
              className="fa-light fa-shield-check shrink-0 text-emerald-600"
              style={{ fontSize: "1rem" }}
              aria-hidden
            />
          ) : (
            <svg
              className="h-4 w-4 shrink-0 text-emerald-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="none"
              stroke="currentColor"
              strokeWidth="20"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M256 64L64 128v144c0 96 96 160 192 176 96-16 192-80 192-176V128L256 64z" />
              <path d="M352 176L224 304l-64-64" strokeWidth="28" />
            </svg>
          )}
          <span className="text-sm font-medium text-gray-600">
            Best Price Guaranteed
          </span>
        </div>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <RoomCardSkeleton key={i} />
            ))
          : visibleRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
      </div>

      {!isLoading && hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={handleViewMore}
            className="inline-flex items-center gap-2 text-base font-medium text-blue-600 transition-colors hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:ring-offset-2 rounded"
          >
            View More Room Options
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      )}

      {!isLoading && rooms.length > INITIAL_COUNT && !hasMore && (
        <p className="mt-6 text-center text-sm text-gray-500">
          Showing all {rooms.length} room options
        </p>
      )}
    </section>
  );
}
