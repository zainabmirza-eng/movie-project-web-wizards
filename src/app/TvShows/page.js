'use client'
import { useState, useEffect } from "react";

export default function TvShows(){

    const [TvShows, setTvShows] = useState([]);

    useEffect(() => {
      fetch('https://api.themoviedb.org/3/discover/tv?api_key=31e1507410b28f1467c4589ed6e2d5e7')
        .then((res) => res.json())
        .then((data) => {
          setTvShows(data.results);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []); // Empty dependency array ensures the effect runs only once on component mount

    return(
        <div className='grid grid-cols-5 justify-center gap-5 p-8 bg-gradient-to-r from-[#000814] from-10% via-[#001d3d] via-30% to-[#000814] to-90% ... text-white'>
             {TvShows.map((show) => (
                <div  key={show.id} className="items-center rounded-lg shadow-md border-white p-4 hover:shadow-cyan-900 hover:border-cyan-800 border-2 border-transparent hover:font-bold">
                    <img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt={show.name}  className="rounded-lg shadow-2xl " />
                    <h2 className="text-lg font-semibold p-4" >{show.name}</h2>
                </div>
            ))}
        </div>
    )
};