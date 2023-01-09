import React from 'react';
import { ThemeContext } from '../Context'

interface INavbar {
  onClick: Function
}
const Navbar = ({ onClick }:INavbar) => {

  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <div className="navbar dark:bg-[#292a38] bg-white sticky top-0 left-0 shadow-md">
          <div className="navbar-start">
            <div className="dropdown">
              <label onClick={() => onClick()} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
              </label>
            </div>
            <a href='/' className="btn btn-ghost normal-case text-xl">Git Panel</a>
          </div>
          {/* <div className="navbar-center">
          </div>
          <div className="navbar-end">
          </div> */}
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default Navbar