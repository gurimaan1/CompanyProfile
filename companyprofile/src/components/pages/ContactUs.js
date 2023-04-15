import React from 'react';
import '../css/App.css'
export default function ContactUs() {
    return (
        <div>
            <br/>
            <div className='first'>
            <h2 className='h2s'>What's on your<br/> mind?</h2>
           
            <div className='second'>
                <p className='para1'>
                We’re here to help! Tell us what you’re looking for and we’ll get you connected to <br/>the right people.
                </p><br/>
            </div> </div>
            <br/><br/>
            <div>
            <div>
                <img className='box1' src="images/contact1.png"></img>
            </div>
            <div>
                <img className='box2' src="images/contact2.png"></img>
            </div>
            <div>
                <img className='box3' src="images/contact3.png"></img>
            </div>
            </div>
        </div>
    )
}