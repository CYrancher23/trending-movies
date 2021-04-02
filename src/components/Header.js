import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./Header.css"


class Header extends Component {
    render() {
        return (
            <div className="home"> 
                <Link to= "/" className="home__link">TMDB Top Five</Link>
            </div>
        )
    }
}


export default Header