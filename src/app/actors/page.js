
'use client'

import React, { useState, useEffect } from 'react';

export default function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/person/popular?api_key=31e1507410b28f1467c4589ed6e2d5e7')
      .then((res) => res.json())
      .then((data) => {
        setActors(data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        width: "100%",
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '20px',  
      }}>
        {actors.map((actor) => (
          <div key={actor.id} style={{
            backgroundColor: 'lavender', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
            borderRadius: '8px',  
            padding: '20px', 
            width: '200px',  
          }}>
            <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} style={{
              width: '100%', 
              borderRadius: '8px',  
            }} />
            <p style={{ margin: '10px 0', textAlign: 'center', fontWeight: 'bold' }}>{actor.name}</p>
          </div>
        ))}
      </div>
      
  );
}
