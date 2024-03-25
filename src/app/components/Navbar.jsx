 
 
 import Link from 'next/link';
 


export default async function  Navbar() {
   
    const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=31e1507410b28f1467c4589ed6e2d5e7');
    const data = await res.json();
    const genres = data.genres;
    

    return (
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 mx-auto flex w-full justify-between px-4 py-2 text-sm font-roboto">
    <section className="flex items-center gap-10">
        {/* logo */}
        <h2 className="text-white font-bold text-lg">My Cinema</h2>
        <div className="flex items-center gap-4 transition-all">
            <Link href="/">
                <p className="relative group px-3 py-4 translate-all cursor-pointer">
                    <span className="flex items-center gap-2 text-neutral-600 group-hover:text-white">Home</span>
                </p>
            </Link>
            



            <div className='group bg-white w-15 h-5 mt-10'>
                {genres.map((genre) => (
                    <Link href={`/genre/${genre.id}`}
                    key={genre.id}
                    >
                        <p>{genre.name}</p>
                    </Link>
                ))}
            </div>

            {/* <Link href="/genre">
                <p className="relative group px-3 py-4 translate-all cursor-pointer">
                    <span className="flex items-center gap-2 text-neutral-600 group-hover:text-white">
                        <span>Genre</span>                                
                    </span>
                </p>
            </Link> */}

            <Link href="/dropMovies">
                <p className="relative group px-3 py-4 translate-all cursor-pointer">
                    <span className="flex items-center gap-2 text-neutral-600 group-hover:text-white">
                        <span>Movies</span>                                
                    </span>
                </p>
            </Link>
            <Link href="/actors">
                <p className="relative group px-3 py-4 translate-all cursor-pointer">
                    <span className="flex items-center gap-2 text-neutral-600 group-hover:text-white">Actors</span>
                </p>
            </Link>
        </div>
    </section>
    <section className="flex items-center gap-8">
        <Link href="/TvShows">
            <p className="relative group px-3 py-4 translate-all cursor-pointer">
                <span className="flex items-center gap-2 text-neutral-600 group-hover:text-white">Tv Shows</span>
            </p>
        </Link>
    </section>
</div>

    );
}
