import React from 'react';
import styled from 'styled-components';
import OUTERBOUND from '../../assets/images/outerbound.png'
import  Group1 from '../../assets/images/Rectangle 176.png'
import SECUREPRINTS from '../../assets/images/secureprints.png'
import BACKGROUND from '../../assets/images/background.png';
import HARDCOVER from '../../assets/images/hardcover.png'
import Envelope from '../../assets/images/env/IMG_9187 1.png'
import VARIABLEPRINT from '../../assets/images/superflux/variable.png'
import THERMAL from '../../assets/images/superflux/thermal.png'
import Group2 from '../../assets/images/Rectangle 177.png'
import Solutions from '../Solutions';
import Blog from '../Blog';
import Choose from '../Choose';
import Testimonials from '../Testimonials';
import Accreditation from '../Accreditation';
import Customers from '../Customers'
import Footer from '../Footer'
const Home = () => {
    const solutions = [
        {
            img: SECUREPRINTS,
            h3: "Secure Prints",
            p: "We have created a value added solution that manufactures and finishes cheques ready for delivery... "
        },
        {
            img:HARDCOVER,
            h3: "Commercial Print",
            p: "Our commercial print unit is well equipped with state-of-the-art print technology, comprehensive finishing."

        }
        ,
        {
            img:Envelope,
            h3: "Envelope Production",
            p: "Superflux WINKER + DUNNEBIER envelope making machines is set for high volume production of best in class quality envelopes."

        }
        , {
            img:THERMAL,
            h3: "Thermal/POS Roll production",
            p: "We are a trusted local manufacturer of high quality thermal roll which is durable, affordable and ensures faster printing. We provide customization solution for the pre-printing and supply of Automated Teller Machine (ATM) and Point of Sale (POS) printer receipts deployable by tellers and ATM machines. This involves the pre-printing of your organization logo on Thermal Paper Roll receipt also known as transaction slip. The back of this receipt can also be used to advertise your products or information concerning your business including feedback and emergency or assistance call numbers. We are a wholesale supplier of thermal rolls."

        }
        , {
            img:VARIABLEPRINT,
            h3: "Variable Data Printing",
            p: "Variable Data Printing lets you personalize  your print with unique data in large scale. "

        }
        
    ]
    return (
        <Home.Wrapper>

           <div className='cta'>
               <h1>
                   Leading <span className='Loop'>Security &amp; <br />Commercial </span>Print Company
               </h1>
               <p>
               Your one-stop security, commercial and variable data print shop.
               </p>
               <button className='rMore'>
                   Read More
                   </button>
            </div>
            
            {/* <div className='outerBound'>   <img className='outerBound' src={OUTERBOUND} alt=''/></div> */}
            <div className='introduction'>
                 
                       <div className='text'>
                            <h1>Superflux International <br/>Limi<span className="underline">ted</span></h1>
                            <p>Superflux International Limited is the leading secure, commercial and variable data prints solution provider to over 135 clients in various sectors.
<br />Our goal is to always exceed customers' expectations by providing premium quality products and services following international best practices and stringent security controls. We provide a wide array of specialized print services for discerning and quality-conscious clientele base and has continued to enjoy great commendation and patronage from our customers.
<br />Our operations and activities are guided by the principles of quality, integrity, dependability, confidentiality, teamwork and high ethical standard.
                            </p>
                        </div>
                        <div className='image'>
                             <img className='bottom' src={Group1} alt=''/>
                             {/* <img className='top' src={Group2} alt=''/>  */}
                         {/* <div className='cls3'></div>   */}
                        </div>
                      
                        
               </div>
               <div className='outerBound2'>   <img className='outerBound' src={OUTERBOUND} alt=''/></div>
               <div className='solutions'>
                <div className='Text'>
                    <h3> Our Soluti<span className='underline'>ons</span></h3>
                <p>Get access to the best brand protection technology <br/>
for your products, variable printing as well as other commercial print solutions. </p></div>
                <div className='slides'>
                    <Solutions solutions={solutions} />
                </div>
               </div>
               <div className='outerBound3'>   <img className='outerBound' src={OUTERBOUND} alt=''/></div>
               <div className='platform'>
               <Choose/>
               </div>
               <div className='blog' >
                   <Blog/>
               </div>
               <div className="testimonials">
        <Testimonials />
               </div>
               <section className='accred'>
                    <Accreditation />
               </section>
               <section className='customers'>
                    <Customers />
               </section>
               <Footer />
        </Home.Wrapper>
    );
}
Home.Wrapper = styled.div`
    display: flex;
     background:url(${BACKGROUND}) rgba(5, 23, 43, 0.6) no-repeat;; 
// positio¿n: absolute;
background-blend-mode: multiply;
.Loop{
    font-family: 'Playfair Display';
    font-style: italic;
    font-weight: 700;
    color:#1A66FE;
    font-size: 40px;
    line-height: 54px;
}
.arrow{
    background: blue;
    z-index: 200;
    position: absolute;
    bottom: 50px;
    right: 50px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }
    flex-direction: column;
    width: 100%;
    // height: 100vh;
    color: #fff;
    .cta{
        display: flex;
        flex-direction: column;
        width: 50%;
        // height:600px;
        padding-top: 200px;
        padding-bottom: 200px;
        padding-left: 100px;
        p{
            line-height: 26px;
            font-size: 16px;
            padding: 20px 0;
        }
        .rMore{
        background-color: #1A66FE;
        width: 135px;
        height: 45px;
        color: #fff;
        border-radius: 4px;
        
        button{
            border: none;
            outline: none !important;
        }
        }
    }
  .outerBound{
      position: absolute;
      top: 370px;
      img{
          opacity: 0.5;
          width:200px;
          height:310px;
      }
  }
  .outerBound2{
    position: absolute;
    top: 930px;
    img{
        opacity: 0.5;
        width:150px;
        height:210px;
    }
}
.outerBound3{
    position: absolute;
    top: 1570px;
    img{
        opacity: 0.5;
        width:200px;
        height:310px;
    }
}
    .introduction{
        width: 100%;
        background-color: #E5E5E5;
        height: 700px;
        display: flex;
        flex-direction: row no-wrap;
        border: 1px solid red;
        color: #011166;
        .text{
            width: 50%;
            padding-left: 100px;
            // padding-top: 100px;
            h1{
                font-size: 2.5rem;
                font-weight: bold;
                margin-bottom: 1rem;
            }
            p{
                font-style: normal;
                font-size: 14px;
                line-height: 28px;
            }
        }
        .image{
           
            
        }
      
     }
     .solutions{
        //  height: 320px;
         width: 100%;
         background-color: #F4F8FC;
         padding-bottom: 50px;
        //  border: 1px solid #011166;
         display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
         .Text{
             width: 100%;
            //  background-color: #E5E5E5;
            //  border-bottom: 1px solid #011166;
             color: #011166;
             h3{
                 color: #011166;
                 font-size:20px;
                 font-weight:600;
                 font-style: normal;
                 line-height: 30px;
                 font-family: Poppins;
             }
             p{
                 text-align: center;
                 font-size: 16px;
                 font-weight: 300;
                 font-style: normal;
                 line-height: 30px;
                 padding: 10px;
             }
         }
         .slides{
            width: 80%;
            // height: 446px;
           
            overflow: hidden;
         }
     }
     .platform{
        display:flex;
        flex-direction: column;
        width:100%;
        padding-top: 30px;
        padding-bottom: 30px;
        height:auto;
        align-items: center;
        justify-self:center;
        background: white;
    }
    .blog{
        position: relative;
        width: 100%;
        height: 500px;
        background: #f4fbfc;
        // padding: 0 10px;
        // padding-bottom: 30px;
    }
    .testimonials{
        width: 100%;
        // height: 400px;
        // padding:10px 100px;
        background: #e2e6fc;
    }
    .accred{
        width: 100%;
        // height: 300px;
        // padding:0 100px;
        background: #e2e6fc;

    }
    .customers{
        width: 100%;
        height: 397px;
        padding:30px 100px;
        background: #e2e6fc;

    }


  
@media only screen and (max-width: 728px){
    body{
        width: 100%;
    }
    .cta{
        width: 100%;
        height: auto;
        padding-top: 120px;
        padding-left: 40px;
        padding-bottom: 280px;
        border: 1px solid red;
        h1{
            text-align: center;
            font-size: 26px;
            line-height: 40px;
        }
        p{
            text-align: center;
        }
        button{
            width: 100%;
            height: 40px;
            border-radius: 4px;
            border: none;
            outline: none;
            background-color: #1A66FE;
            margin: 0 auto;
        }
    }
    .blog{
        display: flex;
        // border: 2px solid red;
        flex-direction: row ;
        height: auto;
        width: 100%;
    }
    .introduction{
      position: relative;
      display: flex;
        flex-direction: column-reverse;
        width: 100%;
        height: auto;
        padding-top: 30px;
        img{
            width: 90%;
            height: auto;
            margin: 0 10%;

        }
        .text{
            width: 100%;
            padding-left: 10px;
            padding-top: 10px;
            display: flex;
            flex-direction: column;
            h1{
                font-size: 24px;
                line-height: 32px;
                font-weight: 600;
                text-align: center;
                font-family: Poppins;
            }
            p{
                font-size: 16px;
                line-height: 28px;
                text-align: center;
                font-family: "SF Pro Text";
                padding: 20px;

            }
        }
    }
    .solutions{
        postion: relative;
                .Text{
                    h3{
                        padding-top:  12px;
                        font-size: 14px;
                        line-height: 27px;
                    }
                    // p{
                    //     color: #011166;
                    //     text-align: center;
                    // }
                }
    }
    .customers{
        padding: 0;
    }
}
`
export default Home;
