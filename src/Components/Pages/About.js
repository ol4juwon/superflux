import React from 'react'
import styled from 'styled-components';
import Highlight from "./../../assets/images/about/abouthighlight.png"
import visionImg from "../../assets/images/vision/vision.png"
import target from "../../assets/images/vision/target.png"
import eyes from "../../assets/images/vision/eyes.png"
import centricityImg from "../../assets/images/vision/headset.png"
import innovationImg from "../../assets/images/vision/innovation.png"
import confidentialImg from "../../assets/images/vision/confidential.png"
import CreativeImg from "../../assets/images/vision/creativity.png"
import ExcelImg from "../../assets/images/vision/excellence.png"
import integrityImg from "../../assets/images/vision/integrity.png"
import openImg from "../../assets/images/vision/openness.png"
import squadImg from "../../assets/images/vision/squad.png"
import welfareImg from "../../assets/images/vision/welfare.png"
import trainingImg from "../../assets/images/vision/staff training.png"

import Footer from "../Footer"
const About = () => {

    const values = [
        {
            image: centricityImg,
            title:"Customer Centricity",
            text: "We listen, understand, and proffer innovative solutions."
        },
        {
            image: innovationImg,
            title: "Innovation",
            text:"We keep abreast of trends in technology and we always at the forefront of embracing change."
        },
        {
            image: CreativeImg,
            text: "We generate ideas, alternatives or possibilities useful in solving problems of our clients.",
            title:"Creativity"
        },
        {
            image: ExcelImg,
            text: "We are committed to offering excellent services at all times.",
            title:"Excellence"
        },
        {
            image: integrityImg,
            text: "We conduct all our business transactions in the most responsible manner at all times.",
            title:"Integrity"
        },
        {
            image: openImg,
            text: "We are open to change and transparent in all our processes and relationship with clients.",
            title:"Openness"
        },
        {
            image: squadImg,
            text: "Our culture is based on team spirit not only within our employees but also with our clients",
            title:"Squad spirit"
        },
        {
            image: trainingImg,
            text: "Our workforce is exposed to regular trainings both within and outside the country at regular intervals.",
            title:"Staff Training"
        },
        {
            image: welfareImg,
            text: "Our welfare package is second to none in our industry.",
            title:"Staff Welfare"
        },
        {
            image: confidentialImg,
            text: "Every data shared with us is secure and safe.",
            title:"Confidentiality"
        }
    ]

    return (
        <About.Wrapper>
            <section className='about--img'>
                <img src={Highlight} alt="about superflux" className='fluid' />

            </section>
            <section className='leading'>
                <div className='leading--text'>
                    <div><h3>The leading <span>secure</span>, <span>commercial</span> and <span>variable data</span> prints solution
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
                    <span className="__tablet--vision"><img src={target} alt={""} /><h1>Our Vision</h1>
                    </span> 
                    <p>
                        To be the leading facilitator and backbone for secure transaction, documentation, processing and communication, guaranteeing world class process integrity.
                    </p>
                    <span className='__vision-mision'><img src={eyes} alt={""} /><h1>Our Mission</h1>
                    </span>
                    <p>
                        To continually create an up-to-date and methodical transaction processing environment, including production of secure documents, Business Processing Outsourcing (BPO) capabilities and logistics infrastructure necessary to guarantee end-to-end transaction integrity.
                    </p>
                </div>
            </section>
            <section className="our--values">
                <div className='Val--heading'>
                    <h1>Our Val<span className='underline'>ues</span></h1>
                </div>
                <div className='val--content'>
                    {
                        values.map((vals, index)=>{
                            return(<div className='val--item' key={index}>
                                <img src={vals.image} alt={vals.title} />
                                <h3>{vals.title}</h3>
                                <p>{vals.text}</p>
                            </div>)
                        })
                    }
                </div>
            </section>
            <section className='quality--statement'>
                <div>
                    <h1>Quality Statem<span className='underline'>ent</span></h1>
                </div>
                <div>
                    <p>Superflux International limited, in pursuance of its existing strategic direction is committed to providing secure, variable data and commercial print solutions that conform to relevant stakeholders' requirements. 
To achieve this, our operations and processes are continually reviewed and improved upon to ensure customer satisfaction.

The organization is dedicated to establishing and maintaining a documented quality management system (QMS) as a means of ensuring that our products and services are in line with the requirements of the ISO 9001:2015 standard.</p>
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
        // border: 2px solid red;
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
        margin-bottom: 20px;
        .leading--text{
            width:100%; 
            display: flex;
            flex-direction: column;
            h3{
                padding: 50px 0px;
                width: 70%;
                color: #011166;
                font-family: poppins;
                font-size: 24px;
                font-weight: 600;
                margin: 0 auto;
                text-align: center;
                span{
                    color:#1A66FE;
                }
            }
            p{
                font-size:15px;
                font-weight: 300;
                line-height: 24px;
                color: #011166;
                text-align: center;
                padding: 30px;
            }
        }
    }
        .leading--img{
            display: none;
        }
        .vision{
           position: relative;
           width: 100%;
           height: 610px;
           .vis-img, .tablet--sec{
               position: absolute;
               left: 0;
               img{
                   padding-left: 20px;
                   margin: 0 auto;
               }
           } 
           .vis-img{
            // border: 2px solid red;
            width: 100%;
              z-index: 1;
            }
            
            .tablet--sec{
            
                // border: 2px solid red;
                // height: 200px;
                width: 80%;
                margin:  0 auto;
                background: #1A66FE;
                bottom: 0px;
                color: white;
                left: 10%;
                padding: 10px;
                border-radius: 10%;
                z-index: 2;

                h1{
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 28px;
                    padding: 10px 5px 10px 5px;
                }
                p{
                    text-align: center;
                    font-size: 15px;
                    line-height: 190%;
                }
                span{
                    width: 80%;
                    margin: 0 auto;
                    text-align: center;
                    justify-content: center;
                    display: flex;
                    align-items: center;
                    flex-direction: row;
                    img{
                        width: 42px;
                        height: 42px;
                    }
                }
               
            }
        }
         
         .our--values{
             position: relative;
             width: 100%;
            //  background: red;
            //  height: 400px;
             color: #011166;
             padding: 100px 0;
            //  border: 2px solid red;
             display: flex;
             flex-direction: column;
             .Val--heading{
                 width: 100%;
                 text-align: center;  
                
                 display: flex;
                 h1{
                     width: 100%;
                     font-size: 24px;
                   padding-bottom: 40px;
                     line-height: 32px;
                    font-family: Poppins;
                     font-weight: 600;
                     text-align: center;
                 }
                 
            }
            .val--content{
                width: 100%;
                height: auto;
                display: flex;
                flex-direction: column;
                .val--item{
                    width: 80%;
                    // height: 300px;
                    padding: 20px;
                    margin: 10px auto;
                    color: #011166;
                    box-sizing: border-box;
                    /* try-w */
                    
                    box-shadow: 0px 4px 16px rgba(144, 153, 200, 0.24);
                    border-radius: 16px;
                    img{
                        justify-self:  left;
                        padding: 5px;
                    }
                    h3{
                        text-align: left;
                        padding: 5px;
                    }
                    p{
                        text-align: left;
                        padding: 5px;
                    }
                }

            }
        }
         .quality--statement{
             width: 90%;
             height: auto;
             border-radius: 20px;
             margin: 0 auto;
             padding: 10px;
             margin-bottom: 20px;
             background: #1A66FE;
             h1{
                 font-size: 24px;
                 font-weight: 300;
                 line-height: 32px;
                 color: white;
                 text-align: center;
                 padding-top: 20px;
                 padding-bottom: 10px;
             }
             p{
                color: white;
                text-align: center;
                font-size: 15px;
                line-height: 28px;
                font-style: normal;
                margin-bottom: 20px;
            }


         }
        
}
@media only screen and (max-width: 320px){
 .vision{
     height: 750px;
 }   
}

`

export default About;