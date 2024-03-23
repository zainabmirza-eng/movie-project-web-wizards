import Link from "next/link"
export default async function Search({ params }) {
  const movieSearch = params.search
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${movieSearch}&api_key=31e1507410b28f1467c4589ed6e2d5e7`,
  )
  const data = await res.json()
  const movieData = data.results
  return (
    <div>
      <div className="container overflow-hidden w-screen h-3/6 gap-5 justify-center py-5  flex flex-row px-50px flex-wrap">
        {movieData.map((item) => (
          <Link key={item.id} href={`./movies/${item.id}`}>
            <div key={item.id} className="overflow-hidden">
              <img
                className="w-48 rounded-sm  px-2 py-6  transform transition duration-500 hover:scale-110 "
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
