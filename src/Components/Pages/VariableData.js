import React from 'react'
import styled from 'styled-components'
import VData from '../../assets/images/Variable/IMG_9614 1.png'; 
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
                    </p>
                    <ul>
                        <li>Statements (RSA, Account Statement etc.) </li>
                        <li>Bills (Land Use Charge)</li>
                        <li>E- Advice Slip</li>
                        <li>Share Certificate</li>
                    </ul>
                    </div>
                </div>
        </VariableData.Wrapper> )
}

VariableData.Wrapper = styled.div`
height: 600px;
width: 100%;
display: flex;
flex-direction: column;
    .variable--heading{
        width: 100%;
        padding: 60px 150px;
        border: 2px solid red;
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
        flex-direction: row;
        border: 2px solid green;
        .img{ 
            display: flex;
            justify-itens: right;
            width: 50%;
            height: 100%;
            border: 2px solid red;
            // padding-right: 50px;
            img{
            height: 200px;
            justify-self: right;
        }
        .vcontent{
            width:50%;
            height:100%;
            border: 2px solid red;
            padding: 30px;
            p{
                padding: 10px;
            }
        }
    }
    }
`
export default VariableData;