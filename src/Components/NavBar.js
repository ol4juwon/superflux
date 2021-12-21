import Logo from "../assets/images/Logo.png"
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
const NavBar = () => {
    return (
        <NavBar.Wrapper>
            <div className="logo">
<img src={Logo} alt='' />
            </div>
    <div className="Menu">
        <ul className="Menu-list">
           <li><NavLink to={"/"}>Home</NavLink> </li>
        <li className="dropDown"><NavLink to={"/"}><button className="dropBtn">About us</button><i className="fa fa-caret-down"></i></NavLink></li>
            <li className="dropDown"><NavLink to={"/"}><button className="dropBtn">Our Solutions</button><i class="fa fa-caret-down"></i></NavLink></li>
            <li className="dropDown"><NavLink to={"/"}>Blog/Meida<i class="fa fa-caret-down"></i></NavLink></li>
            <li><NavLink to={"/faq"}>FAQ</NavLink></li>
            <li><NavLink to={"/contact"}>Contact</NavLink> </li> 

        </ul>
    </div>
        </NavBar.Wrapper>
    )
}

NavBar.Wrapper = styled.div`
height: 100px;
// z-index: 100;
background-color: transparent;
background-color: rgba(0, 0, 0, 0.004);
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
.Menu-list{
    display: grid;
    grid-template-columns: repeat(6, auto);
    grid-gap: 30px;
    list-style: none;
    text-align: center;
    width: 50vw;
    justify-content: end;
    padding-right: 100px;
    margin-right: 2rem;
    .dropDown{
        float: left;
        overflow: hidden;
    }
    .dropDown .dropBtn {
        font-size: 16px;  
        border: none;
        outline: none;
        color: #011166;
        // padding: 14px 16px;
        background-color: inherit;
        font-family: inherit;
        margin: 0;
      }
}
`

export default NavBar;