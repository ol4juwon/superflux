import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import bg from '../assets/images/footerbg.png'
import logo from '../assets/images/bg.png'
const Footer = () => {
    return (
        <Footer.Wrapper>
            <div className='Quicklinks'> <div className='Logo'><NavLink to={"/"}><img src={logo} alt="superflux home"></img></NavLink></div>
            <div><h3>Company</h3><ul><li><NavLink to={"/"}>About SuperFlux</NavLink></li>
                <li><NavLink to={"/"}>Blog</NavLink></li>
                <li><NavLink to={"/"}>Career</NavLink></li>
                <li><NavLink to={"/"}>Partners</NavLink></li>
                <li><NavLink to={"/"}>FAQS</NavLink></li>
                <li><NavLink to={"/"}>Privacy &amp; Terms</NavLink></li>

            </ul></div>
            <div><h3>Solutions</h3>
                <ul>
                    <li><NavLink to={"/"}>Cheque Printing &amp; Personalization</NavLink></li>
                    <li><NavLink to={"/"}>Revenue documents</NavLink></li>
                    <li><NavLink to={"/"}>Election Materials</NavLink></li>
                    <li><NavLink to={"/"}>E-Advice</NavLink></li>
                    <li><NavLink to={"/"}>Secure Paper &amp; Electronic Tickets</NavLink></li>
                    <li><NavLink to={"/"}>Secure Certificates &amp; Transcripts</NavLink></li>
                    <li><NavLink to={"/"}>Annual Reports</NavLink></li>
                    <li><NavLink to={"/"}>Labels</NavLink></li>
                    <li><NavLink to={"/"}>Thermal Rolls</NavLink></li>
                </ul>
            </div>
            <div><h3>Contact</h3><ul><li><NavLink to={"/"}>Sales</NavLink></li><li><NavLink to={"/"}>Support</NavLink></li><li><NavLink to={"/"}>Report Abuse</NavLink></li></ul></div>
            <div><h3>Socials</h3><ul><li><NavLink to={"/"}>Facebook</NavLink></li><li><NavLink to={"/"}>Twitter</NavLink></li><li><NavLink to={"/"}>Instagram</NavLink></li></ul></div>
</div>
<div className='copyright'>
&copy; 2021, <i>Superflux International Limited</i>.  All Rights Reserved.
</div>
                   </Footer.Wrapper>
    );
}
Footer.Wrapper = styled.div`
width: 100%;
height: auto;
position: relative;
bottom:0;
underline{
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-decoration-color:#1A66FE;
}
text-decoration: none;
color: white;
.copyright{
    padding-left:100px;

}
i{
    color: #1A66FE;
}
ul{
    list-style: none;
    li{
        // padding-top:5px;
        padding-bottom: 15px;
        font-style: normal;
        font-size:14px;
        font-weight:normal;
    }
}
a{
    color: white;text-decoration: none;
}
background:  url(${bg}),linear-gradient(0deg, rgba(0,0,0,0.8) , rgba(0,0,0,0.8));
mix-blend-mode: screen;
background-attachment:cover;
.Quicklinks{
display: grid;
grid-template-columns: auto auto auto auto auto;
}
div{
    padding:30px;
    h3{
        color:#1A66FE;
        font-size: 16px;
        text-align:left;
        padding-top:20px;
        padding-bottom: 15px;
        justify-text: left;
    }
}

`
export default Footer;
