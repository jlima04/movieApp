import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

//9d06d70c

const APIURL = 'http://www.omdbapi.com?apikey=9d06d70c';




const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const searchMovies = async (title) => {
     const response  = await fetch(`${APIURL}&s=${title}`);
     const data = await response.json();


     setMovies(data.Search);
  }

  useEffect(() =>{
   searchMovies('Batman')
  }, []);

  return(
    <div className='app'>
      <h1>Jao Film Galerie</h1>
      <div className='search'>
        <input 
        placeholder='find your fav movie'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img 
        src={SearchIcon}
        alt='search button'
        onClick={() => searchMovies(searchTerm)}
        />
      
      </div>

     {
      movies?.length > 0
        ? (
          <div className='container'>
              {movies.map((movie) => (
                <MovieCard movie={movie}/>
              ))}
          </div>  
        ) : 
        (
          <div className=''>
            <h2>No movies found</h2>
          </div>
        )
     }
    
    
  
      
    </div>
    );
}

export default App;
