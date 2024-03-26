"use client"
import Link from 'next/link';
import Search from './searchbar';
import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [genres, setGenres] = useState([]);
    const [showGenres, setShowGenres] = useState(false);

    useEffect(() => {
        const fetchGenres = async () => {
            const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=31e1507410b28f1467c4589ed6e2d5e7');
            const data = await res.json();
            setGenres(data.genres);
        };
        fetchGenres();
    }, []);

    const toggleGenres = () => {
        setShowGenres(!showGenres);
    };

    return (
        <div className="sticky bg-white opacity-80 dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <section className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* logo */}
                <h2 className="flex items-center mt-1 space-x-3 rtl:space-x-reverse text-xl font-bold text-gray-800">Logo</h2>
                <div className="flex items-center gap-4 transition-all">
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <button className="block mt-2 px-3 py-2 text-gray-900 rounded-md hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                    <Link href="/">Home</Link>
                                </button>
                            </li>
                            <li>
                                <button onClick={toggleGenres} className="block mt-2 px-3 py-2 text-white bg-blue-700 rounded-md hover:bg-blue-600">
                                    {showGenres ? 'Hide Genres' : 'Show Genres'}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                {showGenres && (
                    <ul className="mt-2 p-2 bg-white border border-gray-200 rounded-md shadow-lg">
                        {genres.map((genre) => (
                            <li key={genre.id}>
                                <Link href={`/genre/${genre.id}`}>
                                    <p className="block px-4 py-2 text-gray-800 hover:bg-gray-100">{genre.name}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
                <ul className="flex flex-col p-4 md:p-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <button className="block mt-2 px-3 py-2 text-gray-900 rounded-md hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                            <Link href="/dropMovies">Movies</Link>
                        </button>
                    </li>
                    <li>
                        <button className="block mt-2 px-3 py-2 text-gray-900 rounded-md hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                            <Link href="/actors">Actors</Link>
                        </button>
                    </li>
                    <li>
                        <button className="block mt-2 px-3 py-2 text-gray-900 rounded-md hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                            <Link href="/TvShows">TV Shows</Link>
                        </button>
                    </li>
                    <Search />
                </ul>
            </section>
        </div>
    );
}