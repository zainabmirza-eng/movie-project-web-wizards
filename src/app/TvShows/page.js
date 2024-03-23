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
        <div className=' mt-10 flex justify-center w-full flex-wrap gap-20'>
             {TvShows.map((show) => (
                <div  key={show.id} className="bg-lavender shadow-md rounded-lg p-200 w-100">
                    <img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt={show.name}  className="w-40 rounded-lg" />
                    <h2 className="my-10 text-center font-bold" >{show.name}</h2>
                </div>
            ))}
        </div>
    )
};
