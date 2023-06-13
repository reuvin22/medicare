import React from 'react';
import Navbar from './Navbar';
import Img1 from '../assets/stethoscope.png';
import Img2 from '../assets/headpic.png';
import Img3 from '../assets/Queue.png';
import Img4 from '../assets/bar.png';
import Img5 from '../assets/doctors.avif';
import {motion} from 'framer-motion';
const Home = () => {
    return (
        <div>
            <Navbar />
            <section id="home">
                <div className="contentContainer">
                    <motion.div className="intro"
                        initial={{
                            opacity: 0
                        }}
                        whileInView={{
                            opacity: 1
                        }}  
                        transition={{
                            duration: 0.5,
                            ease: 'easeInOut'
                        }}
                        viewport={{
                            once: true
                        }}
                    >
                        <h1>Your Health is Happiness to us.</h1>
                        <p>We're teaming up with impactful partners large and small to transform the healthcare system.</p>
                    </motion.div>
                    <div className="pic">
                        <motion.div className='pic1'
                        initial={{
                            opacity: 0
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        transition={{
                            delay: 0.5,
                            duration: 1,
                            ease: 'easeInOut'
                        }}
                        viewport={{
                            once: true
                        }}
                        >
                            <div className='online'>
                                <p>Online Queue</p>
                                <img src={Img3} alt="Queue"/>
                            </div>
                            <h1>48</h1>
                            <img src={Img4} alt="bar" className='bar'/>
                        </motion.div>
                        <div className="pic2">
                            <motion.div className="pic21"
                            initial={{
                                opacity: 0
                            }}
                            whileInView={{
                                opacity: 1,
                            }}
                            transition={{
                                delay: 0.8,
                                duration: 1,
                                ease: 'easeInOut'
                            }}
                            viewport={{
                                once: true
                            }}
                            >
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
                            </motion.div>
                            <motion.div className="pic22"
                            initial={{
                                opacity: 0
                            }}
                            whileInView={{
                                opacity: 1,
                            }}
                            transition={{
                                delay: 1,
                                duration: 1,
                                ease: 'easeInOut'
                            }}
                            viewport={{
                                once: true
                            }}
                            >
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
                            </motion.div>
                        </div>
                    </div>
                </div>
                <motion.div className='doctorImage'
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1,
                }}
                transition={{
                    delay: 1.2,
                    duration: 1,
                    ease: 'easeInOut'
                }}
                viewport={{
                    once: true
                }}
                >
                    <img src={Img5} alt="doctors" />
                </motion.div>
            </section>
        </div>
    );
};

export default Home;