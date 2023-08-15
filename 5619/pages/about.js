import * as React from 'react';
import Navbar from '../components/navbar'
import Footer from '../components/footer';
import "./css/about.css"

function About() {
    return (
        <div>
            <Navbar />
            <div className='aboutTitle'>
                <h4>Way of building</h4>
                <p>Great software</p>
            </div>
            <div className='talk'>
                <div className='talk1'>
                    <div className='talk1_left'>
                        <h4>Build the right team to scale</h4>
                        <p>Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term ,not the case with freelancers</p>
                        <h6>Our <span style={{ color: '#3BBBA4' }}>delivery model</span> helps you cut costs and deliver within budget.</h6>
                        <p className='comment'>
                            "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"
                        </p>
                        <div className='talkicon'></div>
                        <h7>
                            <li className='name'>Jeewa markram</li>
                            <li className='job'>CEO</li>
                        </h7>
                    </div>
                    <div className='talk1_img'></div>
                </div>

                <div className='talk1 empty'>
                    <div className='talk2_img'></div>
                    <div className='talk1_left right1'>
                        <h4>Build the right team to scale</h4>
                        <p>Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term ,not the case with freelancers</p>
                        <h6>Our <span style={{ color: '#3BBBA4' }}>delivery model</span> helps you cut costs and deliver within budget.</h6>
                        <p className='comment'>
                            "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"
                        </p>
                        <div className='talkicon'></div>
                        <h7>
                            <li className='name'>Jeewa markram</li>
                            <li className='job'>CEO</li>
                        </h7>
                    </div>
                </div>

                <div className='talk1 empty'>
                    <div className='talk1_left'>
                        <h4>Build the right team to scale</h4>
                        <p>Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term ,not the case with freelancers</p>
                        <h6>Our <span style={{ color: '#3BBBA4' }}>delivery model</span> helps you cut costs and deliver within budget.</h6>
                        <p className='comment'>
                            "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"
                        </p>
                        <div className='talkicon'></div>
                        <h7>
                            <li className='name'>Jeewa markram</li>
                            <li className='job'>CEO</li>
                        </h7>
                    </div>
                    <div className='talk3_img'></div>
                </div>


            </div>
            <Footer />
        </div>
    )
}
export default About