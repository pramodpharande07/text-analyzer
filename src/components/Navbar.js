// import React from 'react'
// import PropTypes from 'prop-types'

// export default function Navbar(props) {
//     return (
//      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
//         <div className="container-fluid">
//           <a className="navbar-brand" href="/">{props.title}</a>
//           <button className="navbar-toggler" type="button" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-hrefggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link "  href="/">{props.us}</a>
//               </li>
//             </ul>
//             {/* <form className="d-flex" role="search">
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//               <button className="btn btn-outline-success" type="submit">Search</button>
//             </form> */}
//              </div>
//             {/* switch button for dark and light mode of navbar  */}
//             <div className={`form-check form-switch text-${props.mode === 'light'?'black':'light'}`}>
//              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
//              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
//              </div>
//           </div>
//         </nav>
// )
// }

// Navbar.propTypes = {
//     title: PropTypes.string,
//     home: PropTypes.string,
//     us: PropTypes.string
// }
// // Above lines of code is for we can only pass the string values if we try href give an number it shows an error on console

// //Default props

// Navbar.defaultProps = {
//   title: 'Write title here',
//   home: 'home page'
// }
//If we dont give gthe prop values then it takes default values

//  Using React Router Dom 
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>

          {/* Enable Dark Mode */}
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            } mx-2`}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              DarkMode
            </label>
          </div>

          {/* Search Button */}
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string, aboutText: PropTypes.string };