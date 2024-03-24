import React from 'react';
import ActorMovies from './ActorMovies'; // Assuming ActorMovies component is in the same directory

export default async function Actorcard({ params }) {
  const actorID = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${actorID}?api_key=31e1507410b28f1467c4589ed6e2d5e7`,
  );
  const data = await res.json();
  const actorinfo = data;
  const truncateBiography = (biography, maxLength) => {
    if (biography.length > maxLength) {
      return biography.substring(0, maxLength) + '...';
    } else {
      return biography;
    }
  };
  const truncatedBiography = truncateBiography(actorinfo.biography, 1000);
  return (
    <div className="flex flex-col items-center gap-5 p-5 bg-gradient-to-r from-[#000814] from-10% via-[#001d3d] via-30% to-[#000814] to-90% ... text-white">
      <div className="max-w-7xl w-full mx-auto p-4 flex flex-col md:flex-row items-start md:space-x-10 mb-12">
        <div className='md:w-1/2 p-4 flex justify-between items-start sm:w-1/4 mt-1'>
          <div className='max-w-sm'>
            <figure className='relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale-0 hover:grayscale'>
              <img
                src={`https://image.tmdb.org/t/p/original/${actorinfo.profile_path}`}
                alt={actorinfo.name}
                className="rounded-lg shadow-md max-w-sm bg-white"
              />
            </figure>
          </div>
        </div>
        <div className="md:w-3/4 mt-4 sm:w-3/4">
          <div>
            <h2 className="text-3xl font-bold mb-4">{actorinfo.name}</h2>
            <p className="text-lg font-semibold mb-2">{actorinfo.gender === 1 ? "Female" : "Male"}</p>
            <p className="text-lg mb-2">Popularity: {actorinfo.popularity}</p>
            <p className="text-lg mb-2">Birthday: {actorinfo.birthday}</p>
            <p className="text-lg mb-6 overflow-hidden">{truncatedBiography}</p>
          </div>
        </div>
      </div>
      <ActorMovies actorName={actorinfo.name} />
    </div>
  )
}
