
'use client'

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
    <div className=" mt-10 flex justify-center w-full flex-wrap gap-20">
      {actors.map((actor) => (
        <div key={actor.id} className="bg-lavender shadow-md rounded-lg p-20 w-100">
          <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} className="w-60 rounded-lg" />
          <p className="my-10 text-center font-bold">{actor.name}</p>
        </div>
      ))}
    </div>
  );
  
}
