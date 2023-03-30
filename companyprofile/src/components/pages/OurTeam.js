import React from 'react';
import '../../App.css';

export default function OurTeam() {
    return(
        <div>
        <h1 style={{textAlign:"center"}}>OUR TEAM</h1>
        <br></br>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
           <div style={{alignItems:"center",alignContent:"center",textAlign:"center"}}>
            <h3 style={{textAlign:"center"}}>CEO</h3><br/>
            <img style={{width:"250px",alignContent:"center",textAlign:"center"}} src='images/img-ceo.jpg'></img><br></br>
            <p style={{width:"250px",textAlign:"center",marginLeft:"80px"}}>It is a long established fact that a reader will be 
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
            <h3 style={{textAlign:"center"}}>Manager</h3><br/>
            <img style={{width:"250px",alignContent:"center",textAlign:"center",marginLeft:"70px"}} src='images/img_manager.jpg'></img><br></br>
            <p style={{width:"250px",textAlign:"center",marginLeft:"80px"}}>It is a long established fact that a reader will be 
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
            <h3 style={{textAlign:"center"}}>Developer</h3><br/>
            <img style={{width:"250px",alignContent:"center",textAlign:"center",marginLeft:"70px"}} src='images/img-developer.jpg'></img><br></br>
            <p style={{width:"250px",textAlign:"center",marginLeft:"80px"}}>It is a long established fact that a reader will be 
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