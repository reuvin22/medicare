import React from 'react';
import './style.css';
import Img1 from '../assets/pic.jpg'
import Img2 from '../assets/pic2.jpg'
const Client = () => {
    return (
        <div>
            <section id='client'>
                <div className="clientContent">
                    <div className="clientIntro">
                        <h1>Meet with our Experienced Client</h1>
                        <p>We are ensuring the best insurance for our clients for their better security and also for their better health.</p>
                        <button>Read More</button>
                    </div>
                    <div className="employeeComment">
                        <div className="client1">
                            <img src={Img1} alt="image1" />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit illo quis, a nulla non quam impedit eius distinctio harum in nesciunt inventore culpa? Voluptas optio labore illo nobis praesentium voluptatibus.</p>
                            <h2>Ashmad Habadi</h2>
                            <h3>Business Man</h3>
                        </div>
                        <div className="client2">
                            <img src={Img2} alt="image1" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero mollitia corporis, ducimus odit accusamus deleniti, molestias quibusdam modi atque quos vitae officia? Cum ipsum quaerat error iusto laboriosam explicabo qui.</p>
                            <h2>Catherine Smith</h2>
                            <h3>Web Designer</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Client;