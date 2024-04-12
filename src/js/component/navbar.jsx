import React from 'react';


const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top px-5">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">NAVBAR</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Item 1</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Item 2</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Item 3</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Item 4</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Item 5</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;