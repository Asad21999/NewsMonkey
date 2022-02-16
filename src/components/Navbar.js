import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {  
  Link
} from "react-router-dom";


export class Navbar extends Component {
  static propTypes = {
  }

  //  darkMode=()=>{
  //   let dark= document.getElementById('dark')
   
  //  if(dark.innerText==="dark mode"){
  //   dark.innerText="light mode"
  //   document.body.style.backgroundColor="grey"
  //   document.button.style.backgroundColor='black'
  //   document.Navbar.style.backgroundColor='grey'
  // }
  //  else{
  //   dark.innerText="dark mode"
  //   document.body.style.backgroundColor="white"
  //   document.button.style.backgroundColor='blue'
  //  }   
  // }

  render() {
    return (
      <div>
        <nav id='navBar' className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NewsMonkey</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
      
       <li className="nav-item">
          <Link className="nav-link" to="/business">Business</Link>
       </li>
       <li className="nav-item">
          <Link className="nav-link" to="/entertainment">Entertainment</Link>
       </li>
       
       <li className="nav-item">
          <Link className="nav-link" to="/health">Health</Link>
       </li>
       <li className="nav-item">
          <Link className="nav-link" to="/science">Science</Link>
       </li>
       <li className="nav-item">
          <Link className="nav-link" to="/sports">Sports</Link>
       </li>
       <li className="nav-item">
          <Link className="nav-link" to="/technology">Technology</Link>
       </li>
       <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
       </li>
      </ul>
      
     {/* <button onClick={this.darkMode} id="dark" className="btn btn-sm btn-dark">dark mode</button> */}
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
