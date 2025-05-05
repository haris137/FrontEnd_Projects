import Home from './pages/Home';
import Favourite from './pages/Favourite';
import Navbar from './components/NavBar';
import { Routes, Route, useLocation } from 'react-router-dom';
import { MovieProvider } from './context/LikedMovies';
import './css/App.css';

function App() {
    const location = useLocation()

    return (
        <MovieProvider>
            <Navbar />
            <main className="main-content"  key={location.pathname}>
                <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/Favourite" element={<Favourite />} />
                </Routes>
            </main>
        </MovieProvider>
    );
}

export default App;