import React ,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Carousel }from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import '../styles/Banner.css'

const Banner = ({fetchUrl}) => {
  const [movies,setMovies]=useState()
  const navigate=useNavigate();

  useEffect(()=>{
    const getData=()=>{
      fetch(fetchUrl)
      .then((response)=>response.json())
      .then((data)=>setMovies(data.results))
      .catch((error) => console.log('Error fetching data:', error));
  }
  getData()},[fetchUrl])

  const base_url = "https://image.tmdb.org/t/p/original/"
  
  function truncate(str,n){
    return str?.length>n ? str.substr(0,n-1)+"...":str;
  }

  const handleClick=(selectedMovie)=>{
    console.log(selectedMovie.id)
            navigate(`/MoviePlayer/${selectedMovie.id}` ); //{ state: { selectedMovie } }
           
            
    
};

  return (
    
    <div className="movie-carousel" >
      <Carousel className="mov-contain custom-carousel">
        {movies?.map((movie)=>(
         movie &&
        <Carousel.Item className="carousel-item" key={movie.id}>
        <img
          className="d-block w-100 backdrop"
          src={`${base_url}${movie?.backdrop_path}`}
          alt=" One"
        
        />
        <Carousel.Caption className="carousel-caption-left"> 
            <h1 className="title">{movie?.title}</h1>
            <button className='play-button'   onClick={()=>handleClick(movie)}><strong>More</strong></button>
            {/* <button className='play' style={{border:"0", padding:"8px",width:"5rem",backgroundColor:"rgba(255,255,255,0.6)"}}><strong>INFO</strong></button> */}
            <small className="rating">IMDB : {movie?.vote_average}</small>
            <p className="movie-content">{truncate(movie?.overview,150)}</p>
        </Carousel.Caption>
      </Carousel.Item>
        ))}
        
        </Carousel>
        <div className='footer'></div>
        
        </div>
  )
}

export default Banner
