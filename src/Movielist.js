import React,{useState, useContext} from 'react';
import Movie from './Movie';
import {MovieContext} from './MovieContext';
const Movielist = () => {

        const [movie, setMovie] = useContext(MovieContext);

        return(
        <div style = {{"margin":"auto"}}>
        
            {movie.map(film => (
                <Movie name = {film.name} price = {film.price} key = {film.id}/>
            ))}
        </div>
    );
}

export default Movielist;
