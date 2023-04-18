import React from 'react';
import '../css/App.css'

export default function OurTeam() {
    return(
        <div className='ourteammain'>
        <h1 className='head'>OUR TEAM</h1>
        <br></br>
        <div className='ourdiv1'>
           <div className='ourdiv2'>
            <h3 className='head'>CEO</h3><br/>
            <img className='ourteam1' src='images/img-ceo.jpg'></img><br></br>
            <p className='para2'>It is a long established fact that a reader will be 
                distracted by the readable content of a page when looking 
                at its layout. The point of using Lorem Ipsum is that it has
                 a more-or-less normal distribution of letters, as opposed to
                  using 'Content here, content here', making it look like 
                  readable English. Many desktop publishing packages and
                   web page editors now use Lorem Ipsum as their default
                    model text, and a search for 'lorem ipsum' will uncover
                     many web sites still in their infancy</p>
           </div>
           <div>
            <h3 className='head'>Manager</h3><br/>
            <img className='ourteam' src='images/img_manager.jpg'></img><br></br>
            <p className='para2'>It is a long established fact that a reader will be 
                distracted by the readable content of a page when looking 
                at its layout. The point of using Lorem Ipsum is that it has
                 a more-or-less normal distribution of letters, as opposed to
                  using 'Content here, content here', making it look like 
                  readable English. Many desktop publishing packages and
                   web page editors now use Lorem Ipsum as their default
                    model text, and a search for 'lorem ipsum' will uncover
                     many web sites still in their infancy</p>
           </div>
           <div>
            <h3 className='head'>Developer</h3><br/>
            <img className='ourteam' src='images/img-developer.jpg'></img><br></br>
            <p className='para2'>It is a long established fact that a reader will be 
                distracted by the readable content of a page when looking 
                at its layout. The point of using Lorem Ipsum is that it has
                 a more-or-less normal distribution of letters, as opposed to
                  using 'Content here, content here', making it look like 
                  readable English. Many desktop publishing packages and
                   web page editors now use Lorem Ipsum as their default
                    model text, and a search for 'lorem ipsum' will uncover
                     many web sites still in their infancy</p>
           </div>
        </div>
        </div>
    );
}