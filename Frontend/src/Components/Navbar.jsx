import React from 'react'
import {Link} from 'react-router-dom';
import LearnMore from '../Pages/LearnMore'

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h2>Big Oh</h2>
        </Link>
      </div>
      <div className="container2">
      <Link to="/learnmore">
        <h2>Learn More</h2>
      </Link>
      </div>
    </header>
  )
}

export default Navbar