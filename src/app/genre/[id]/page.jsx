 
export default async function Genre({params}) {
    const id = params.id;
 
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=31e1507410b28f1467c4589ed6e2d5e7&with_genres=${id}`);
    const data = await res.json();
    const genres = data.results;
    console.log(genres)
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
    {genres.map((genre) => (
        <div key={genre.id} className="rounded-lg shadow-md border border-gray-200 p-4">
            <h1 className="text-lg font-semibold mb-2">{genre.original_title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${genre.poster_path}`} className="w-full h-auto rounded-lg" alt={genre.original_title} />
        </div>
    ))}
</div>


    


         
    );
}
