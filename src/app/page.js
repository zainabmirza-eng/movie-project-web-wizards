import Link from "next/link";
// import Search from "../components/search";

async function Home() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=31e1507410b28f1467c4589ed6e2d5e7"
  );
  const movies = await res.json();

  return (
    <div>
      {/* <div className="flex justify-center">  <Search /> </div> */}
      <div className="container overflow-hidden w-screen h-3/6 gap-5 justify-center py-5 flex flex-row px-50px flex-wrap">
      
        {movies.results.map((item) => (
          <Link href={`./movie/${item.id}`}>
            <div className="overflow-hidden">
              <img
                className="w-48 rounded-sm  px-2 py-6  transform transition duration-500 hover:scale-110 "
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;