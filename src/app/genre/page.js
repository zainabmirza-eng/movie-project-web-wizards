'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function GenreMoviesPage() {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');

    useEffect(() => {
        // Fetch genres from API
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=31e1507410b28f1467c4589ed6e2d5e7')
            .then(response => response.json())
            .then(data => {
                setGenres(data.genres);
            })
            .catch(error => console.error('Error fetching genres:', error));
    }, []);

    const handleChange = (event) => {
        setSelectedGenre(event.target.value);
    };

    useEffect(() => {
        // Fetch movies based on selected genre
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=31e1507410b28f1467c4589ed6e2d5e7&with_genres=${selectedGenre}`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.results);
            })
            .catch(error => console.error('Error fetching movies:', error));
    }, [selectedGenre]);

    return (
        <div className="container grid grid-wrap justify-center gap-10 p-5 bg-gradient-to-r from-[#000814] from-10% via-[#001d3d] via-30% to-[#000814] to-90% ...">
    <h1 className="text-5xl font-bold text-white">Movies</h1>
    <div className="flex items-center">
        <label htmlFor="genreSelect" className="mr-2 text-xl text-[#e0fbfc]">Select Genre:</label>
        <select id="genreSelect" onChange={handleChange} className="flex items-center rounded bg-neutral-100 px-2 pb-2 pt-2 text-xs font-bold uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
            <option value="">All Genres</option>
            {genres.map(genre => (
                <option key={genre.id} value={genre.id} className='absolute z-[1000] float-left m-0 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg dark:bg-surface-dark'>{genre.name}</option>
            ))}
        </select>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 justify-center">
        {movies.map(movie => (
            <Link key={movie.id} href={`./movies/${movie.id}`}>
                <div className="group relative cursor-pointer items-center">
                    <img
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt=""
                        className="bg-white rounded-xl w-48 transform transition duration-500 hover:scale-110 justify-center items-center"
                    />
                    <div className="absolute rounded-xl inset-0 bg-[#1b263b] bg-opacity-80 text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center w-48">
                        <p className="text-center font-semibold uppercase">{movie.title}</p>
                    </div>
                </div>
            </Link>
        ))}
    </div>
</div>
    );
}
