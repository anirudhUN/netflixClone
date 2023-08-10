import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import '../styles/Card.css'


const Card = ({ fetchUrl, heading }) => {

    const [movies, setMovies] = useState();

    useEffect(() => {
        const getData = () => {
            fetch(fetchUrl)
                .then((response) => response.json())
                .then((data) => setMovies(data.results))
                .catch((error) => console.log('Error fetching data:', error));
        }
        getData()
    }, [fetchUrl])

    const navigate=useNavigate();

   
    const handleClick=(selectedMovie)=>{
        console.log(selectedMovie.id)
                navigate(`/MoviePlayer/${selectedMovie.id}` ); //{ state: { selectedMovie } }
        
    };
    const base_url = "https://image.tmdb.org/t/p/original/"

    return (
        <div>
            <h5>{heading}</h5>
            <div className='card-container'>
                {movies?.map((movie) => (
                    <div className="cards-wrapper" key={movie.id}>
                        <div className="card" onClick={() => handleClick(movie)} style={{ width: "10rem", borderRadius: "0px", border: "none" }}>
                            <img src={`${base_url}${movie.poster_path}`} alt="Card cap" style={{ borderRadius: "0px" }} />

                        </div>
                    </div>


                ))}
            </div>
            <div>
            
            </div>
        </div>

    );
}

export default Card
