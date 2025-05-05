import { useMovieContext } from '../context/LikedMovies';
import MovieCard from '../components/MovieCard';
import '../css/favourite.css';

function Favourite() {
    const { favourites } = useMovieContext();

    console.log("Favourites in Favourite Page:", favourites); // Debugging

    if (favourites && favourites.length > 0) {
        return (
            <div className="favorites">
                <h2>Your Favourite Movies</h2>
                <div className="movies-grid">
                    {favourites.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="favorites-empty">
            <h2>No Favorite Movies Yet</h2>
            <p>Start adding movies to your favorites and they will appear here!</p>
        </div>
    );
}

export default Favourite;