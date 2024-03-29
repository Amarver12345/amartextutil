import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
//rfc=react function component
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
        {/* <sample/> */}
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/About">{props.aboutyou}</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/">Link</Link>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">Action</a></li>
                    <li><a className="dropdown-item" href="/">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
                </li>
                <li className="nav-item">
                <button type="button" className="btntoggle btn btn-primary">{props.text}</button>
                </li>
            </ul>
            {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-primary" type="submit">Search</button>
            </form> */}
            <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input class="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
                <label class="form-check-label" htmlFor="flexSwitchCheckDefault" >{props.text}</label>
            </div>
            </div>
        </div>
    </nav>
  )
}
Navbar.propTypes={
    title:PropTypes.string,
    aboutyou:PropTypes.string
}
Navbar.defaultProps={
    title:'Your Name',
    aboutyou:'About you'
}