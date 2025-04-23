import SearchForm from "@/features/search-form/SearchForm";
import Link from "next/link";

export default function Home() {
  return (
    <main className="general-content">
      <h1 className="general-title">Find events around you</h1>
      <p className="mb-10 mt-5 text-2xl lg:text-3xl">
        Browse more than <span className="text-general italic font-bold underline">10,000 events</span> around you
      </p>

      <SearchForm />

      <section className="mt-4 flex gap-x-4 text-white/50 text-sm">
        <p>Popular:</p>
        <div className="space-x-2 font-semibold">
          <Link href="/events/london">London</Link>
          <Link href="/events/sydney">Sydney</Link>
        </div>
      </section>
    </main>
  );
}
