import React from 'react';
import Logo from '../assets/logo1.png'
import Logo1 from '../assets/eye.png'
import Logo2 from '../assets/dental.png'
import Logo3 from '../assets/heart.png'
import Logo4 from '../assets/syringe.png'
import Logo5 from '../assets/orthopedic.png'
const Services = () => {
    return (
        <>
            <section id='service'>
                <div className="serviceIntro">
                    <div className="serviceIntroduction">
                        <h1>Our Medical Services</h1>
                        <div className="serviceP">
                            <p>Expert physician specialists and caring clinical staff provide you with an exceptional patient care.</p>
                        </div>
                        <div className="services">
                            <div className="services1">
                                <div className="hostService">
                                    <div className="content">
                                        <img src={Logo} alt="logo" />
                                        <h1>Medicine</h1>
                                        <p>Medicare is one of the leading medical facility.</p>
                                    </div>
                                </div>
                                <div className="hostService">
                                    <div className="content">
                                        <img src={Logo1} alt="logo" />
                                        <h1>Eye Care</h1>
                                        <p>Provides medical care to patients circulation.</p>
                                    </div>
                                </div>
                                <div className="hostService">
                                    <div className="content">
                                        <img src={Logo2} alt="logo" />
                                        <h1>Dental Clinic</h1>
                                        <p>We are here to provide a full range of dental services.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="services1">
                                <div className="hostService">
                                    <div className="content">
                                        <img src={Logo3} alt="logo" />
                                        <h1>Cardeology</h1>
                                        <p>We are here to take care of your heart.</p>
                                    </div>
                                </div>
                                <div className="hostService">
                                    <div className="content">
                                        <img src={Logo4} alt="logo" />
                                        <h1>Primary Care</h1>
                                        <p>We provide primary care for patients to help them to improve their health.</p>
                                    </div>
                                </div>
                                <div className="hostService">
                                    <div className="content">
                                        <img src={Logo5} alt="logo" />
                                        <h1>Orthopedic</h1>
                                        <p>We will take care of your bones.</p>
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

export default Services;