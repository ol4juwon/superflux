import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer'
import img1 from "../../assets/images/secure/secure1.png"
import img2 from "../../assets/images/secure/secure2.png"
import img3 from "../../assets/images/secure/secure3.png"
import img4 from "../../assets/images/secure/secure4.png"
import img5 from "../../assets/images/secure/secure5.png"
import img6 from "../../assets/images/secure/Group 1.png"
import img7 from "../../assets/images/secure/Group 4.png"
const SecurePrints = () => {
    return (
        <SecurePrints.Wrapper>
            <div className='secure--heading'>
                <h1>Security pri<span className='underline'>nts</span></h1>
                <img src={img1} alt="" />
                <p>Superflux has over 22 years' experience in printing security documents including cheques, certificates, stamps, ballot papers, revenue receipts, vehicle licenses and other identity documents.
                    We ensure that your product and its authenticity can be indisputably trusted. This goal is achieved using innovative and sophisticated security printing solutions that enable us to embed a wide range of covert and overt security features that prevent the fraudulent reproduction or alteration of your sensitive and value documents.</p>
            </div>
            <div className='embedded'>
                <h3>Some of the security features embedded in our documents include:</h3>
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
            </div>
            <div className='secure--Types'>
                <div className='secure1'>
                    <img src={img3} alt='' />
                    <div className='secureNums'>
                        <span>1</span><h3>Financial Transactions</h3>
                    </div>
                    <ul>
                        <li>Cheque printing</li>
                        <li>Cheque personalisation</li>
                        <li>Forensic analysis</li>
                        <li>Secure pin mailers</li>
                    </ul>
                </div>
                <div className='secure2' dir="RTL">
                    <img src={img4} alt="" />
                    <div className='secureNums'>
                        <span>2</span><h3>Government</h3>
                    </div>
                    <ul >
                        <li>Election materials</li>
                        <li>Revenue documents</li>
                    </ul>
                </div>
                <div className='secure3'>
                    <img src={img5} alt='' />
                    <div className='secureNums'>
                        <span>3</span><h3>Education</h3>
                    </div>
                    <ul>
                        <li>Certificates</li>
                        <li>Transcripts</li>
                        <li>Examination papers</li>
                        <li>OMR sheets</li>
                    </ul>
                </div>
                <div className='secure4' dir="RTL">
                    <img src={img6} alt='' />
                    <div className='secureNums'>
                        <span>4</span><h3>Tickets</h3>
                    </div>
                    <p>
                    Superflux provides quality and secure Access Control Instruments for service sectors in the economy such as the transportation, entertainments and sports industries. This service could be delivered either in Automatic Fare Collection System (Electronic), or in secure paper transaction (for single usage or both integrated system). Our secure ticket solution includes printing and instant authentication, including track and trace in ensuring of transparent collection and identification.
                    </p>
                    <ul>
                        <li>Secure paper tickets </li>
                        <li>Electronic Ticketing and Access Control instruments</li>
                    </ul>
                </div>
                <div className='secure5'>
                <img src={img7} alt='' />
                <div className='secureNums'>
                        <span >5</span><h3>Entry management system</h3>
                    </div>
                    <ul>
                        <li>Meal tickets</li>
                        <li>Entry permits</li>
                        <li>Event tickets</li>
                        <li>Access stickers</li>
                    </ul>
                </div>
            </div>

            
            <Footer />
        </SecurePrints.Wrapper>
    )
}

SecurePrints.Wrapper = styled.div`
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
                .secureNums{
                width: 100%;
                display: flex;
                flex-direction: row;
                    h3{
                        padding: 10px 0px 10px 10px;
                        color: #1A66FE;
                    }
                }
            }
            .secure2, .secure4{
                .secureNums{
                    width: 100%;
                    display: flex;
                    margin-right: 20px;
                    flex-direction: row;
                    
                        h3{
                            padding: 10px 10px 10px 0px;
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
                    text-align: right;
                    margin-right: 65px;
                }
            }
        }
    }
`

export default SecurePrints
