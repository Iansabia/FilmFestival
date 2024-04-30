import moviecss from './smallMovie.module.css';
import { useState } from 'react';

function SmallMovie() {
    // Sample movie
    const sampleMovie = {
        title: "Inception",
        year: "2010",
        director: "Christopher Nolan"
    };

    
    const [movie, setMovie] = useState(sampleMovie);

    return (
        <div className='smallMoviePortion'>
            <div className='movieBox'>
                <h1 className = {moviecss.title}>{movie.title}</h1> 
                <b className = {moviecss.info}>Year: {movie.year}</b> 
                <b className = {moviecss.info}>Director: {movie.director}</b> 
            </div>
        </div>
    );
}

export default SmallMovie;
