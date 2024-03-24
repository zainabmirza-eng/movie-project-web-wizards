
import React from 'react';
import Image from 'next/image';
import CastList from './CastList';
import SimilarMovies from './SimilarMovies';
 

// Function to convert numerical rating to star icons
const renderRatingStars = (rating) => {
  const maxRating = 5 // Maximum rating value
  const fullStars = Math.floor(rating / 2) // Number of full stars
  const halfStar = rating % 2 !== 0 // Check if there's a half star

  // Array to store JSX elements representing stars
  const stars = []

  // Render full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={i} className="text-yellow-400">
        &#9733;
      </span>,
    )
  }

  // Render half star if exists
  if (halfStar) {
    stars.push(
      <span key="half" className="text-yellow-400">
        &#9734;
      </span>,
    )
  }

  // Render empty stars
  for (let i = 0; i < maxRating - fullStars - (halfStar ? 1 : 0); i++) {
    stars.push(
      <span key={i + fullStars + (halfStar ? 1 : 0)} className="text-gray-300">
        &#9734;
      </span>,
    )
  }
  return stars;
};

export default async function MovieDetail({ params }) {
  const id = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=31e1507410b28f1467c4589ed6e2d5e7`
  );
  console.log(res);
  const data = await res.json();
  const movieDetail = data;
  const { title, name, genres, overview, release_date, first_air_date, poster_path, backdrop_path, vote_average, runtime, original_language } = movieDetail;
  const roundedVoteAverage = movieDetail?.vote_average.toFixed(1);

  return (
    <div className="container flex flex-wrap justify-center gap-5 p-5 bg-gradient-to-r from-[#000814] from-10% via-[#001d3d] via-30% to-[#000814] to-90% ... text-white">
      <div className="mx-auto p-4">
        <div className="flex flex-col md:flex-row items-start md:space-x-6 max-w-6xl mx-auto mb-12">
        <div className="md:w-1/2 p-4 flex justify-evenly items-start sm:w-1/4 mt-1">
  <div className="max-w-md">
    <figure className='relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale-0 hover:grayscale'>
    <Image
      src={`https://image.tmdb.org/t/p/original/${poster_path || backdrop_path}`}
      alt=""
      width={300}
      height={300}
      className="max-w-xl bg-white rounded-xl transform transition duration-500 hover:scale-110"
    />
    </figure>
  </div>
</div>
          <div className="md:w-3/4 mt-4 sm:w-3/4">
            <h1 className="text-4xl font-bold mb-4 uppercase">{title || name}</h1>
            <p className="text-md mb-4">{overview}</p>
            <p className="mb-2"><span className='font-bold text-[#e0fbfc]'>Genre:</span> {genres && genres.slice(0, 5).map((genre, i) => (
              <span key={i} className="">{genre.name}-</span>
            ))}</p>
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-3 text-[#e0fbfc]">Cast</h2>
              <CastList id={id} />
            </div>
            <div className='flex flex-wrap justify-between'>
            <p className="mb-2"><span className='font-bold text-[#e0fbfc]'>Duration:</span> {runtime} minutes</p>
            <p className="mb-2"><span className='font-bold text-[#e0fbfc]'>Movie Language:</span> {original_language.toUpperCase()}</p>
            <p className="mb-2">{release_date || first_air_date}</p>
            <p className="mb-2">
              <span className="font-bold mr-1 text-[#e0e1dd]">Rating:</span>
              <span className="">
                {renderRatingStars(vote_average)}
                <span className="ml-2">{roundedVoteAverage}</span>
              </span>
            </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-4 text-center uppercase">Similar Movies</h2>
          <SimilarMovies movieId={id} />
        </div>
      </div>
    </div>
  )
}
