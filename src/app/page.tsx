export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Home</h1>
        <p className="mt-2 text-gray-600">
          Use the navigation above. <a href="/rooms" className="text-blue-600 underline">Rooms</a> is a dedicated page; others are hash links.
        </p>
      </main>
    </div>
  );
}
