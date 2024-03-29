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
        <div className="bg-gradient-to-r from-[#000814] from-10% via-[#001d3d] via-30% to-[#000814] to-90% container mx-auto px-4">
  <h1 className="flex text-3xl font-bold mb-4 text-white pt-4 justify-center">Movies</h1>
  <div className="flex justify-center mb-4"> {/* Wrap the select element in a flex container */}
    <select onChange={handleSelectChange} className="block w-full md:w-36 p-2 border bg-gradient-to-r from-[#000814] from-10% via-[#001d3d] via-30% to-[#000814] to-90% text-white rounded-md">
      <option value="" className="text-[#000814]">Select Option</option>
      <option value="now_playing" className="text-[#000814]">Now Playing</option>
      <option value="popular" className="text-[#000814]">Popular</option>
      <option value="top_rated" className="text-[#000814]">Top Rated</option>
      <option value="upcoming" className="text-[#000814]">Upcoming</option>
    </select>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-5 p-8 bg-gradient-to-r from-[#000814] from-10% via-[#001d3d] via-30% to-[#000814] to-90% text-white">
    {movies.map(movie => (
      <Link key={movie.id} href={`./movies/${movie.id}`}>
        <p className="flex flex-col items-center rounded-lg shadow-md border-white p-4 hover:shadow-cyan-900 hover:border-cyan-800 border-2 border-transparent hover:font-bold">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="rounded-lg shadow-2xl mb-4"
          />
          <h2 className="text-lg font-semibold">{movie.title}</h2>
          {/* Add additional movie details here if needed */}
        </p>
      </Link>
    ))}
  </div>
</div>
    );
}
