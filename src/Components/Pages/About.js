import React from 'react'
import styled from 'styled-components';
import Highlight from "./../../assets/images/about/abouthighlight.png"
import visionImg from "../../assets/images/vision/vision.png"
import target from "../../assets/images/vision/target.png"
import eyes from "../../assets/images/vision/eyes.png"
import Footer from "../Footer"
const About = () => {
    return (
        <About.Wrapper>
            <section className='about--img'>
                <img src={Highlight} alt="about superflux" className='fluid' />

            </section>
            <section className='leading'>
                <div className='leading--text'>
                    <div><h3>The leading secure, commercial and variable data prints solution
                        provider</h3></div>
                    <div>
                        <p>Superflux was incorporated as a limited liability Company in the year 1995. In 1998, the Company commenced full operations in the marketing of security print products in Nigeria.  In line with the Central Bank of Nigeria’s directive for security printing companies to establish printing facilities in Nigeria by December 2007, our state of the art security printing facility, located in Lagos was commissioned in 2006.
                            <br />
                            We commenced commercial printing services in 2008. Cheque outsourcing, our innovative solutions to financial institutions commenced in 2009. We expanded our factory in response to the needs of our clients and it was commissioned in 2011. We have evolved from a 2-man trading company at inception to over 300 employees in a purpose built ultra-modern manufacturing facility in Nigeria.</p>
                    </div>
                </div>
                <div className='leading--img'>

                </div>
            </section>
            <section className='vision'>
                <div className='vis-img'>
                    <img src={visionImg} alt='' />
                </div>
                <div className='tablet--sec'>
                    <span><img src={target} alt={""} /><h1>Our Vision</h1>
                    </span> 
                    <p>
                        To be the leading facilitator and backbone for secure transaction, documentation, processing and communication, guaranteeing world class process integrity.
                    </p>
                    <span><img src={eyes} alt={""} /><h1>Our Mission</h1>
                    </span>
                    <p>
                        To continually create an up-to-date and methodical transaction processing environment, including production of secure documents, Business Processing Outsourcing (BPO) capabilities and logistics infrastructure necessary to guarantee end-to-end transaction integrity.
                    </p>
                </div>
            </section>
            <Footer />
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
    // height: 400px;
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
@media only screen and (max-width: 600px){
    width: 100%;
    height: auto;
    display:flex;
    flex-direction: column;
    .leading{
        display: flex;
        flex-direction: column;
        width: 100%;
        .leading--text{
            width:100%; display: flex;
            flex-direction: column;
            h3{
                font-family: poppins;
                font-size: 24px;
                font-weight: 600;
            }
            p{
                font-size:15px;
                font-weight: 300;
                line-height: 24px;
                text-align: center;
                padding: 20px;
            }
        }
    }
        .leading--img{
            display: none;
        }
        .vision{
           position: relative;
           width: 100%;
            .vis-img{
              
            }
            .tablet--sec{
            
                border: 2px solid red;
                // height: 200px;
                background: #1A66FE;
                // z-index: 20;
                p{
                    text-align: center;
                }
                span{
                    text-align: center;
                    justify-content: space-around;
                    display: flex;
                    flex-direction: row;
                }
               
         }
        
}
`

export default About;