import React from 'react';
import '../css/App.css'
export default function ContactUs() {
    return (
        <div>
            <br/>
            <div className='first'>
            <h2 className='h1'>What's on your<br/> mind?</h2>
           
            <div className='second'>
                <p className='para1'>
                We’re here to help! Tell us what you’re looking for and we’ll get you connected to <br/>the right people.
                </p><br/>
            </div> </div>
            <br/><br/>
            <div>  
            <div className="flex-container">
               <div> <img src="images/contact1.png" height={150}></img> </div>

               <div>  <img src="images/contact2.png" height={150}></img> </div>
            <div> <img src="images/contact3.png" height={150}></img> </div>
            </div>
        </div>
        </div>
    )
}