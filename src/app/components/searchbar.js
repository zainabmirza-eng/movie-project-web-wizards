"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [value, setValue] = useState("");
  const router = useRouter();
  const handleChange = (event) => setValue(event.target.value);
  function handleSubmit(e) {
    e.preventDefault();
    router.push(`/search/${value}`);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
}
