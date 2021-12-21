import React from 'react'
import styled from 'styled-components';
import Highlight from "./../../assets/images/about/abouthighlight.png"
const About = () => {
    return (
        <About.Wrapper>
            <section className='about--img'>
                <img src={Highlight} alt="about superflux" />

            </section>
        </About.Wrapper>
    )
}

About.Wrapper = styled.div`
width: 100%;
height: 400px;
position:relative;
background: yellow;
.about--img{
    width:100%;
    height: 400px;
    border: 2px solid red;
    img{
        height: 400px;
        width:100px;
    }
}

`

export default About;