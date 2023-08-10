import React from 'react'
import '../styles/Navbar.css'
import logo from '../logo.png';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';

export const Navbar = ({onSignOut}) => {

  const handleLogOut=()=>{
    onSignOut()
  }

  return (
    <div className="navbar-container">
        <ul className='navlist'>
            <NavLink to="/"><li className='startitems logo'><img src={logo} width={"110px"} alt="logo" className='logo'/></li></NavLink>
            {/* <NavLink to="/" style={{textDecoration:"None", color:"white"}}><li className='startitems item'>Home</li></NavLink> */}
            <NavLink to="/tvshows" style={{textDecoration:"None", color:"white"}}><li className='startitems item'>TV Shows</li></NavLink>
            <NavLink to="/movies" style={{textDecoration:"None", color:"white"}}><li className='startitems item'>Movies</li></NavLink>
            {/* <NavLink to="/recentlyAdded" style={{textDecoration:"None", color:"white"}}><li className='startitems'>Recently Added</li></NavLink>             */}
        </ul>
        <div className='end'>
        <div className='item1'><SearchBar/></div>
        <button className="logout_button" onClick={handleLogOut}>Logout</button>
      </div>
    </div>
  )
}
