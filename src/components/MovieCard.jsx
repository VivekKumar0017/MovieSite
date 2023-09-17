import React from 'react'

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div>
      <div className="movie" key={imdbID}>
        <div>
            <p>{Year}</p>
        </div>
        <div>
            <img src={Poster} alt="" />

        </div>
        <div>
            <span>{Type}</span>
            <h3>{Title}</h3>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
