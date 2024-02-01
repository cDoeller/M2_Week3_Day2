import React from 'react'
import {Link} from 'react-router-dom'

 
function Navbar() {
    return (
      <nav className="Navbar">
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/students'>Students</Link>

        </ul>
      </nav>
    );
  }
   
  export default Navbar;