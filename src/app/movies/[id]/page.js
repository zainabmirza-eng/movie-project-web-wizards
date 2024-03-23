
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
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row items-start md:space-x-6 max-w-6xl mx-auto">
          <div className="md:w-1/2">
            <Image
              src={`https://image.tmdb.org/t/p/original/${poster_path || backdrop_path}`}
              alt=""
              width={300}
              height={300}
              className="rounded-lg p-4"
            />
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <h1 className="text-3xl font-bold mb-4">{title || name}</h1>
            <p className="text-lg mb-4">{overview}</p>
            <p className="mb-4">Genre: {genres && genres.slice(0, 5).map((genre, i) => (
              <span key={i} className="">{genre.name}-</span>
            ))}</p>
            <div className="mb-4">
              <h2 className="text-xl font-bold">Casts</h2>
              <CastList id={id} />
            </div>
            <p className="mb-4">Duration: {runtime} minutes</p>
            <p className="mb-4">Movie Language: {original_language}</p>
            <p className="mb-4">{release_date || first_air_date}</p>
            <p className="mb-4">
              <span className="font-semibold mr-1">Rating:</span>
              <span className="flex items-center">
                {renderRatingStars(vote_average)}
                <span className="ml-2">{roundedVoteAverage}</span>
              </span>
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Similar Movies</h2>
          <SimilarMovies movieId={id} />
=======
  return stars
}

// Fetch movie recommendations
// const getMovieRec = async (ID) => {
//   const res = await fetch(
//     `https://api.themoviedb.org/3/movie/${ID}/recommendations?api_key=31e1507410b28f1467c4589ed6e2d5e7&language=en-US`
//   );
//   return res.json();
// };

export default async function MovieDetail({ params }) {
  const id = params.id
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=31e1507410b28f1467c4589ed6e2d5e7`,
  )
  console.log(res)
  const data = await res.json()
  const movieDetail = data
  const {
    title,
    name,
    genres,
    overview,
    release_date,
    first_air_date,
    poster_path,
    backdrop_path,
    vote_average,
    runtime,
    original_language,
  } = movieDetail

  const getBackgroundColorClass = (voteAverage) => {
    if (voteAverage < 5) {
      return "bg-red-700"
    } else if (voteAverage === 5) {
      return "bg-orange-700"
    } else {
      return "bg-green-700"
    }
  }

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${poster_path || backdrop_path}`}
          alt=""
          width={300}
          height={300}
          className="rounded-lg p-4"
          style={{ maxWidth: "100%", height: "100%" }}
        />
        <div className="p-4 pt-20">
          <h1 className="text-lg mb-3 font-bold">{title || name}</h1>
          <p>{overview}</p>
          <p>
            Genre:{" "}
            {genres &&
              genres.slice(0, 5).map((genre, i) => (
                <span key={i} className="">
                  {genre.name}-
                </span>
              ))}
          </p>
          <div className="cast">
            <div className="section__header">
              <h2>Casts</h2>
            </div>
            <CastList id={id} />
          </div>
          <p>Runtime: {runtime} minutes</p>
          <p>Original Language: {original_language}</p>
          <p>{release_date || first_air_date}</p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {renderRatingStars(vote_average)}
          </p>
          <span
            className={`flex flex-col p-2 text-white rounded-md ${getBackgroundColorClass(movieDetail?.vote_average)}`}
          >
            {movieDetail?.vote_average}
          </span>

        </div>
      </div>
    </div>
  )
}
