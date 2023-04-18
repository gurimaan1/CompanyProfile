import React from 'react';
import '../css/App.css'
/* Gurdeep Singh: 8796005 */
function Projects() {
    return (
        <>
            <br/>
            <h2 className='head'>Our Top Projects: <br/> </h2>
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
        </>
    )
}

export default Projects;