import React from 'react';
import '../../App.css';

function Home() {
    return (
        <>
            <h1 style={{textAlign:"center",marginBottom:"30px"}}>HOME</h1>
            <br/>
           <div style={{float:"left",marginRight:"10px",marginTop:"100px",alignContent:"center"}}>
            <h2 style={{fontFamily:"cursive"}}>Building greater futures through innovation <br/> 
             and collective knowledge</h2><br/>
            <p style={{fontSize:"19px"}}>Tata Consultancy Services is an IT services, consulting and business <br/> solutions organization that has been partnering with <br/>
            many of the world’s largest businesses for the past 50 years.<br/> 
            We believe innovation and collective knowledge can <br/>transform all our futures with greater purpose.
            </p>
            </div>
            <div style={{float:"left"}}>
                <img style={{height:"540px"}} src="images/home.jpg"></img>
            </div>
        </>
    )
}

export default Home;