import Link from "next/link";

export default async function Search({ params }) {
  const movieSearch = params.search;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${movieSearch}&api_key=31e1507410b28f1467c4589ed6e2d5e7`
  );
  const data = await res.json();
  const movieData = data.results;

  return (
    <div className="">
      <div className="flex flex-wrap gap-5 items-center justify-center p-6 bg-gradient-to-r from-[#000814] from-10% via-[#001d3d] via-30% to-[#000814] to-90% ...">
        {movieData.map((item) => (
          <Link key={item.id} href={`/movies/${item.id}`}>
              <div className="group relative pt-8">
                <div className="relative">
                  <img
                    className="bg-white rounded-xl w-48 transform transition duration-500 hover:scale-110"
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    alt="poster"
                  />
                  <div className="absolute rounded-xl inset-0 bg-[#1b263b] bg-opacity-80 text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-center font-semibold uppercase">
                      {item.original_title}
                    </p>
                  </div>
                </div>
              </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
