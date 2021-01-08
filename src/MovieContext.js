import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movie, setMovie] = React.useState([
        {
            name:'KGF Chapter 2',
            price: '$100',
            id: 124
        },
        {
            name:'TENET',
            price: '$50',
            id: 1564
        },
        {
            name:'WW1984',
            price: '$70',
            id: 167
        }

    ])
    return(
        <MovieContext.Provider value = {[movie, setMovie]}>
            {props.children}{/*  for passing state to all other different component */}
        </MovieContext.Provider>
    );
}