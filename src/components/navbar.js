import React from 'react'
import Link from 'gatsby-link'

const NavBar = () => (
    <div style={{
        background: '#f4f4f4',
        paddingTop: '10px'
    }}>

    <ul style={{
        listStyle: 'none',
        display: 'block',
        justifyContent: 'space-evenly'
    }}>
       <li><Link to ="/"> Home</Link></li> 
       <li><Link to ="/about-us"> About</Link></li> 
       <li><Link to ="/cabinets"> Cabinets</Link></li> 
       <li><Link to ="/countertops"> Countertops</Link></li> 
       <li><Link to ="/gallery"> Gallery</Link></li> 
    </ul>

    </div>
)
export default NavBar
    