import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="\">{props.title}</a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="\">Home </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="\">{props.aboutTitle} </a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

Navbar.prototypes = {title: PropTypes.string.isRequired ,
                    aboutTitle: PropTypes.string.isRequired}

Navbar.defaultProps = {
    title: "Set Title here",
    aboutTitle: "About Us"
}