import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer'
import img1 from "../../assets/images/thermal/thermal1.png"
import img2 from "../../assets/images/thermal/thermal2.png"
import img3 from "../../assets/images/thermal/thermal3.png"
const Thermal = () => {
    return (
        <Thermal.Wrapper>
            <div className='secure--heading'>
                <h1>Thermal/POS Roll product<span className='underline'>ion</span></h1>
                <img src={img1} alt="" />
                <p>We are a trusted local manufacturer of high quality thermal roll which is durable, affordable and ensures faster printing. We provide customization solution for the pre-printing and supply of Automated Teller Machine (ATM) and Point of Sale (POS) printer receipts deployable by tellers and ATM machines. This involves the pre-printing of your organization logo on Thermal Paper Roll receipt also known as transaction slip. The back of this receipt can also be used to advertise your products or information concerning your business including feedback and emergency or assistance call numbers. We are a wholesale supplier of thermal rolls.</p>
            </div>
            {/* <div className='embedded'>
                <h3>Benefits of customised rolls</h3>
                <img src={img2} alt=''/>
                <p>
                    <ul>
                        <li>CBS1 Watermark Paper</li>
                        <li>Hidden Message Technology</li>
                        <li>Tri-Thermo chromic Ink</li>
                        <li>Solvent Sensitive Ink</li>
                        <li>Invisible Ultra Violet Ink</li>
                        <li>Micro Text</li>
                        <li>Aqua Fugitive Ink</li>
                        <li>Visible and Invisible Numbering</li>
                        <li>Guilloche and Numismatic Design</li>
                        <li>Hologram</li>
                        <li>QR Code</li>
                    </ul>
                </p>
            </div> */}
            <div className='secure--Types'>
                <div className='secure1'>
                    <img src={img2} alt='' />
                    <div className='secureNums'>
                        <h3>Benefits of customised rolls</h3>
                    </div>
                    <ul>
                        <li>Branding at minimal cost.</li>
                        <li>Product adverts to users.</li>
                        <li>Total elimination of deposit slip printing cost; all transaction details can be printed through POS printers using pre-printed rolls.
</li>
                        <li>Increased cashier productivity; quick delivery via POS printer.</li>
                        <li>Reduced customer transaction time; no delay in banking hall.</li>
                        <li>All transaction documentations are customized; ATM and Tellers issue same customized document.</li>
                    </ul>
                </div>
                <div className='secure2' >
                    <img src={img3} alt="" />
                    <div className='secureNums'>
                        <h3>Our range of products</h3>
                    </div>
                    <ul >
                        <li>Plain thermal rolls.</li>
                        <li>80mm*80mm.</li>
                        <li>57mm*40mm.</li>
                        <li>80mm*120mm.</li>
                        <li>80mm*180mm.
</li>
                    </ul>
                    <div className='secureNums'>
                        <h3>Our range of products</h3>
                    </div>
                    <ul >
                        <li>Plain thermal rolls.</li>
                        <li>Revenue documents</li>
                    </ul>
                </div>
                
            </div>

            
            <Footer />
        </Thermal.Wrapper>
    )
}

Thermal.Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
   
    .secure--heading{
        width: 100%;
        color: #011166;
        h1{
            font-size: 24px;
            line-height: 32px;
            padding: 20px 0px;
            padding-left: 10px;
        }
        img{
            padding-left: 10px;
             margin: 0 auto;
        }
        p{
            padding: 20px;
            font-size: 16px;
            line-height: 30px;
            font-weight: 300;
            text-align: left;
        }
    }
    @media only screen and (max-width: 600px){
        .embedded {
            h3{ 
                text-decoration: underline;
                color: #1A66FE;
                padding: 10px 20px;
            }
            p{
                ul{
                    color:#011166;
                    // background: green;
                    list-style: disc;
                    // display: list-item;
                    margin-left: 3em;
                }
                ul li::before{
                    color: #1A66FE;
                }
            }
        }
        .secure--Types{
             .secure1,.secure3, .secure5{
                 background:#F4F8FC;
                 img{
                    width: 400px;
                    height: 400px;
                }
                .secureNums{
                width: 100%;
                display: flex;
                flex-direction: row;
                    h3{
                        padding: 10px 20px;
                        color: #1A66FE;
                    }
                    
                }
            }
            .secure2, .secure4{
                img{
                    width: 400px;
                    height: 400px;
                }
                .secureNums{
                    width: 100%;
                    display: flex;
                    // margin-right: 20px;
                    flex-direction: row;
                    
                        h3{
                            padding: 10px 10px 10px 20px;
                            color: #1A66FE;
                        }
                }
                p{
                        padding:20px;
                        color: #011166;
                    }
            }
            .secureNums span:nth-child(odd){
                    margin-left: 15px;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    padding: 1rem;
                    background:#1A66FE;
                    color: white;
                    border-radius: 10px;
                
            }
            // .secureNums:nth-child(even){
            //     margin-left: 25px;
            //     border: 2px solid red;
            // }
            .secure1, .secure3, .secure5{
                ul li{
                    list-style-type: disc;
                    // color: #1A66FE;
                    margin-left: 65px;
                    display: list-item;
                    list-style-position: inside;
                }
                ul li::before{
                    color: #1A66FE;
                }

            }
            .secure2, .secure4{
                ul li{
                    list-style-type: disc;
                    color: #1A66FE;
                    // margin-left: 65px;
                    display: list-item;
                    list-style-position: inside;
                    text-align: left;
                    margin-left: 40px;
                }
            }
        }
    }
`

export default Thermal
