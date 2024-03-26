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
        const option = selectedOption || 'popular';

        fetch(`https://api.themoviedb.org/3/movie/${option}?api_key=31e1507410b28f1467c4589ed6e2d5e7`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.results);
            })
            .catch(error => console.error('Error fetching movies:', error));
    }, [selectedOption]);

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-8 text-center">Movies</h1>
            <div className="flex justify-center mb-8">
                <select
                    onChange={handleSelectChange}
                    className="block w-full p-3 border border-gray-300 rounded-md shadow-md focus:outline-none focus:border-blue-500"
                >
                    <option value="">Select Option</option>
                    <option value="now_playing">Now Playing</option>
                    <option value="popular">Popular</option>
                    <option value="top_rated">Top Rated</option>
                    <option value="upcoming">Upcoming</option>
                </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {movies.map(movie => (
                    <Link key={movie.id} href={`./movies/${movie.id}`}>
                        <div className="relative group">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                className="w-full h-auto object-cover rounded-lg transition duration-300 ease-in-out transform group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                                <h2 className="text-lg font-semibold">{movie.title}</h2>
                                {/* Add additional movie details here if needed */}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
    
}
