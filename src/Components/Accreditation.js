import React from 'react';
import styled from 'styled-components';
const Accreditation = () => {
    return (
        <Accreditation.Wrapper>
             <div className='accred-text'>
                            <h3>Accreditation/Certification</h3>
                            </div>
                    <div className='accred-image'>
                        <div>
                            <img src={""} alt="CIPPON"/>
                            <p>Chartered Institute of Professional Printers of Nigeria</p>
                        </div>
                        <div>
                            <img src={""} alt="ISO"/>
                            <p>Internationa Organization for Standardization</p>
                        </div>
                        <div>
                            <img src={""} alt="Nigerian Cheque"/>
                            <p>Nigerian Cheque Printers Accreditation scheme</p>

                        </div>
                    </div>
        </Accreditation.Wrapper>
    );
}

Accreditation.Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
.accred-text{
    width: 100%;
    height: auto;
    text-align: center;
    h3{ 
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
        margin-top: 30px;
        color: #011166;
        text-align: center;
    }
}
.accred-image{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
    div{

       color: #011166;
        width : 400px;
        height: 150px;
        background: white;
        border-radius: 10px;
         img{
            width: 100%;
            height: 100px;
            border: 1px solid #011166;
        }p{
            font-size: 14px;
            margin-bottom: 20px;
            margin-left: 20px;
        }
    }
}
`

export default Accreditation;
