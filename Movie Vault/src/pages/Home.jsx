import MovieCard from "../components/MovieCard"
import Plotubot from "../components/Plotubot.jsx";
import {useState, useEffect} from "react";
import {getPopularMovies, searchMovies} from '../services/Api.js'
import "../css/home.css"
import { MovieProvider } from "../context/LikedMovies";

function Home(){
    const [search, setSearch] = useState("")
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, isloading] = useState(true)

    useEffect(()=>{
    const loadPopularMovies = async ()=>{
        try {
            const popularMovies = await getPopularMovies();
            setMovies(popularMovies);
        }
        catch (error) {
            console.log(error);
            setError(error)
        }
        finally{
            isloading(false)
        }
    }
        loadPopularMovies()
    }, [])

    async function handleForm(e){
        e.preventDefault()

        if(!search.trim()) return
        if(loading) return

        try {
            const searchResult = await searchMovies(search)
            setMovies(searchResult)
            setError(null)
        } catch (error) {
            console.log(error);
            setError(error)
        } finally{
            isloading(false)
        }
    }

    return(
        <>
        <Plotubot/>
        <div className="Home">
            <form onSubmit={handleForm} className="search-form">
                <input
                 type="text"
                 placeholder="Search movies..."
                 className="search-input"
                 value={search}
                 onChange={(e)=>setSearch(e.target.value)}
                />
                <button type="submit" className="submit-btn">Search</button>
            </form>

            {error && <p className="error">Error: {error.message}</p>}

            {loading? <div className="Loading">Loading...</div> :
                <div className="movies-grid">
                    {   movies.map ((movie)=> 
                     (<MovieCard key={movie.id} movie={movie}/>))    }
               </div>
            }

        </div>
        </>
    )
}

export default Home;