import * as React from 'react';
import '../pages/css/footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='footerContainer'>
                <div className='txt1'>
                    <h5>Product</h5>
                    <p>Employee database</p>
                    <p>Payroll</p>
                    <p>Absences</p>
                    <p>Time tracking</p>
                    <p>Shift planner</p>
                    <p>Recuriting</p>
                </div>
                <div className='txt2'>
                    <h5>Information</h5>
                    <p>FAQ</p>
                    <p>Blog</p>
                    <p>Support</p>
                </div>
                <div className='txt3'>
                    <h5>Company</h5>
                    <p>About us</p>
                    <p>Careers</p>
                    <p>Contact us</p>
                    <p>Lift Media</p>
                </div>
                <div className='contact'>
                    <div className='Subscrise'>
                        Subscribe
                    </div>
                    <input type='text' placeholder='email address' />
                    <button className='arrow'>→</button>
                    <p className='paragraph'>
                        Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.
                    </p>
                </div>


            </div>
            <div className='social'>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Cookies</li>
            </div>
            <div className='socialicon'>
                <li className='icon11'></li>
                <li className='icon22'></li>
                <li className='icon33'></li>
            </div>
        </div>
    )
}
export default Footer