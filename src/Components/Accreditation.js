import React from 'react';
import styled from 'styled-components';
import CIPPON from '../assets/images/superflux/home/Accred/CIPPON.png'
import ISOLogo from '../assets/images/superflux/home/Accred/ISO.png'
import CBNLogo from '../assets/images/superflux/home/Accred/cbn.png'
const Accreditation = () => {
    return (
        <Accreditation.Wrapper>
             <div className='accred-text'>
                            <h3>Accreditation/Certificat<span className="underline">ion</span></h3>
            </div>
            <div className='accred-image'>
                <div>
                    <img src={CIPPON} alt="CIPPON"/>
                    <p>Chartered Institute of Professional Printers of Nigeria</p>
                </div>
                <div>
                    <img src={ISOLogo} alt="ISO"/>
                    <p>International Organization for Standardization</p>
                </div>
                <div>
                    <img src={CBNLogo} alt="Nigerian Cheque"/>
                    <p>Nigerian Cheque Printers Accreditation scheme</p>

                </div>
            </div>
        </Accreditation.Wrapper>
    );
}

Accreditation.Wrapper = styled.div`
width: 100%;
// height: 100%;
// margin: 100px;
background: white;
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
    width:80%;
    display: flex;
    flex-direction: row;
    // grid-template-columns: 1fr 1fr 1fr;
    // grid-gap: 40px;
    margin: 0 auto;
    margin-bottom: 20px;
    div{

       color: #011166;
        width : 400px;
        margin: 0px 10px;
    //     height: 150px;
    //     background: white;
        border-radius: 10px;
        padding: 0 100px;
        padding-left: 10px;
        border: 1px solid rgba(1, 17, 102, 0.2);
        box-shadow: 8px 4px 16px rgba(144,153,200, 0.24);
         img{
            // width: 50px;
            height: 50px;
            // border: 1px solid #011166;
            margin: 10px;
        }
    p{
            font-size: 14px;
            margin-bottom: 20px;
            margin-left: 20px;
        }
    }
}
@media only screen and (max-witdh: 420){
    .accred-text{
        // border: 2px solid yellow;
    }
    .accred-image{
        // border: 2px solid red;
        display: flex;
        // grid-template-columns:  1fr;
        flex-direction: column;
        width: 100%;
        div{
            width: 380px;
            margin: 20px 20px;
            border: 1px solid rgba(1, 17, 102, 0.2);
            box-sizing: border-box;
            /* try-w */
            
            box-shadow: 0px 4px 16px rgba(144, 153, 200, 0.24);
            border-radius: 16px;
            img{
                
                margin: 30px;

            }
            p{
                width:100%;
                font-size: 14px;
                color: #011166;
                padding 2px 39px;
            }
        }
    }
}
@media only screen and (max-width: 728px){
    .accred-text{
        // border: 2px solid yellow;
    }
    .accred-image{
        display: flex;
        flex-direction: column;
        border: 2px solid red;
        div{
            width: 300px;
            margin: 20px 20px;
            border: 1px solid rgba(1, 17, 102, 0.2);
            box-sizing: border-box;
            // border: 2px solid red;
            /* try-w */
            
            box-shadow: 0px 4px 16px rgba(144, 153, 200, 0.24);
            border-radius: 16px;
            img{
                
                margin: 30px;

            }
            p{
                width:100%;
                font-size: 14px;
                color: #011166;
                padding 2px 39px;
            }
        }
    }
}
`

export default Accreditation;
