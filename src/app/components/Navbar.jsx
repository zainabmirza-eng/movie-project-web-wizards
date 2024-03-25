 'use client'
 
 import Link from 'next/link';
 
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
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 mx-auto flex w-full justify-between px-4 py-2 text-sm font-roboto">
    <section className="flex items-center gap-10">
        {/* logo */}
        <h2 className="text-white font-bold text-lg">Logo</h2>
        <div className="flex items-center gap-4 transition-all">
            <Link href="/">
                <p className="relative group px-3 py-4 translate-all cursor-pointer">
                    <span className="flex items-center gap-2 text-neutral-600 group-hover:text-white">Home</span>
                </p>
            </Link>
            

            <div>
             <button onClick={toggleGenres}>
                {showGenres ? 'Hide Genres' : 'Show Genres'} {'>'}
            </button>
            {showGenres && (
                <ul className="grid grid-cols-3 gap-4">
                {genres.map((genre) => (
                    <li key={genre.id} className="border rounded-lg overflow-hidden">
                        <a href={`/genre/${genre.id}`} className="block p-4 hover:bg-gray-200 transition-colors duration-300">{genre.name}</a>
                    </li>
                ))}
            </ul>
            
            )}
        </div>
        


            {/* <div className='group bg-white w-15 h-5 mt-10'>
                {genres.map((genre) => (
                    <Link href={`/genre/${genre.id}`}
                    key={genre.id}
                    >
                        <p>{genre.name}</p>
                    </Link>
                ))}
            </div> */}

            {/* <Link href="/genre">
                <p className="relative group px-3 py-4 translate-all cursor-pointer">
                    <span className="flex items-center gap-2 text-neutral-600 group-hover:text-white">
                        <span>Genre</span>                                
                    </span>
                </p>
            </Link> */}

            <Link href="/dropMovies">
                <p className="relative group px-3 py-4 translate-all cursor-pointer">
                    <span className="flex items-center gap-2 text-neutral-600 group-hover:text-white">
                        <span>Movies</span>                                
                    </span>
                </p>
            </Link>
            <Link href="/actors">
                <p className="relative group px-3 py-4 translate-all cursor-pointer">
                    <span className="flex items-center gap-2 text-neutral-600 group-hover:text-white">Actors</span>
                </p>
            </Link>
        </div>
    </section>
    <section className="flex items-center gap-8">
        <Link href="/TvShows">
            <p className="relative group px-3 py-4 translate-all cursor-pointer">
                <span className="flex items-center gap-2 text-neutral-600 group-hover:text-white">Tv Shows</span>
            </p>
        </Link>
    </section>
</div>

    );
}
