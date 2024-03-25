export default async function genre({params}){
    const id = params.id;
    let genreName = ''; 

    await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=31e1507410b28f1467c4589ed6e2d5e7&with_genres=${id}`)
            .then(response => response.json())
            .then((data)=> {
                genreName = data.name; 
            })
            .catch(error => console.error('Error fetching genres:', error));

    return (
        <h1>{genreName}</h1>
    );
}
