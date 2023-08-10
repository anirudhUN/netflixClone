import React,{useState,useEffect} from "react";
import { Navbar } from "./components/Navbar";
import "./styles/App.css";
import Home from './pages/Home'
import TvShows from "./pages/TvShows";
import Movies from "./pages/Movies";
import RecentlyAdded from "./pages/RecentlyAdded";
import MoviePlayer from "./pages/MoviePlayer";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignUp from "./pages/SignUp";

const App = () => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('authenticated');
    if (isAuthenticated === 'true') {
      setUser(true);
    }
  }, []);

  const handleSignIn = () => {
    setUser(true);
    localStorage.setItem('authenticated', 'true');
  };

  const handleSignOut = () => {
    setUser(false);
    localStorage.removeItem('authenticated');
  };

  return (
    <div>
      
      <BrowserRouter>
      {!user ?(
        <SignUp onSignIn={handleSignIn}/>
        ):(
          <>
        <Navbar onSignOut={handleSignOut} />
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/tvshows" element={<TvShows/>}></Route>
        <Route exact path="/movies" element={<Movies/>}></Route> 
        <Route exact path="/recentlyAdded" element={<RecentlyAdded/>}></Route> 
        <Route exact path="/MoviePlayer/:id" element={<MoviePlayer />} />
      </Routes>
      </>
        )}
      
      </BrowserRouter>
    </div>
  );
};

export default App;
