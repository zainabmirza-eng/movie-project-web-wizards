'use client'

import { useState, useEffect } from 'react';

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
        <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Movies</h1>
        <select onChange={handleChange} className="block w-full p-2 border border-gray-300 rounded-md mb-4">
            <option value="">Select Genre</option>
            {genres.map(genre => (
                <option key={genre.id} value={genre.id}>{genre.name}</option>
            ))}
        </select>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movies.map(movie => (
                <div key={movie.id} className="bg-white border border-gray-200 rounded-md shadow-md overflow-hidden">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="w-80 h-30 object-cover"
                    />
                    <div className="p-4">
                        <h2 className="text-lg font-semibold mb-2">{movie.title}</h2>
                        {/* Add additional movie details here if needed */}
                    </div>
                </div>
            ))}
        </div>
    </div>
    
    );
}
