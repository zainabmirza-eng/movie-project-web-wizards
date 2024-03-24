"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SimilarMovies({ movieId }) {
  const [movies, setMovies] = useState([]);
  const [displayCount, setDisplayCount] = useState(5); // Initially display 5 movies

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=31e1507410b28f1467c4589ed6e2d5e7`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [movieId]); // Dependency array includes movieId to fetch similar movies when it changes

  const showMore = () => {
    setDisplayCount(prevCount => prevCount + 5); // Increase the display count by 5 when "Show More" is clicked
  };

  return (
    <div className="flex justify-center w-full flex-wrap gap-6">
      {movies.slice(0, displayCount).map((movie) => (
        <Link key={movie.id} href={`/movies/${movie.id}`} passHref>
          <div className="group relative">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="bg-white rounded-xl w-48 transform transition duration-500 hover:scale-110" />
            <div className='absolute rounded-xl inset-0 bg-[#1b263b] bg-opacity-80 text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
            <p className="text-center uppercase font-semibold">{movie.title}</p>
            </div>
          </div>
        </Link>
      ))}
      {movies.length > displayCount && (
        <button onClick={showMore} className="text-white hover:text-gray-900 border-1 border-gray-400 bg-gradient-to-r from-[#1b263b] to-gray-800 hover:bg-gradient-to-l hover:from-[#1b263b] hover:to-gray-300 focus:ring-4 focus:outline-none focus:ring-[#778da9] dark:focus:ring-teal-700 font-medium rounded-md text-sm px-5 py-2 text-center uppercase font-semibold">Show More</button>
      )}
    </div>
  );
}
