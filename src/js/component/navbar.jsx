import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
            <div className="container-fluid mx-5">
                <a className="navbar-brand" href="#">Start BootStrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end " id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">About</a>
                        <a className="nav-link" href="#">Services</a>
                        <a className="nav-link" href="#">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;