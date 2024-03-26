import Link from "next/link";
import Search from "./components/searchbar";

async function Home() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=31e1507410b28f1467c4589ed6e2d5e7"
  );
  const movies = await res.json();

  const renderRatingStars = (rating) => {
    const maxRating = 5; // Maximum rating value
    const fullStars = Math.floor(rating / 2); // Number of full stars
    const halfStar = rating % 2 !== 0; // Check if there's a half star

    // Array to store JSX elements representing stars
    const stars = [];

    // Render full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-400">
          &#9733;
        </span>
      );
    }

    // Render half star if exists
    if (halfStar) {
      stars.push(
        <span key="half" className="text-yellow-400">
          &#9734;
        </span>
      );
    }

    // Render empty stars
    for (let i = 0; i < maxRating - fullStars - (halfStar ? 1 : 0); i++) {
      stars.push(
        <span key={i + fullStars + (halfStar ? 1 : 0)} className="text-gray-300">
          &#9734;
        </span>
      );
    }
    return stars;
  };

  return (
    <div>
      <div className="flex flex-wrap gap-5 items-center justify-center p-6 bg-gradient-to-r from-[#000814] from-10% via-[#001d3d] via-30% to-[#000814] to-90% ...">
        {movies.results.map((item) => (
          <Link key={item.id} href={`./movies/${item.id}`}>
            <div className="group relative">
              <div className="relative">
                <img
                  alt="poster"
                  className="bg-white rounded-xl w-48 transform transition duration-500 hover:scale-110"
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                />
                <div className="absolute rounded-xl inset-0 bg-[#1b263b] bg-opacity-80 text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <p className="text-center text-xl font-semibold uppercase">
                    {item.original_title}
                  </p>
                  <div className="flex flex-col items-center justify-center space-y-2">
                    
                    <div className="mr-1">{renderRatingStars(item.vote_average)}</div>
                    <div className="flex items-center">
                      <span className="mr-2 text-[#e0fbfc] text-sm">Language:</span>
                      <span>{item.original_language.toUpperCase()}</span>
                    </div>
                    <div>
                      <button className="px-2 py-1 text-xs bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
                        Watch Trailer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
