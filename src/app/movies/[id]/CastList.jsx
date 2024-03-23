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
        const uniqueCasts = [...new Set(casts)]; // Remove duplicates from casts array
        return (
            <div className="casts">
                        <div className="flex flex-wrap gap-2">
                            {uniqueCasts.map((item, i) => (
                        <a key={i} href={`#`} className="text-gray-900 bg-gradient-to-r from-blue-200 to-gray-200 hover:bg-gradient-to-l hover:from-blue-200 hover:to-gray-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-1.5 text-center mb-2">{item.name}</a>
                            ))}
                        </div>
                <p>Director: {directorName}</p>
            </div>
        );
    } catch (error) {
        console.error('Error fetching cast list:', error.message);
        return <p>Error fetching cast list</p>;
    }
}
