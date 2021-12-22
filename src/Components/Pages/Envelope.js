import React from 'react'
import styled from 'styled-components'
import Envd from '../../assets/images/env/IMG_9187 1.png'
const Envelope = () => {
    return (
        <Envelope.Wrapper>
            <div className="env--heading">
                <h1>Envelope Product<span className='underline'>ion</span></h1>
            </div>
            <div className="env--content" >
                <div className='cont--img'>
                    <img src={Envd} alt="envelope" />
                </div>
                <div className='Text'>
                    <p>We produce high-quality envelopes within a short turnaround time. Our products include:
                        <ul>
                            <li>
                                Envelopes of all types: Branded and Plain
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
        </Envelope.Wrapper>
    )
}
Envelope.Wrapper = styled.div`
width: 100%;
display:flex;
flex-direction: column;

.env--heading{
    padding: 30px 150px;
    h1{
        font-family:'Poppins';
        font-size: 32px;
        line-height: 40px;
        font-style: normal;
        font-weight: 600;
    }
}
.env--content{
    width: 100%;
        height:100%;
        display:flex;
        padding: 60px 0;
        flex-direction: row;
    .cont--img {
        display: flex;
        justify-content: right;
        width: 50%;
        height: 100%;
        img{
            border-radius: 20px;
            padding-right: 20px;
        height: 372px;}
       
    }
    .Text{
        p{
        color: #011166;
        font-size:16px;
        line-height:30px;
        ul{
            padding: 10px;
        }
        }
    }
}

`

export default Envelope
