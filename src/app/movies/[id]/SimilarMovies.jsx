"use client"
import React, { useState, useEffect } from 'react';

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
        <div key={movie.id} className="bg-white shadow-lg rounded-lg p-6 w-64">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full rounded-lg mb-4" />
          <p className="text-center font-bold">{movie.title}</p>
        </div>
      ))}
      {movies.length > displayCount && (
        <button onClick={showMore} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Show More</button>
      )}
    </div>
  );
}
