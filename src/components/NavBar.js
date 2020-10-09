import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Hamburger from './Hamburger'
import { useLocation } from 'react-router-dom';


const NavBar = () => {
    
    
    const [ useHamburger, setUseHamburger ] = useState(false)
    const [ hamburgerOpen, setHamburgerOpen ] = useState(false)
    

   

    const handleResize= ()=> {
        const size =  window.innerWidth
        
        if(size > 800){
            setUseHamburger(false)
            
        }else{
            setUseHamburger(true)
           
        }

    }
    

    useEffect(()=>{
    
       window.addEventListener('resize', handleResize);
       handleResize()
       return ()=> window.removeEventListener('resize', handleResize)
    })

    useEffect(()=>{

        const checkForClickAway = (e)=>{
            const {target} = e
           
            
            if(!target.classList.contains("link-container-hamburger-closed")){
                let element = document.querySelector('.link-container-hamburger-closed')
                element.classList.remove('open')
                setHamburgerOpen(false)
            }else{
                return
            }
        }


        if( hamburgerOpen ){
            window.addEventListener('click', checkForClickAway)
            
        }

        return ()=> window.removeEventListener('click', checkForClickAway)
    },[hamburgerOpen])


    const handleClick = ()=>{
        let element = document.querySelector('.link-container-hamburger-closed')
        if(element.classList.contains('open')){
            element.classList.remove('open')
            setHamburgerOpen(false)
            
        }else{
            element.classList.add('open')
            setHamburgerOpen(true)
           
        }
       
    }



    
    const location = useLocation()
    
    
    

    
    return (
        <div className = 'nav-container' style = { location.pathname === "/" || location.pathname === "/contact" ? {backgroundColor : 'transparent'} : {backgroundColor : 'white'}}>
            <nav >
                <div className = 'nav-links'>
                    <div className = 'logo-container' >
                        <NavLink to = '/' className = 'back-home'> <p>MW</p> </NavLink>
                    </div>
                    <div className =  'link-container' >
                        {useHamburger ? <Hamburger handleClick = {handleClick} hamburgerOpen = {hamburgerOpen}/> : ( <><NavLink to="/about" activeClassName="currentPage"> About</NavLink>
                        <NavLink to="/portfolio" activeClassName="currentPage" > Portfolio</NavLink>
                        <NavLink to="/skills" activeClassName="currentPage" > Skills</NavLink>
                        <NavLink to="/contact" activeClassName="currentPage"> Contact</NavLink> </>) }
                        
                    </div>
                    
                </div>
        
            </nav>
        </div>
    )
}

export default NavBar
