'use client'

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/person/popular?api_key=31e1507410b28f1467c4589ed6e2d5e7')
      .then((res) => res.json())
      .then((data) => {
        setActors(data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-r from-[#000814] via-[#001d3d] to-[#000814] text-white">
      <h1 className="text-3xl font-bold mb-4 text-center">Actors</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {actors.map((actor) => (
          <Link key={actor.id} href={`./actors/${actor.id}`}>
            <div className="mb-4 bg-white bg-opacity-30 shadow-lg rounded-lg border-2 border-[#778da9] relative">
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                className="w-full rounded-t-lg"
              />
              <div className="">
                <h2 className="text-lg font-semibold mb-6 mt-4 text-center">{actor.name}</h2>
              </div>
              <div className="absolute inset-x-0 bottom-0 mb-0 h-15 bg-white bg-opacity-30 shadow-lg rounded-b-lg"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
        }  