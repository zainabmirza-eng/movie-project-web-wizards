import Link from "next/link";

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
            <div className="">
                <div className="flex flex-wrap gap-2">
                    {uniqueCasts.map((item, i) => (
                        <Link key={i} href={`/actors/${item.id}`} passHref>
                            <p className="text-white hover:text-gray-900 border-2 border-gray-400 bg-gradient-to-r from-[#1b263b] to-gray-800 hover:bg-gradient-to-l hover:from-[#1b263b] hover:to-gray-300 focus:ring-4 focus:outline-none focus:ring-[#778da9] dark:focus:ring-teal-700 font-medium rounded-md text-sm px-5 py-1.5 text-center mb-2">
                                {item.name}
                            </p>
                        </Link>
                    ))}
                </div>
                <div className="mt-4">
                <p><span className="font-bold text-[#e0fbfc]">Director:</span> {directorName}</p>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Error fetching cast list:', error.message);
        return <p>Error fetching cast list</p>;
    }
}
