"use client"
import Link from "next/link"
import Search from "./searchbar"
import React, { useState, useEffect } from "react"
import Image from "next/image"

export default function Navbar() {
  const [genres, setGenres] = useState([])
  const [showGenres, setShowGenres] = useState(false)

  useEffect(() => {
    const fetchGenres = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=31e1507410b28f1467c4589ed6e2d5e7",
      )
      const data = await res.json()
      setGenres(data.genres)
    }
    fetchGenres()
  }, [])

  const toggleGenres = () => {
    setShowGenres(!showGenres)
  }


  return (
    <div className=" h-17 sticky z-20 top-0 start-0 bg-gradient-to-r from-[#000814] from-10% via-[#001d3d] via-30% to-[#000814] to-90% ... ">
      <img
        className="pt-2 pb-0 mx-auto"
        width={300}
        src="https://64.media.tumblr.com/e7f5fc86cda8862ec0f29618230bec76/e77c3c7fdcb2d3cb-86/s1280x1920/5ffc5eca779b12c84901eb5b2e20cd5c276e5f0e.pnj"
      />

      <section className=" mt-0 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
 
 
        <div className=" flex items-center gap-4 transition-all">
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="text-center flex flex-col p-4 md:p-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <button className="block p-3   text-center rounded-md bg-yellow-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-yellow-700">
                  <Link href="/">Home</Link>
                </button>
              </li>
             </ul>

            <div className="relative">
              <button
                onClick={toggleGenres}
                className="block mt-2 px-3 py-2 text-white ml-4 rounded-md   hover:text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                {showGenres ? "Hide Genres" : "Show Genres"}
              </button>
              {showGenres && (
                <ul className="absolute top-full left-0 mt-2 p-2 bg-white border border-gray-200 rounded-md shadow-lg max-h-40 overflow-y-auto">
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
  )
}
