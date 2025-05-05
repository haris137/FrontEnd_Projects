import "../css/movieCard.css";
import { useMovieContext } from "../context/LikedMovies";

export default function MovieCard({ movie }) {
    const { addFav, removeFav, isFav } = useMovieContext();
    const favourite = isFav(movie.id); // Check if the movie is already a favorite

    function handleLike(e) {
        e.preventDefault();

        if (favourite) {
            removeFav(movie.id); // Remove from favorites if already liked
        } else {
            addFav(movie); // Add to favorites if not liked
        }
    }

    return (
        <div className="movie-card">
            <div className="moviePoster">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                />
                <div className="movieOverlay">
                    <button className="likebtn" onClick={handleLike}>
                        <i
                            className={`fa fa-heart`}
                            style={{ color: favourite ? "red" : "white" }} // Change color based on favorite status
                        ></i>
                    </button>
                </div>
            </div>
            <div className="movieInfo">
                <h3>{movie.title}</h3>
                <h3>{movie.release_date?.split("-")[0]}</h3>
            </div>
        </div>
    );
}