import React from 'react'

const Error = () => {

    const errorStyles = {
        height : '100vh',
        display : 'flex',
        color : 'black',
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection: 'column'
    }

    return (
        <div style = {errorStyles}>
           <h1>Oops.. seems we have run into an Error</h1> 
           <h3>There is nothing at this page</h3>
        </div>
    )
}

export default Error
