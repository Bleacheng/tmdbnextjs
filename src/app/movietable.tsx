import React from 'react';

type Movie = {
    adult: boolean;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

type MovieTableProps = {
    movies: Movie[];
};

const MovieTable: React.FC<MovieTableProps> = ({ movies }) => {
    const genres = [
        {id: 28, name: 'Action'},
        {id: 12, name: 'Adventure'},
        {id: 16, name: 'Animation'},
        {id: 35, name: 'Comedy'},
        {id: 80, name: 'Crime'},
        {id: 99, name: 'Documentary'},
        {id: 18, name: 'Drama'},
        {id: 10751, name: 'Family'},
        {id: 14, name: 'Fantasy'},
        {id: 36, name: 'History'},
        {id: 27, name: 'Horror'},
        {id: 10402, name: 'Music'},
        {id: 9648, name: 'Mystery'},
        {id: 10749, name: 'Romance'},
        {id: 878, name: 'Science Fiction'},
        {id: 10770, name: 'TV Movie'},
        {id: 53, name: 'Thriller'},
        {id: 10752, name: 'War'},
        {id: 37, name: 'Western'},
    ];

    const getGenres = (genreIds: number[]) => {
        return genres
            .filter((genre) => genreIds.includes(genre.id))
            .map((genre) => genre.name)
            .join(', ');
    };

    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
            <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Poster
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Genres
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Original Language
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Overview
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Popularity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Release Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Average Rating
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    No. Votes
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Adult
                </th>
            </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
            {movies.map((movie) => (
                <tr key={movie.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                                <img
                                    className="h-10 w-10 rounded-full"
                                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                                    alt={movie.title}
                                />
                            </div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{movie.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        {getGenres(movie.genre_ids)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{movie.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{movie.original_language}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{movie.overview}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{movie.popularity}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{movie.release_date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{movie.vote_average}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{movie.vote_count}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        {movie.adult ? '✔️' : '❌'}
                    </td>
                </tr>
            ))}
            </tbody>

        </table>
    );
}

export default MovieTable;
