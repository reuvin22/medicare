import React from 'react';
import Logo from '../assets/logo1.png'
import Logo1 from '../assets/eye.png'
import Logo2 from '../assets/dental.png'
import Logo3 from '../assets/heart.png'
import Logo4 from '../assets/syringe.png'
import Logo5 from '../assets/orthopedic.png'
import {motion} from 'framer-motion'
const Services = () => {
    return (
        <>
            <section id='service'>
                <div className="serviceIntro">
                    <div className="serviceIntroduction">
                        <motion.h1
                        initial={{
                            opacity: 0
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
                        Our Medical Services</motion.h1>
                        <motion.div className="serviceP"initial={{
                            opacity: 0
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
                            <p>Expert physician specialists and caring clinical staff provide you with an exceptional patient care.</p>
                        </motion.div>
                        <div className="services">
                            <div className="services1">
                                <motion.div className="hostService"
                                    initial={{
                                        opacity: 0
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                    }}
                                    transition={{
                                        delay: 0.3,
                                        duration: 1,
                                        ease: 'easeInOut'
                                    }}
                                    viewport={{
                                        once: true
                                    }}
                                >
                                    <div className="content">
                                        <img src={Logo} alt="logo" />
                                        <h1>Medicine</h1>
                                        <p>Medicare is one of the leading medical facility.</p>
                                    </div>
                                </motion.div>
                                <motion.div className="hostService"
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
                                }}>
                                    <div className="content">
                                        <img src={Logo1} alt="logo" />
                                        <h1>Eye Care</h1>
                                        <p>Provides medical care to patients circulation.</p>
                                    </div>
                                </motion.div>
                                <motion.div className="hostService"
                                initial={{
                                    opacity: 0
                                }}
                                whileInView={{
                                    opacity: 1,
                                }}
                                transition={{
                                    delay: 0.7,
                                    duration: 1,
                                    ease: 'easeInOut'
                                }}
                                viewport={{
                                    once: true
                                }}>
                                    <div className="content">
                                        <img src={Logo2} alt="logo" />
                                        <h1>Dental Clinic</h1>
                                        <p>We are here to provide a full range of dental services.</p>
                                    </div>
                                </motion.div>
                            </div>
                            <div className="services1">
                                <motion.div className="hostService"
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
                                }}>
                                    <div className="content">
                                        <img src={Logo3} alt="logo" />
                                        <h1>Cardeology</h1>
                                        <p>We are here to take care of your heart.</p>
                                    </div>
                                </motion.div>
                                <motion.div className="hostService"
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
                                }}>
                                    <div className="content">
                                        <img src={Logo4} alt="logo" />
                                        <h1>Primary Care</h1>
                                        <p>We provide primary care for patients to help them to improve their health.</p>
                                    </div>
                                </motion.div>
                                <motion.div className="hostService"
                                initial={{
                                    opacity: 0
                                }}
                                whileInView={{
                                    opacity: 1,
                                }}
                                transition={{
                                    delay: 1.4,
                                    duration: 1,
                                    ease: 'easeInOut'
                                }}
                                viewport={{
                                    once: true
                                }}>
                                    <div className="content">
                                        <img src={Logo5} alt="logo" />
                                        <h1>Orthopedic</h1>
                                        <p>We will take care of your bones.</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;