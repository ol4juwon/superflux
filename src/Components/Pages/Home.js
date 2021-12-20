import React from 'react';
import styled from 'styled-components';
import OUTERBOUND from '../../assets/images/outerbound.png'
import  Group1 from '../../assets/images/Rectangle 176.png'
import SECUREPRINTS from '../../assets/images/secureprints.png'
import HARDCOVER from '../../assets/images/hardcover.png'
import Group2 from '../../assets/images/Rectangle 177.png'
import Solutions from '../Solutions';
import Blog from '../Blog';
import Choose from '../Choose';
import Testimonials from '../Testimonials';
import Accreditation from '../Accreditation';
import Customers from '../Customers'
const Home = () => {
    const solutions = [
        {
            img: SECUREPRINTS,
            h3: "Secure Prints",
            p: "We print security docuemnts on secure printers and provide a secure printing service for your business."
        },
        {
            img:HARDCOVER,
            h3: "Hard Cover",
            p: "We print hard cover books and provide a secure printing service for your business."

        }
        ,
        {
            img:HARDCOVER,
            h3: "Hard Cover",
            p: "We print hard cover books and provide a secure printing service for your business."

        }
        , {
            img:HARDCOVER,
            h3: "Hard Cover",
            p: "We print hard cover books and provide a secure printing service for your business."

        }
        , {
            img:HARDCOVER,
            h3: "Hard Cover",
            p: "We print hard cover books and provide a secure printing service for your business."

        }
        
    ]
    return (
        <Home.Wrapper>

           <div className='cta'>
               <h1>
                   Leading Security & Commercial Print Company
               </h1>
               <p>
                   Your one-stop security, commercial and variable data print shop.
               </p>
               <button className='rMore'>
                   Read More
                   </button>
            </div>
            
            <div className='outerBound'>   <img className='outerBound' src={OUTERBOUND} alt=''/></div>
            <div className='introduction'>
                 
                       <div className='text'>
                            <h1>Superflux International <br/>Limited</h1>
                            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                            </p>
                        </div>
                        <div className='image'>
                             <img className='bottom' src={Group1} alt=''/>
                             <img className='top' src={Group2} alt=''/> 
                         <div className='cls3'></div>  
                        </div>
                      
                        
               </div>
               <div className='outerBound2'>   <img className='outerBound' src={OUTERBOUND} alt=''/></div>
               <div className='solutions'>
                <div className='Text'><h3> Our Solutions</h3>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p></div>
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
        </Home.Wrapper>
    );
}
Home.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    // height: 100vh;
    color: #fff;
    .cta{
        display: flex;
        flex-direction: column;
        width: 50%;
        height:600px;
        padding-top: 200px;
        padding-left: 100px;
        .rMore{
        background-color: #1A66FE;
        width: 135px;
        height: 45px;
        color: #fff;
        border-radius: 4px;
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
        color: #011166;
        .text{
            width: 50%;
            padding-left: 100px;
            padding-top: 100px;
            h1{
                font-size: 2.5rem;
                font-weight: bold;
                margin-bottom: 1rem;
            }
        }
        .image{
            position:absolute;
            width: 50%;
            height: 500px;
            justify-content: end;
            right:0px;
            .top{
                position: absolute;
                bottom:-130px;
                width:418px;
                height:338px;
                img{
                box-shadow: 0 20px 20px 0 rgb(223,221,123);
                }
                right:0;
                z-index:10;
            }
            .bottom{
                position: absolute;
                right: 126px;
                bottom:-60px;
                border-radius:5px;
                z-index:7;
                width: 602px;
                height: 500px;
                
            }
            .cls3{
                position: absolute;
                bottom:-30px;
                background: white;
                right:10px;
                height:230px;
                border-radius: 5px;
                width:370px;
                b0x-shadow:  0 30px 50px 0 rgba(28,102,254,0.4);
                z-index:9;
            }
        }
      
     }
     .solutions{
         height: 300px;
         width: 100%;
         background-color: #E5E5E5;
        //  border: 1px solid #011166;
         display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
         .Text{
             width: 100%;
             background-color: #E5E5E5;
            //  border-bottom: 1px solid #011166;
             color: blue;
             h3{
                 color: #011166;
             }
         }
         .slides{
            width: 80%;
    height: 446px;
    position: relative;
    text-align: center;
    overflow: hidden;
         }
     }
     .platform{
        display:flex;
        flex-direction: column;
        width:100%;
        padding-top: 30px;
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
        padding-bottom: 30px;
    }
    .testimonials{
        width: 100%;
        height: 400px;
        padding:0 100px;
        background: #e2e6fc;
    }
    .accred{
        width: 100%;
        height: 300px;
        padding:0 100px;
        background: #e2e6fc;

    }
    .customers{
        width: 100%;
        height: 397pxs;
        padding:100px 100px;
        background: #e2e6fc;

    }

`
export default Home;
