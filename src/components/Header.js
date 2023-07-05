import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.css"

const Header = () => {
  return (
    <div>
        <span> React Context API</span>
        <ul className='nav'>
            <li className='prod'>
                <Link to="/">Home Page</Link>
                <Link to="/">Home Page</Link>
            </li>
            <li className='prod1'>
            <Link to="/">cart</Link>
            </li>


        </ul>


    </div>
  )
}

export default Header