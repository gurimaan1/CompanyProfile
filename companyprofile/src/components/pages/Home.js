import React from 'react';
import '../css/App.css'

function Home() {
    return (
        <>
            <br/>
            <div className='homeimg'>
                <img className='homeimg' src="images/together.jpg"></img>
            </div>
            <h2 className='head2'>Our Top Projects: <br/> </h2>
            <div className='homediv'>
            <div class="row">
  <div className="column">
    <div className="content">
      <h2 className='ullist'>Android</h2>
      <ul className='ullist'>
      <li>Coffee Shop</li>
      <li>College Admission</li>
      <li>Driving Test</li>
</ul>  
    </div>
  </div>
  <div className="column">
    <div className="content">
      <h2 className='ullist'>PHP</h2>
      <ul className='ullist'>
      <li>Pizza Shop</li>
      <li>Electronics Store</li>
      <li>Grocery Store</li>
</ul>  
    </div>
  </div>
  <div className="column">
    <div className="content">
      <h2 className='ullist'>JAVA</h2>
      <ul className='ullist'>
      <li>Electronics Accessories</li>
      <li>Best Purchase</li>
      <li>Indian Mart</li>
</ul>  
    </div>
  </div>
  <div className="column">
    <div className="content">
      <h2 className='ullist'>JavaScript</h2>
      <ul className='ullist'>
      <li>PDF maker</li>
      <li>Sports Awards</li>
      <li>ABC learning</li>
</ul>  
    </div>
  </div>
</div>
            </div>
           <div className='homediv'>
            
            <h2 className='h2s'>Building greater futures through innovation <br/> 
             and collective knowledge</h2><br/>
            <p className='para1'>This is an IT services, consulting and business <br/> solutions organization that has been partnering with <br/>
            many of the world’s largest businesses for the past 50 years.<br/> 
            We believe innovation and collective knowledge can <br/>transform all our futures with greater purpose.
            </p>
            </div>
            
        </>
    )
}

export default Home;