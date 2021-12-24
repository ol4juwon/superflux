import Logo from "../assets/images/Group 53.png"
import styled from 'styled-components';
import BACKGROUND from '../assets/images/background.png';
import { NavLink } from "react-router-dom";
const NavBar = () => {
    return (
        <NavBar.Wrapper>
            <div className="logo">
                <img src={Logo} alt='' />
            </div>
    <div className="Menu">
        <ul >
           <li><NavLink to={"/"}>Home</NavLink> </li>
        <li >About us<i className="fa fa-caret-down"></i>
        <ul>
                <li><NavLink to="/About">The Company</NavLink></li>
      <li><NavLink to="/team">The Team</NavLink></li></ul>
        </li>
            <li >Our Solutions<i className="fa fa-caret-down"></i>
            <ul>
            <li><NavLink to="/SecurePrints">Secure Prints</NavLink></li>
            <li><NavLink to="/CommercialPrints">Commercial Print</NavLink></li>
                <li><NavLink to="/variabledata">Variable Data Print</NavLink></li>
                <li><NavLink to="/BrandProtection">Brand Protection</NavLink></li>
                <li><NavLink to="/Envelope">Envelope Production</NavLink></li>
                <li><NavLink to="/Thermal">Thermal/POS roll Production</NavLink></li>
      <li><NavLink to="#">Link 3</NavLink></li></ul></li>
            <li><NavLink to={"/Blog"}>Blog/Media<i className="fa fa-caret-down"></i></NavLink>
            <ul>
                <li><NavLink to="/News">News/Articles</NavLink></li>
      <li><NavLink to="/Gallery">Gallery</NavLink></li></ul></li>
            <li><NavLink to={"/faq"}>FAQ</NavLink></li>
            <li><NavLink to={"/contact"}>Contact</NavLink> </li> 

        </ul>
    </div>
        </NavBar.Wrapper>
    )
}

NavBar.Wrapper = styled.div`
height: 100px;

// position:absolute;
// z-index: 100;
background:url(${BACKGROUND}) rgba(5, 23, 43, 0.6) ; 
// positio¿n: absolute;
background-blend-mode: multiply;
// padding: 10px;
width: 100%;
box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
display: flex;
justify-content: space-between;
align-items: center;
.logo{
    display: flex;
    margin-left: 100px;
}
a {
    color: #011166;
    text-decoration: none;
}
i{
    margin: 0 5px;
}
.Menu{
    width: 50vw;
   
    ul {
        // background: white;
        list-style: none;
        margin: 0;
        padding-left: 0;
      }
      
      li {
        color: #011166;
       // background: white;
        display: block;
        float: left;
        padding: 1rem;
        position: relative;
        text-decoration: none;
        transition-duration: 0.5s;
      }
        
      li a {
        color: #011166;
      }
      li a:hover {
          color: white;
      }
      
      li:hover {
        background: #011166;
        color: white;
        cursor: pointer;
      }
      
      ul li ul {
        background: orange;
        visibility: hidden;
        opacity: 0;
        min-width: 5rem;
        position: absolute;
        transition: all 0.5s ease;
        margin-top: 1rem;
        left: 0;
        display: none;
      }
      
      ul li:hover > ul,
      ul li ul:hover {
        visibility: visible;
        opacity: 1;
        display: block;
      }
      
      ul li ul li {
        clear: both;
        width: 100%;
      }
}
@media only screen and (max-width: 768px) {
  
  background:url(${BACKGROUND}) rgba(5, 23, 43, 0.6) ; 
  // positio¿n: absolute;
  background-blend-mode: multiply;
opacity: 0.1;
  .logo{
    width: 200px;
    padding:2px;
    margin : 0;
  }
  .Menu{
    display: none;
  }
} 
`

export default NavBar;