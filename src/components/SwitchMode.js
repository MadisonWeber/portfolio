import React, {  useEffect, useState } from 'react'
import "../css/switchMode.css"

const SwitchMode = () => {


    const [mode, setMode ] = useState('')

    useEffect(()=> {
        const current = JSON.parse(localStorage.getItem('MODE')) || 'lightmode'
        setMode(current)
        if(current === "darkmode"){
            console.log('current is dark')
            document.documentElement.classList.add('dark')
        }
            
    }, [])

    const handleChange = () => {
        setMode( p => {
            if( p === 'lightmode'){
                setMode('darkmode')
                document.documentElement.classList.add('dark')
                localStorage.setItem('MODE', JSON.stringify("darkmode"))

            }else{
                setMode('lightmode')
                document.documentElement.classList.remove('dark')
                localStorage.setItem('MODE', JSON.stringify("lightmode"))
            }
        })
    }   


    return (
        <div className = 'switch__container' onClick = {handleChange}>
            <i className="fas fa-sun"></i>
            <i className="fas fa-moon"></i>
            <button  className = {`switch_btn ${mode}`}></button>
        </div>
    )
}

export default SwitchMode
