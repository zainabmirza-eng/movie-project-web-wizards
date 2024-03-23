export default async function CastList({ id }) {
    try {
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=31e1507410b28f1467c4589ed6e2d5e7&language=en-US`
        );
        if (!res.ok) {
            throw new Error('Failed to fetch cast list');
        }
        const data = await res.json();
        const casts = data.cast.slice(0, 5);

        let directorName = '';

        if (data.crew) {
            const director = data.crew.find(member => member.known_for_department === 'Directing');
            if (director) {
                directorName = director.name;
            } else {
                directorName = 'Director not found';
            }
        }

        return (
            <div className="casts">
                {casts.map((item, i) => (
                    <div key={i} className="casts__item">
                        <div
                            className="casts__item__img"
                            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${item.profile_path})` }}
                        ></div>
                        <p className="casts__item__name">{item.name}</p>
                    </div>
                ))}
                <p>Director: {directorName}</p>
            </div>
        );
    } catch (error) {
        console.error('Error fetching cast list:', error.message);
        return <p>Error fetching cast list</p>;
    }
}
