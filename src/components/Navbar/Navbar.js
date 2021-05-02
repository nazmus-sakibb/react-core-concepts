import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark navbar-bg py-3">
            <div class="container-fluid">
                <a class="navbar-brand text-white" href="https://nazmus-sakibb.netlify.app/">NAZMUS SAKIB</a>
                <button class="navbar-toggler toggler-color" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item ms-3">
                            <a class="nav-link active" aria-current="page" href="https://nazmus-sakibb.netlify.app/">Home</a>
                        </li>
                        <li class="nav-item ms-3">
                            <a class="nav-link" href="#">Projects</a>
                        </li>
                        <li class="nav-item ms-3">
                            <a class="nav-link" href="#">Blog</a>
                        </li>
                        <li class="nav-item ms-3">
                            <a class="nav-link" href="#">Skills</a>
                        </li>
                        <li class="nav-item ms-3">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                        <li class="nav-item ms-3">
                            <a class="nav-link" href="https://drive.google.com/file/d/1qDygBFVtcwjighJ1TGERL3NJa75DlFgz/view?usp=sharing" target="_blank" alt="">Resume</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;