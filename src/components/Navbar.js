import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.us}</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
   
  
)
}

Navbar.propTypes = {
    title: PropTypes.string,
    home: PropTypes.string,
    us: PropTypes.string
}
// Above lines of code is for we can only pass the string values if we try to give an number it shows an error on console

//Default props

Navbar.defaultProps = {
  title: 'Write title here',
  home: 'home page'
}
//If we dont give gthe prop values then it takes default values