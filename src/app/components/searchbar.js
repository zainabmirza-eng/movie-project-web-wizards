"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Search() {
  const [value, setValue] = useState("")
  const router = useRouter()
  const handleChange = (event) => setValue(event.target.value)
  function handleSubmit(e) {
    e.preventDefault()
    router.push(`/search/${value}`)
  }
  return (
    <div className="flex flex-1 items-center justify-center p-6 bg-transparent">
      <div className="w-full max-w-lg">
        <form onSubmit={handleSubmit} className="mt-3 sm:flex sm:items-center">
          <input
            className="inline w-full rounded-md border border-gray-300 bg-transparent py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-cyan-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-800 sm:text-sm"
            placeholder="Search for Movies"
            type="search"
            autofocus=""
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            type="submit"
            class="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-[#778da9] px-4 py-2 font-medium text-white shadow-sm hover:bg-cyan-900 focus:outline-none focus:ring-2 focus:ring-cyan-900 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  )
}