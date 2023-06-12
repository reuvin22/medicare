import React from 'react';
import './style.css';
const Navbar = () => {
    return (
        <>
            <div className='nav'>
                <div className="navContainer">
                    <div className="logo">
                        <h1>Medicare<span>.</span></h1>
                    </div>
                    <div className="navbar">
                        <a href="#about">About</a>
                        <a href="#service">Service</a>
                        <a href="#doctors">Doctors</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className="appointment">
                        <button>Appointment</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;