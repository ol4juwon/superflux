import Logo from "../assets/images/Group 10.png"
import LogoBrand from "../assets/images/firefox1.png"
import styled from 'styled-components';
import BACKGROUND from '../assets/images/background.png';
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <NavBar.Wrapper>
      <nav className="navbar navbar-expand-lg navbar-light ">
       <NavLink className="navbar-brand" to="/" > <img className="logoo" src={Logo} alt='' /> <img className="lo--go" src={LogoBrand} alt="" /></NavLink>
  <button className="navbar-toggler" type="icon" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home </NavLink>
      </li>
         
      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          The Company
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <NavLink className="dropdown-item" to="/team">The Team</NavLink>
          <NavLink className="dropdown-item" to="/about">About us</NavLink>
           </div>
      </li> 
      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Our Solutions
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <NavLink className="dropdown-item" to="/secureprints">Security Printing</NavLink>
          <NavLink className="dropdown-item" to="/CommercialPrints">Commercial Print</NavLink>
          <NavLink className="dropdown-item" to="/envelope">Envelope Production</NavLink>
          <NavLink className="dropdown-item" to="/variabledata">Variable Data Printing</NavLink>
          <NavLink className="dropdown-item" to="/Thermal">Thermal/POS Roll Production</NavLink>
           </div>
      </li> 
      <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Blog/Media
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <NavLink className="dropdown-item" to="/blog">Blog</NavLink>
          <NavLink className="dropdown-item" to="/gallery">Gallery</NavLink>
           </div>
      </li> 
      <li className="nav-item">
        <NavLink className="nav-link" to="/faq">FAQs</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
      </li>
      </ul>
      </div>
  
</nav>


      
    </NavBar.Wrapper>
  )
}

NavBar.Wrapper = styled.div`
// .navbar-nav{
// // padding-right: 150px;
// }



// height: 100px;
@media only screen and (max-width: 600px) {

 .navbar-collapse{
  width: 50%;
  text-align: right;
  .dropdown-menu{
    text-align: right;
    // width: 50%;
    border: 0;
    justify-content: right;
    direction: rtl;
  }
}
.logoo{
  width: 100px;
  height: 100px;
}
.navbar-brand{
  .logoo{
    width: 56px;
    height: 56px;
  }
  .lo--go{
    width: 130px;
    height: 30px;

  }
  
} 

}
// background:url(${BACKGROUND}) rgba(5, 23, 43, 0.6) ; 


`

export default NavBar;