import React from "react";
import user from "../data/user";
import Links from "./Links";
import App from "./App";


function About(props){

    if (!props.bio) {
      return null
    }
    else {
       <p>{props.bio}</p>}
      
      console.log(props) 
      return (
        <div id="about">
      <h2>About Me</h2>
     <p>{props.bio}</p>
      

     <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
     <Links
    github = "https://github.com/liza"
    linkedin ="https://www.linkedin.com/in/liza/"
    />
    </div>
    
  );
}

  



  export default About;
