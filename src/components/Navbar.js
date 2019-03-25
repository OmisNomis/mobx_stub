import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class Navbar extends Component {
  render () {
    return (
      <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
        <a className='navbar-brand abs' href='#'>React App</a>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#collapsingNavbar'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='navbar-collapse collapse' id='collapsingNavbar'>
          <ul className='navbar-nav'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/page1'>Page 1</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/page2'>Page 2</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/page3'>Page 3</Link>
            </li>
          </ul>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/page1'>Page 1 from the right</Link>
            </li>
          </ul>
        </div>
      </nav>

    )
  }
}

export default Navbar
