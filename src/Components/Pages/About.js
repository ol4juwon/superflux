import React from 'react'
import styled from 'styled-components';
import GROUP273 from "../../assets/images/about/Group 273.png";
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
import GROUP2 from "../../assets/images/about/Group 2.png"

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
                        provider.</h3></div>
                    <div>
                        <p>Superflux was incorporated as a limited liability Company in the year 1995. In 1998, the Company commenced full operations in the marketing of security print products in Nigeria.  In line with the Central Bank of Nigeria’s directive for security printing companies to establish printing facilities in Nigeria by December 2007, our state of the art security printing facility, located in Lagos was commissioned in 2006.
                            <br />
                            We commenced commercial printing services in 2008. Cheque outsourcing, our innovative solutions to financial institutions commenced in 2009. We expanded our factory in response to the needs of our clients and it was commissioned in 2011. We have evolved from a 2-man trading company at inception to over 300 employees in a purpose built ultra-modern manufacturing facility in Nigeria.</p>
                    </div>
                </div>
                <div className='leading--img'>
                    <img src={GROUP2} alt="about superflux" className='fluid' />
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
                <div className='quality--img'>
                <div>
                    <h1>Quality Statem<span className='underline'>ent</span></h1>
                </div>
                <div>
                    <p>Superflux International limited, in pursuance of its existing strategic direction is committed to providing secure, variable data and commercial print solutions that conform to relevant stakeholders' requirements. 
To achieve this, our operations and processes are continually reviewed and improved upon to ensure customer satisfaction.
<br/>
<br/>
The organization is dedicated to establishing and maintaining a documented quality management system (QMS) as a means of ensuring that our products and services are in line with the requirements of the ISO 9001:2015 standard.</p>
                </div>
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
    flex-wrap: nowrap;
    margin-bottom: 50px;
    // border: 2px solid red;
    .leading--text{
        // border: 2px solid red;
        width: 50%;
        display: flex;
        flex-direction: column;
        padding: 20px;
        flex- direction: row;
        div{
            width: 100%;
        }
        h3{
            font-size: 32px;
            line-height: 44px;
            font-family: 'Poppins', sans-serif;
            padding: 50px 80px;
            font-weight: 600;
            span{
                color:#1A66FE;
            }
        }
        p{
            font-size: 16px;
            line-height: 24px;
            font-family: 'Poppins', sans-serif;
            padding: 0 80px;
        }
    }
    .leading--img{
        width:50%;
    }
}
.vision{
    position: relative;
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: row;
    .vis-img{
        position:absolute;
        width: 50%;
        // margin-top: 40px;
        // border: 2px solid red;
        img{
            width: 735px;
            height: 500px;
        }
    }
    .tablet--sec{
        position:absolute;
        width: 60%;
        height:400px;
        margin-top: 50px;
        right: 0;
        top: 0;
        color: white;
        padding: 40px;
        padding-left:150px;
        background: #1A66FE;
        border-top-left-radius: 16px;
        border-bottom-left-radius: 16px;
        h1{
            font-size: 28px;
            font-weight: 600;
            line-height: 40px;
            padding: 10px 5px 10px 5px;
        }
        p{
            text-align: start;
            font-size: 15px;
            line-height: 190%;
        }
        span{
            width: 100%;
            margin: 0 auto;
            justify-content: start;
            display: flex;
            img{
                padding-top: 10px;
                margin-right: 5px;
                width: 32px;
                height: 42px;
                justify-content: center;
            }
        }
    }
}
.our--values{
    width: 100%;
    display: flex;
    flex-direction: column;
    .Val--heading{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        h1{
            font-size: 32px;
            line-height: 52px;
            font-weight: 600;
            color: #011166;
            text-align: center;
            padding: 20px;
        }
    }
    .val--content{
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        // justify-content: start;
        margin: 0 auto;
        padding-left: 100px;
        .val--item{
            width: 22%;
            // display: flex;
            border: 1px solid rgba(1,17,102,0.2);
            padding: 20px;
            box-sizing: border-box;
            /* try-w */

            box-shadow: 0px 4px 16px rgba(144, 153, 200, 0.24);
            border-radius: 16px;
            margin: 10px;
        }
    }
}
.quality--statement{
    margin-top: 50px;
    width: 100%;
    height: 630px;
    padding-top: 100px;
    background: #F4F8FC;
    .quality--img{
        width: 60%;
        height: 430px;
        background: url(${GROUP273}),  no-repeat;
        background-attachment:cover;
background-size: cover ;
        margin: auto auto;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.24);
        border-radius: 32px;
        h1{
            padding-top: 60px;
            text-align: center;
            font-size: 32px;
            line-height: 40px;
            width: 100%;
        }
        p{
            padding-top: 20px;
            font-family: "SF Pro Text";
            font-size: 16px;
            line-height: 24px;
            padding-left: 100px;
            padding-right: 100px;
            text-align: center;
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
     height: 500px;
     img{
         width: 90%;
         height:100px;
     }
 }   
}

`

export default About;