"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchForm() {
  const [searchCity, setSearchCity] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchCity) return;
    router.push(`/events/${searchCity}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
      <input
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-general/50 transition focus:ring-2 focus:bg-white/12"
        type="text"
        onChange={(e) => setSearchCity(e.target.value)}
        value={searchCity}
        placeholder="Search events in any city..."
        spellCheck={false}
      />
    </form>
  );
}
