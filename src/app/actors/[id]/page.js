import React from 'react';
import ActorMovies from './ActorMovies'; // Assuming ActorMovies component is in the same directory

export default async function Actorcard({ params }) {
  const actorID = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${actorID}?api_key=31e1507410b28f1467c4589ed6e2d5e7`,
  );
  const data = await res.json();
  const actorinfo = data;

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="md:w-1/3">
          <img
            src={`https://image.tmdb.org/t/p/original/${actorinfo.profile_path}`}
            alt={actorinfo.name}
            className="rounded-lg shadow-md w-full"
          />
        </div>
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-4">{actorinfo.name}</h2>
          <p className="text-lg font-semibold mb-2">{actorinfo.gender === 1 ? "Female" : "Male"}</p>
          <p className="text-lg mb-2">Popularity: {actorinfo.popularity}</p>
          <p className="text-lg mb-2">Birthday: {actorinfo.birthday}</p>
          <p className="text-lg mb-6">{actorinfo.biography}</p>
        </div>
      </div>
      <ActorMovies actorName={actorinfo.name} />
    </div>
  )
}
