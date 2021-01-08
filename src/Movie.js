import React from 'react';

const Movie = ({name, price}) => {

    return(
        <div>
            <h4>{name}</h4>
            <h6>{price}</h6>
        </div>
    );
}

export default Movie;
