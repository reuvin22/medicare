import React from 'react';
import Navbar from './Navbar';
import Img1 from '../assets/stethoscope.png';
import Img2 from '../assets/headpic.png';
import Img3 from '../assets/Queue.png';
import Img4 from '../assets/bar.png';
import Img5 from '../assets/doctors.avif';
const Home = () => {
    return (
        <div>
            <Navbar />
            <section id="home">
                <div className="contentContainer">
                    <div className="intro">
                        <h1>Your Health is Happiness to us.</h1>
                        <p>We're teaming up with impactful partners large and small to transform the healthcare system.</p>
                    </div>
                    <div className="pic">
                        <div className='pic1'>
                            <div className='online'>
                                <p>Online Queue</p>
                                <img src={Img3} alt="Queue"/>
                            </div>
                            <h1>48</h1>
                            <img src={Img4} alt="bar" className='bar'/>
                        </div>
                        <div className="pic2">
                            <div className="pic21">
                                <div className="pic21Upper">
                                    <div className='pic21Text'>
                                        <div className='upperText'>Dr.Juan Cruz</div>
                                        <div className='lowerText'>Neurologist</div>
                                    </div>
                                    <img src={Img2} alt="doctor" />
                                </div>
                                <div className="pic21Lower">
                                    <div className='available'>
                                        <p>Set Appointment</p>
                                    </div>
                                    <button className='btn'>Appointment</button>
                                </div>
                            </div>
                            <div className="pic22">
                                <div className="year">
                                    <h1>10+</h1>
                                </div>
                                <div className='texts'>
                                    <div className="text">
                                        <p>Years Explores</p>
                                    </div>
                                    <div className="pic23">
                                        <img src={Img1} alt="stethoscope" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='doctorImage'>
                    <img src={Img5} alt="doctors" />
                </div>
            </section>
        </div>
    );
};

export default Home;