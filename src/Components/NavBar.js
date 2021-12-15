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
        <li><NavLink to={"/"}>About Us</NavLink></li>
            <li><NavLink to={"/"}>Our Solutions</NavLink></li>
            <li><NavLink to={"/"}>Blog/Meida</NavLink></li>
            <li><NavLink to={"/"}>FAQ</NavLink></li>
            <li><NavLink to={"/"}>Contact</NavLink> </li> 

        </ul>
    </div>
        </NavBar.Wrapper>
    )
}

NavBar.Wrapper = styled.div`
height: 100px;
// z-index: 100;
background: rgb(0,0,0,0.2);
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
    color: #fff;
    text-decoration: none;
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
}
`

export default NavBar;