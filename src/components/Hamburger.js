import React from 'react'
import { NavLink } from 'react-router-dom';

const Hamburger = ({handleClick, hamburgerOpen }) => {
    return (
        <>  
            <button className = {!hamburgerOpen ? "openBtn" : "openBtn hideBtn"} onClick = {handleClick}><img src = {require('../photos/hamburger.png')} alt = ''/></button> 
            <div className = 'link-container-hamburger-closed'>
                <NavLink to="/" activeClassName="currentPage" exact> Home</NavLink>
                <NavLink to="/about" activeClassName="currentPage"> About</NavLink>
                <NavLink to="/portfolio" activeClassName="currentPage"> Portfolio</NavLink>
                <NavLink to="/skills" activeClassName="currentPage"> Skills</NavLink>
                <NavLink to="/contact" activeClassName="currentPage"> Contact</NavLink> 
                <button className = 'close-hamburger' onClick = {handleClick}><i className="fas fa-times"></i></button>
            </div>
</>
    )
}

export default Hamburger
