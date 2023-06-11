import React from 'react';
import './style.css';
import Doc1 from '../assets/headpic.png';
import Doc2 from '../assets/dra.jpg';
import Doc3 from '../assets/dr1.jpg';
import Doc4 from '../assets/dr2.jpg';
import Socmed1 from '../assets/facebook.png';
import Socmed2 from '../assets/twitter.png';
import Socmed3 from '../assets/insta.png';

const Doctors = () => {
    return (
        <>
            <section id="doctors">
                <div className="doctorsIntro">
                    <div className="doctorHeader">
                        <h1>Our Doctors</h1>
                        <p>Expert physician specialist and caring clinical doctor</p>
                    </div>
                    <div className="lists">
                        <div className="listDoctors">
                            <div className="doctorList">
                                <div className="doctor1">
                                    <img src={Doc1} alt="doc1" className='doc'/>
                                    <h1>Dr.Juan Cruz</h1>
                                    <p>Neurologist</p>
                                    <p>Mon - Thurs 8:00 - 10:00 AM</p>
                                    <div className="logos">
                                        <img src={Socmed1} alt="socmed" className='facebook'/>
                                        <img src={Socmed2} alt="socmed" />
                                        <img src={Socmed3} alt="socmed" />
                                    </div>
                                </div>
                                <div className="doctor1">
                                <img src={Doc2} alt="doc1" className='doc'/>
                                    <h1>Dra.Rowena Johnson</h1>
                                    <p>Dentist</p>
                                    <p>Mon - Fri 10:00 - 12:00 PM</p>
                                    <div className="logos">
                                        <img src={Socmed1} alt="socmed" className='facebook'/>
                                        <img src={Socmed2} alt="socmed" />
                                        <img src={Socmed3} alt="socmed" />
                                    </div>
                                </div>
                                <div className="doctor1">
                                <img src={Doc3} alt="doc1" className='doc'/>
                                    <h1>Dr.Anderson Williams</h1>
                                    <p>Orthpedic</p>
                                    <p>Mon - Fri 1:00 - 3:00 PM</p>
                                    <div className="logos">
                                        <img src={Socmed1} alt="socmed" className='facebook'/>
                                        <img src={Socmed2} alt="socmed" />
                                        <img src={Socmed3} alt="socmed" />
                                    </div>
                                </div>
                                <div className="doctor1">
                                    <img src={Doc4} alt="doc1" className='doc'/>
                                        <h1>Dr.Arthur Smith</h1>
                                        <p>Cardeologist</p>
                                        <p>Mon - Fri 3:00 - 5:00 PM</p>
                                    <div className="logos">
                                        <img src={Socmed1} alt="socmed" className='facebook'/>
                                        <img src={Socmed2} alt="socmed" />
                                        <img src={Socmed3} alt="socmed" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Doctors;