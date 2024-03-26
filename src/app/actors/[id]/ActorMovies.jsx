"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ActorMovies({ actorName }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // Step 1: Search for actor's ID
        const searchRes = await fetch(`https://api.themoviedb.org/3/search/person?api_key=31e1507410b28f1467c4589ed6e2d5e7&query=${actorName}`);
        const searchData = await searchRes.json();
        const actorId = searchData.results[0].id;

        // Step 2: Get actor details to find movies they participated in
        const actorRes = await fetch(`https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=31e1507410b28f1467c4589ed6e2d5e7`);
        const actorData = await actorRes.json();
        setMovies(actorData.cast);
      } catch (error) {
        console.error('Error fetching actor movies:', error.message);
      }
    };

    fetchMovies();
  }, [actorName]);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-6">
      <h2 className="text-center text-2xl font-bold mb-4 mt-4 uppercase">Movies featuring {actorName}:</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 ">
        {movies.map((movie) => (
          <Link key={movie.id} href={`/movies/${movie.id}`} passHref>
            <div className="bg-white bg-opacity-30 shadow-lg rounded-lg border-2 border-[#778da9]">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="w-full rounded-t-lg"
              />
              <div className="p-4">
                <p className="text-lg text-center text-white font-semibold">{movie.title}</p>
                <p className="text-gray-100 text-center ">{movie.release_date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}