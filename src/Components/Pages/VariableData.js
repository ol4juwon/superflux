import React from 'react'
import styled from 'styled-components'
import VData from '../../assets/images/Variable/IMG_9614 1.png'; 
import Footer from '../Footer';
const VariableData = () => {
    return (
        <VariableData.Wrapper>
                <div className='variable--heading'>
                    <h1>Variable Data Pri<span className='underline'>nts</span></h1>
                </div>
                <div className='variable--content'>
                    <div className='img'>
                        <img src={VData} alt="" />
                    </div>
                    <div className='vcontent'>
                    <p>We print variable information on documents which makes it personal to the individual. We also personalize transactional documents such as bills, statements, vouchers, share certificates, 
                    targeted direct mail pieces and direct marketing. Our products include:
                    <ul>
                        <li>Statements (RSA, Account Statement etc.) </li>
                        <li>Bills (Land Use Charge)</li>
                        <li>E- Advice Slip</li>
                        <li>Share Certificate</li>
                    </ul>
                    </p>
                   
                    </div>
                </div>
                <Footer />
        </VariableData.Wrapper> )
}

VariableData.Wrapper = styled.div`
// height: 600px;
width: 100%;
display: flex;
flex-direction: column;
    .variable--heading{
        width: 100%;
        padding: 60px 150px;
        text-align: left;
        h1{
            color: #011166;
            font-size: 32px;
            line-height: 40px;
            font-style: normal;
            font-weight: 600;
            font-family: Poppins;
        }
    }
    .variable--content{
        width: 100%;
        height:100%;
        display:flex;
        padding: 60px 0;
        flex-direction: row;
        // border: 2px solid green;
        .img{ 
            display: flex;
            justify-content: right;
            width: 50%;
            height: 100%;
            // padding-right: 50px;
            img{
                border-radius: 20px;
                padding-right: 10px;
            height: 372px;}
            // justify-self: right;
        }
        .vcontent{
            width:50%;
            height:100%;
            // padding: 30px;
            p{
                padding-left: 10px;
                padding-right: 100px;
                font-size:16px;
                font-weight: 300;
                line-height:30px;
                color: #011166;
                ul{
                    padding-left: 20px; 
                }
            }
        }
    }
    }
    @media only screen and (max-width: 600px){
        display:flex;
        flex-direction: column;
        width: 100%;
        .variable--heading{
            width: 100%;
            padding: 20px 0px;
            display: flex;
            h1{font-size:24px;
            width: 100%;
            text-align: center;
        }}
        .variable--content{
            display: flex;
            flex-direction: column;
            // border: 2px solid red;
            width: 100%;
            .img{
                width: 100%;;
                // height:372px;
                justify-self: center;
                // border: 2px solid green;
                img{
                padding-right: 0px !important;
                width: 414px;
                height: 250px;
                }
                // height: 100%;
            }
            .vcontent{
                width: 100%;
                font-size: 16px;
                line-height: 28px;
                color: #011166;
                p{
                    padding: 15px;
                    text-align: left;
                }
            }
        }
    }
`
export default VariableData;