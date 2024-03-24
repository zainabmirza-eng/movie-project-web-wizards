'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function GenreMoviesPage() {
    const [movies, setMovies] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    useEffect(() => {
        if (selectedOption === '') return; // Do nothing if no option is selected

        fetch(`https://api.themoviedb.org/3/movie/${selectedOption}?api_key=31e1507410b28f1467c4589ed6e2d5e7`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.results);
            })
            .catch(error => console.error('Error fetching movies:', error));
    }, [selectedOption]);

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4">Movies</h1>
            <select onChange={handleSelectChange} className="block w-full p-2 border border-gray-300 rounded-md mb-4">
                <option value="">Select Option</option>
                <option value="now_playing">Now Playing</option>
                <option value="popular">Popular</option>
                <option value="top_rated">Top Rated</option>
                <option value="upcoming">Upcoming</option>
            </select>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {movies.map(movie => (
                        <Link key={movie.id} href={`./movies/${movie.id}`}>
                            <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="w-80 h-30 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold mb-2">{movie.title}</h2>
                            {/* Add additional movie details here if needed */}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
