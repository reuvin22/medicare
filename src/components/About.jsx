import React from 'react';
import './style.css';
import Img1 from '../assets/appointment.png';
import Img2 from '../assets/location.png';
import Img3 from '../assets/dr.png';
import Vid from '../assets/medicare.mp4'
import {motion} from 'framer-motion'
const About = () => {
    return (
        <div>
            <section id="about">
                <motion.div className='basicInfo'
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                }}
                transition={{
                    duration: 1,
                    ease: 'easeInOut'
                }}
                viewport={{
                    once: true
                }}>
                    <div className='appointments'>
                        <div className='picTitle'>
                            <img src={Img1} alt="appointment" />
                            <h1>Appointment</h1>
                        </div>
                        <p>Get all time support for emergency.</p>
                    </div>
                    <div className='locations'>
                        <div className='picTitle'>
                            <img src={Img2} alt="locations" />
                            <h1>Find Locations</h1>
                        </div>
                        <p>Get connected with us in any emergency.</p>
                    </div>
                    <div className='findDoctor'>
                        <div className='picTitle'>
                            <img src={Img3} alt="doctors" />
                            <h1>Find a Doctor</h1>
                        </div>
                        <p>Finding a doctor you trust that fits your needs easily.</p>
                    </div>
                </motion.div>
            <motion.div className="textVid"
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
                ease: 'easeInOut'
            }}
            viewport={{
                once: true
            }}>
                <div className="vid">
                    <video src={Vid} autoPlay loop></video>
                </div>
                <div className="facilities">
                    <h3>MEDICAL SERVICE</h3>
                    <h1>Personal care & healthy living</h1>
                    <p>Medicare gives you 24/7 all-in-one healthcare. We're here for yo through sickness.</p>
                    <h2>When you're feeling sick, Medicare gives you 24/7 access to care. When you're back on your feet, we give you the tools and advice to stay healthy.</h2>
                    <a href="#service"><button className="readMore">Read more</button></a>
                </div>
            </motion.div>
            </section>
        </div>
    );
};

export default About;