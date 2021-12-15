import React from 'react';
import styled from 'styled-components';
import OUTERBOUND from '../../assets/images/outerbound.png'
import  Group1 from '../../assets/images/Rectangle 176.png'

import Group2 from '../../assets/images/Rectangle 177.png'
const Home = () => {
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
                             <img className='cls1' src={Group1} alt=''/>
                             <img className='cls2' src={Group2} alt=''/> 
                         <div className='cls3'></div>  
                        </div>
                      
                        
               </div>
               <div className='outerBound2'>   <img className='outerBound' src={OUTERBOUND} alt=''/></div>
               <div className='solutions'>
                <div><h3> Our Solutions</h3>
                <p>lorem ipsum </p></div>
                <div className='boxes'>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>
               </div>
               <div className='outerBound3'>   <img className='outerBound' src={OUTERBOUND} alt=''/></div>
               <div className='platform'>
                <div><h3> Why choose Superflux</h3></div>
                <div>slides</div>
               </div>
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
        background-color: white;
        height: 700px;
        display: flex;
        flex-direction: row no-wrap;
        color:blue;
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
            .cls2{
                position: absolute;
                bottom:-180px;
                width:500px;
                height:450px;
                img{
                box-shadow: 0 20px 20px 0 rgb(223,221,123);
                }
                right:0;
                z-index:10;
            }
            .cls1{
                position: absolute;
                right: 160px;
                bottom:20px;
                border-radius:5px;
                z-index:7;
                width: 500px;
                height: 450px;
                
            }
            .cls3{
                position: absolute;
                bottom:28px;
                background: white;
                right:70px;
                height:230px;
                border-radius: 5px;
                width:385px;
                b0x-shadow:  0 30px 50px 0 rgba(28,102,254,0.4);
                z-index:9;
            }
        }
      
     }
     .solutions{
         display:flex;
         flex-direction: column;
         width:100%;
         height:300px;
         align-items: center;
         justify-self:center;
         background: blue;
         h3{
             padding-top: 40px;
         }
         .boxes{
             with:100%;
             display: flex;
             flex-wrap: nowrap;
             overflow-x: hidden;
            //  grid-template-columns: repeat(4, auto);
            //  grid-gap: 100px;
             div{
                 flex: 0 0 auto;
                 width: 600px;
                 border: 1px solid #fff;
                 height: 250px;
                 margin: 100px;
             }
         }
     }
     .platform{
        display:flex;
        flex-direction: column;
        width:100%;
        height:600px;
        align-items: center;
        justify-self:center;
        background: white;
    }

`
export default Home;
