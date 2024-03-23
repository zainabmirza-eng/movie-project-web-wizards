export default async function Actorcard({ params }) {
  const actorID = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${actorID}?api_key=31e1507410b28f1467c4589ed6e2d5e7`,
  )
  const data = await res.json();
  const actorinfo = data;

  return (
    <div>
      <div></div>
      <div>
        <img
          width={50}
          src={`https://image.tmdb.org/t/p/original/${actorinfo.profile_path}`}
        />
        <h3>{actorinfo.name}</h3>
        <p>{actorinfo.gender === 1 ? "female" : "male"}</p>
        <p>{actorinfo.popularity}</p>
        <p>{actorinfo.birhtday}</p>
        <p>{actorinfo.biography}</p>
      </div>
    </div>
  )
}
