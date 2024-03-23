import Link from "next/link"
import { IoIosArrowUp } from "react-icons/io";
 export default function Navbar()
{
    return(
        <div className="bg-blue-500  mx-auto flex w-full justify-between px-4 py-2 text-sm">
            <section className="flex items-center gap-10">
            {/* logo */}
            <h2>logo</h2>
 
             <Link href="/" className=" relative group px-3 py-4 translate-all">
                <p className="flex cursor-pointer items-center gap-2 text-neutral-600 group-hover:text-black">Home</p>
                </Link>


            <div className="flex items-center gap-4 transition-all">
                <Link href="/genre" className=" relative group px-3 py-4 translate-all">
                <p className="flex cursor-pointer items-center gap-2 text-neutral-600 group-hover:text-black">
                <span>Genre</span>
                <IoIosArrowUp className="rotate-180 translate-all group-hover:rotate-0"/>

                {/* dropdown */}
                <div className="absolute top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py3 shadow-md
                    transition-all group-hover:flex">
                    Comedy
                    Action
                    Drama
                    Horror
                    </div> 
               </p>
                </Link>

                <Link href="/dropMovies" className=" relative group px-3 py-4 translate-all">
                <p className="flex cursor-pointer items-center gap-2 text-neutral-600 group-hover:text-black">
                <span>Movies</span>
                <IoIosArrowUp className="rotate-180 translate-all group-hover:rotate-0"/>

                {/* dropdown */}
                <div className="absolute top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py3 shadow-md
                    transition-all group-hover:flex">
                    Latest 
                    Upcoming
                    Top Rated
                    </div> 
               </p>
                </Link>

                <Link href="/actors" className=" relative group px-3 py-4 translate-all">
                <p className="flex cursor-pointer items-center gap-2 text-neutral-600 group-hover:text-black">
                    Actors                 
               </p>
                </Link>

                
            </div>
                </section>

                <section className="flex items-center gap-8">
                <Link href="/TvShows" className=" relative group px-3 py-4 translate-all">
                <p className="flex cursor-pointer items-center gap-2 text-neutral-600 group-hover:text-black">
                    Tv Shows                
               </p>
                </Link>
                    
                </section>
        </div>
    )
}


