import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               

               <p>If you are intrested in viewing my resume, you can view that
                    <a href="https://drive.google.com/file/d/1jBXwMJORNkTxH0KFE2J4N31j6sUaquOG/view?usp=sharing"
                    target="_blank" rel="noopener noreferrer"> here !</a> </p>

               <div className="row">

                  <div className="columns contact-details">

                  
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}