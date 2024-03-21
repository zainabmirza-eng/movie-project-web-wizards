"use client"


import React, { useState, useEffect } from 'react';

export default function Actors() {
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Fetch genres from API
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=31e1507410b28f1467c4589ed6e2d5e7')
            .then(response => response.json())
            .then(data => {
                setGenres(data.genres);
            })
            .catch(error => console.error('Error fetching genres:', error));
    }, []);

    useEffect(() => {
        // Fetch movies based on selected genre
        if (selectedGenre) {
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=31e1507410b28f1467c4589ed6e2d5e7&with_genres=${selectedGenre}`)
                .then(response => response.json())
                .then(data => {
                    setMovies(data.results);
                })
                .catch(error => console.error('Error fetching movies:', error));
        }
    }, [selectedGenre]);

    const handleGenreChange = (event) => {
        setSelectedGenre(event.target.value);
    };

    return (
        <div>
             <select value={selectedGenre} onChange={handleGenreChange}>
                <option value="">Select Genre</option>
                {genres.map(genre => (
                    <option key={genre.id} value={genre.id}>{genre.name}</option>
                ))}
            </select>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h2>Movies</h2>
                <ul>
                    {movies.map(movie => (
                        <li key={movie.id}>
                        <div >
                        <h2 style={{ fontSize: '18px', margin: '0' }} >{movie.title}</h2>

                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                style={{ width: '20%'  }} />
                             
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
