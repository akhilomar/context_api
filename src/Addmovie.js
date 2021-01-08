import React,{useState, useContext} from 'react';
import {MovieContext} from './MovieContext';


const AddMovie = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');

    const [movie, setMovie] = useContext(MovieContext);

    const adding = (e) =>{
        e.preventDefault();
        setMovie(prev => [...prev, {name:name, price: price}]);
    }

    return(
        <>
            <form onSubmit= {adding}>
                <input type = "text" name = "name" value = {name} onChange = {(e) => setName(e.target.value)}/>
                <input type = "text" name = "price" value = {price} onChange = {(e) => setPrice(e.target.value)}/>
                <button>Submit</button>
            </form>

        </>
    );
}

export default AddMovie;