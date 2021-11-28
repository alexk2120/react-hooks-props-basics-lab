import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";

console.log(user.bio)

function App() {
  return (
    <div>
      <NavBar />
      <Home  color = 'firebrick' username = "Alex" city = "New York" />
      <About bio = "I made this!" />
      
    
    </div>
  );
}

export default App;
