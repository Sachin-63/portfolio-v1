import React from 'react'
import './NavBar.css'
import {AiFillGithub} from "react-icons/ai";
import { VscCode } from "react-icons/vsc";

const NavBar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id='Navbar'>
                <div class="container-fluid row">
                    
                    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand col-3" id="navbarTitle"><VscCode size='3rem' /> <b>Sachin</b></a>
                    <div class="collapse navbar-collapse col-6" id="navbarSupportedContent">
                        <ul class="navbar-nav  d-flex justify-content-between" id='navs'>
                            <li class="nav-item">
                                <a class="nav-link active  ms-4" aria-current="page" href="#projects">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-4" href="#skills">Skills</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-4" href="#about">About Me</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-4" href="#timeline">Timeline</a>
                            </li>
                            
                        </ul>
                    </div>
                        <div className="col-3 d-flex justify-content-end" id='icons'>
                            <div className='ms-3'>
                            <AiFillGithub size='2rem' color='white' />
                            </div>
                            <div className='ms-3'>
                            <AiFillGithub size='2rem' color='white' />
                            </div>
                            <div className='ms-3'>
                            <AiFillGithub size='2rem' color='white' />
                            </div>
                            
                        </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
