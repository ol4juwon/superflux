import React from 'react'
import styled from 'styled-components';
import Highlight from "./../../assets/images/about/abouthighlight.png"
const About = () => {
    return (
        <About.Wrapper>
            <section className='about--img'>
                <img src={Highlight} alt="about superflux" />

            </section>
            <section className='leading'>
                <div className='leading--text'>
                    <div><h3>The leading secure, commercial and variable data prints solution 
provider</h3></div>
                    <div><p>Superflux was incorporated as a limited liability Company in the year 1995. In 1998, the Company commenced full operations in the marketing of security print products in Nigeria.  In line with the Central Bank of Nigeria’s directive for security printing companies to establish printing facilities in Nigeria by December 2007, our state of the art security printing facility, located in Lagos was commissioned in 2006.
<br />
We commenced commercial printing services in 2008. Cheque outsourcing, our innovative solutions to financial institutions commenced in 2009. We expanded our factory in response to the needs of our clients and it was commissioned in 2011. We have evolved from a 2-man trading company at inception to over 300 employees in a purpose built ultra-modern manufacturing facility in Nigeria.</p></div>
                </div>
                <div className='leading--img'>
                
                </div>
            </section>
        </About.Wrapper>
    )
}

About.Wrapper = styled.div`
width: 100%;
// height: 100vh;
// position:relative;
display: flex;
flex-direction : column;
// background: yellow;
.about--img{
    width:100%;
    height: 400px;
    display:flex;
    justify-content: right;
    // border: 2px solid red;
    img{
        height: 400px;
        width:100%;
        float: left;
    }
}
.leading{
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: row;
    .leading--text{
        border: 2px solid red;
        width: 50%;
        display: flex;
        oadding: 20px;
        flex- direction: row;
        div{
            width: 100%;
        }
    }
}

`

export default About;