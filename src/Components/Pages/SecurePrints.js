import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer'
import img1 from "../../assets/images/secure/secure1.png"
import img2 from "../../assets/images/secure/secure2.png"
// import img3 from "../../assets/images/secure/secure3.png"
// import img4 from "../../assets/images/secure/secure4.png"
// const content = `\"\2022\"`;
// import { NavLink } from 'react-router-dom'
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
            }
            p{
                ul{
                    color:#011166;
                    // background: green;
                    list-style: none;
                    // display: list-item;
                    margin-left: 1em;
                }
                ul li::before{
                    color: #1A66FE;
                }
            }
        }
    }
`

export default SecurePrints
