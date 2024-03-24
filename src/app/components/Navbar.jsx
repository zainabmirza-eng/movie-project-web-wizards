   
import Link from 'next/link';

export default function Navbar() {


    return (
        <div className="bg-blue-500 mx-auto flex w-full justify-between px-4 py-2 text-sm">
            <section className="flex items-center gap-10">
                {/* logo */}
                <h2>logo</h2>
                <div className="flex items-center gap-4 transition-all">
                    <Link href="/">
                        <p className="relative group px-3 py-4 translate-all cursor-pointer">
                            <span className="flex items-center gap-2 text-neutral-600 group-hover:text-black">Home</span>
                        </p>
                    </Link>
                    
                    <Link href="/genre">
                        <p className="relative group px-3 py-4 translate-all cursor-pointer">
                            <span className="flex items-center gap-2 text-neutral-600 group-hover:text-black">
                                <span>Genre</span>
                            </span>
                        </p>
                    </Link>

                     
                     
                   
 

                    <Link href="/dropMovies">
                        <p className="relative group px-3 py-4 translate-all cursor-pointer">
                            <span className="flex items-center gap-2 text-neutral-600 group-hover:text-black">
                                <span>Movies</span>                                
                            </span>
                        </p>
                    </Link>
                    <Link href="/actors">
                        <p className="relative group px-3 py-4 translate-all cursor-pointer">
                            <span className="flex items-center gap-2 text-neutral-600 group-hover:text-black">Actors</span>
                        </p>
                    </Link>
                </div>
            </section>
            <section className="flex items-center gap-8">
                <Link href="/TvShows">
                    <p className="relative group px-3 py-4 translate-all cursor-pointer">
                        <span className="flex items-center gap-2 text-neutral-600 group-hover:text-black">Tv Shows</span>
                    </p>
                </Link>
            </section>
        </div>
    );
}
