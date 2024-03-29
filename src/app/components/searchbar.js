"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Value } from "sass"
import Link from "next/link"

export default function Search() {
  const [value, setValue] = useState("");
  const [genres, setGenres] = useState([]);
  const [showGenres, setShowGenres] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchGenres = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=31e1507410b28f1467c4589ed6e2d5e7"
      );
      const data = await res.json();
      setGenres(data.genres);
    };
    fetchGenres();
  }, []);

  const handleChange = (event) => setValue(event.target.value);

  function handleSubmit(e) {
    e.preventDefault();
    router.push(`/search/${value}`);
  }

  const toggleGenres = () => {
    setShowGenres(!showGenres);
  };


  return (
    <nav className="bg-gradient-to-r from-[#000814] via-[#001d3d] to-[#000814]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-8 rtl:space-x-reverse justify-start sm:justify-center w-full md:w-auto">
          <Link href="/">
            <img
              src="https://64.media.tumblr.com/e7f5fc86cda8862ec0f29618230bec76/e77c3c7fdcb2d3cb-86/s1280x1920/5ffc5eca779b12c84901eb5b2e20cd5c276e5f0e.pnj"
              width={180}
              className="h-8"
              alt="Flowbite Logo"
            />
          </Link>
          <form onSubmit={handleSubmit} className="md:flex">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
          </form>
        </div>
        <ul className="flex sm:flex-row space-x-2 sm:justify-center justify-center p-4 md:p-0 mt-4 font-medium sm:space-x-10 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-sm sm:text-base">
          <li>
            <Link
              href="/"
              className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 hover:text-gray-900 md:dark:hover:bg-transparent hover:bg-transparent dark:border-gray-700"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/dropMovies"
              className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 hover:text-gray-900 md:dark:hover:bg-transparent hover:bg-transparent dark:border-gray-700"
            >
              Movies
            </Link>
          </li>
          <li>
           <button onClick={toggleGenres}
           className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 hover:text-gray-900 md:dark:hover:bg-transparent hover:bg-transparent dark:border-gray-700">
            {showGenres ? "Genres" : "Genres"}
           </button>
           {showGenres && (
                <ul className="absolute z-10 mt-2 pt-2 bg-white border border-gray-200 rounded-md shadow-lg max-h-40 overflow-y-auto">
                  {genres.map((genre) => (
                    <li key={genre.id}>
                      <Link href={`/genre/${genre.id}`}>
                        <p className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                          {genre.name}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
          </li>
          <li>
            <Link
              href="/actors"
              className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 hover:text-gray-900 md:dark:hover:bg-transparent hover:bg-transparent dark:border-gray-700"
            >
              Actors
            </Link>
          </li>
          <li>
            <Link
              href="/TvShows"
              className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 hover:text-gray-900 md:dark:hover:bg-transparent hover:bg-transparent dark:border-gray-700"
            >
              Shows
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}