"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Photos", href: "#photos" },
  { label: "Rooms", href: "/rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Map", href: "#map" },
] as const;

export default function TopNav() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          {navItems.map((item) => {
            const isActive =
              item.href === "/rooms"
                ? pathname === "/rooms"
                : false;
            const href = item.href.startsWith("#")
              ? `${pathname === "/" ? "" : pathname}${item.href}`
              : item.href;

            return (
              <Link
                key={item.label}
                href={href}
                className={`relative pb-3 pt-4 text-[15px] font-normal transition-colors ${
                  isActive
                    ? "text-blue-600"
                    : "text-[#4A4A4A] hover:text-gray-700"
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    aria-hidden
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="h-px w-full bg-[#E0E0E0]" />
    </nav>
  );
}
