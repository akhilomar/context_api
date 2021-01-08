import React,{useContext} from 'react';
import {MovieContext} from './MovieContext';

const Nav = () => {
    const [movie, setMovie] = useContext(MovieContext);
    return(
        <div>
            <h1>Total Movie Found {movie.length}</h1>
        </div>
    );
}

export default Nav;
