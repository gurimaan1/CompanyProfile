import React from 'react';
import '../../App.css';

export default function ContactUs() {
    return (
        <div>
            <br/>
            <div style={{marginRight:"35px",alignContent:"center",textAlign:"center"}}>
            <h2 style={{fontSize:"54px",marginLeft:"10px",fontFamily:"cursive"}}>What's on your<br/> mind?</h2>
           
            <div style={{marginTop:"30px"}}>
                <p style={{fontSize:"25px",marginLeft:"15px"}}>
                We’re here to help! Tell us what you’re looking for and we’ll get you connected to <br/>the right people.
                </p><br/>
            </div> </div>
            <br/><br/>
            <div>
            <div>
                <img style={{width:"240px",float:'left',marginRight:"80px",marginLeft:"120px"}} src="images/contact1.png"></img>
            </div>
            <div>
                <img style={{width:"240px",float:'left',marginRight:"80px"}} src="images/contact2.png"></img>
            </div>
            <div>
                <img style={{width:"240px",float:'left'}} src="images/contact3.png"></img>
            </div>
            </div>
        </div>
    )
}