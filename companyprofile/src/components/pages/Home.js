import React from 'react';
import '../css/App.css'

function Home() {
    return (
        <>
           
            <br/>
           <div className='homediv'>
            <h2 className='h2s'>Building greater futures through innovation <br/> 
             and collective knowledge</h2><br/>
            <p className='para1'>Tata Consultancy Services is an IT services, consulting and business <br/> solutions organization that has been partnering with <br/>
            many of the world’s largest businesses for the past 50 years.<br/> 
            We believe innovation and collective knowledge can <br/>transform all our futures with greater purpose.
            </p>
            </div>
            <div className='homeimg'>
                <img className='homeimg' src="images/home.jpg"></img>
            </div>
        </>
    )
}

export default Home;