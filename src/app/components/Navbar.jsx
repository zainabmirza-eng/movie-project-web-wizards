"use client"
import Link from "next/link";
import Search from "./searchbar";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [genres, setGenres] = useState([]);
  const [showGenres, setShowGenres] = useState(false);

  useEffect(() => {
    const fetchGenres = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=31e1507410b28f1467c4589ed6e2d5e7",
      );
      const data = await res.json();
      setGenres(data.genres);
    };
    fetchGenres();
  }, []);

  const toggleGenres = () => {
    setShowGenres(!showGenres);
  };

  return (
    <div className="h-17 sticky z-10 top-0 start-0 bg-gradient-to-r from-[#000814] from-10% via-[#001d3d] via-30% to-[#000814] to-90% ...">
      <section className="mt-0 max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <div className="flex items-center gap-4">
          <img
            className="mr-8 pb-0"
            width={200}
            src="https://64.media.tumblr.com/e7f5fc86cda8862ec0f29618230bec76/e77c3c7fdcb2d3cb-86/s1280x1920/5ffc5eca779b12c84901eb5b2e20cd5c276e5f0e.pnj"
          />
          <div
            className="hidden md:flex md:items-center md:justify-between md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col md:flex-row items-center p-4 md:p-0 font-medium border text-white rounded-lg bg-gray md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <button className="block mt-2 px-3 py-2 text-white rounded-md hover:text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <Link href="/">Home</Link>
                </button>
              </li>
            </ul>

            <div className="relative">
              <button
                onClick={toggleGenres}
                className="block mt-2 px-3 py-2 text-white ml-4 rounded-md hover:text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                {showGenres ? "Hide Genres" : "Show Genres"}
              </button>
              {showGenres && (
                <ul className="absolute left-0 mt-2 pt-2 bg-white border border-gray-200 rounded-md shadow-lg max-h-40 overflow-y-auto">
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
            </div>
          </div>
        </div>
        <ul className="flex flex-col md:flex-row items-center p-4 md:p-0 font-medium border text-white rounded-lg bg-gray md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <button className="block mt-2 px-3 py-2 text-white rounded-md hover:text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
              <Link href="/dropMovies">Movies</Link>
            </button>
          </li>
          <li>
            <button className="block mt-2 px-3 py-2 text-white rounded-md hover:text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
              <Link href="/actors">Actors</Link>
            </button>
          </li>
          <li>
            <button className="block mt-2 px-3 py-2 text-white rounded-md hover:text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
              <Link href="/TvShows">TV Shows</Link>
            </button>
          </li>
          <Search />
        </ul>
      </section>
    </div>
  );
}
