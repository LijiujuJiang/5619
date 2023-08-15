import * as React from 'react';
import { useState, useEffect } from "react"
import Navbar from '../components/navbar'
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
import "./css/home.css"
import { colors } from '@mui/material';
function Home() {
    return (
        <div>
            <Navbar />
            <div className='banner'>
                <div className='leftbanner'>
                    <h2 className='titlebanner'>
                        <p><span style={{ color: '#21BDA1' }}>Eat</span> right,
                            <span style={{ color: '#21BDA1' }}> live</span> right,</p>
                        <p>with us by your side</p>
                    </h2>
                    <p className='pbanner'>
                        From comprehensive calorie counting to tailored fitness plans, myhealth empowers you to take charge of your wellness journey. Dive into our rich database, uncover your dietary habits, and let's craft a better tomorrow, together.
                    </p>
                    <button className='buttonbanner'>
                        Start Your journey
                    </button>
                </div>
                <div className='rightbanner'>

                </div>
            </div>

            <div className='intro'>
                <h4>We Offer Best Services</h4>

                <li>
                    <div className='logo1'>
                    </div>
                    <p className='logoTitle'>Best Options</p>
                    <p className='logoP'>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
                </li>
                <li>
                    <div className='logo2'>
                    </div>
                    <p className='logoTitle'>Best Options</p>
                    <p className='logoP'>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
                </li>
                <li>
                    <div className='logo3'>
                    </div>
                    <p className='logoTitle'>Best Options</p>
                    <p className='logoP'>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
                </li>
                <li className='four'>
                    <div className='logo4'>
                    </div>
                    <p className='logoTitle'>Best Options</p>
                    <p className='logoP'>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
                </li>


            </div>

            <div className='Adv'>
                <div className='AdvTitle'>
                    <h1>We Provide You Best Food</h1>
                    <p>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
                </div>
                <button className='view'>View mail</button>

                <div className='foodshow'>
                    <li></li>
                    <li className='food2'></li>
                    <li className='food3'></li>
                    <li className='food4'></li>
                </div>
            </div>
            <Footer />




        </div>
    )
}
export default Home
