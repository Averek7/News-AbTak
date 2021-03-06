import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class Navbar extends Component {
    
    render(props) {
        return (
            <div>
                <nav className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode} fixed-top`}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">AbTak</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {/* <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/about">About</Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/general">General</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/health">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/technology">Technology</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active " to="/science">Science</Link>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="searchBar" />
                                <button className="btn btn-outline-success" type="submit" id="BtnSearch" onClick={this.BtnSearch}>Search</button>
                            </form>
                            <div className="form-check form-switch m-2">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={this.props.toggleMode}/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{this.props.mode}</label>
                            </div>
                        </div>
                    </div>

                </nav>
            </div>
        )
    }
}

export default Navbar
