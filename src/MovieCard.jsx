import React from "react";

const MovieCard = ({ movie })=>{
    return(
        <div className="movie">
          <div>
            <p>{movie.Year}</p>
          </div>
          <div>
            <img draggable="false" src={movie.Poster !== 'N/A' ?movie.Poster:'https://via.placeholder.com/400x600.png?text=No+Poster+Available'} alt={movie.Title} />
          </div>
          <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
          </div>

        </div>
    )
}
export default MovieCard;