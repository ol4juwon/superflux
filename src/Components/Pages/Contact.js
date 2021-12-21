import React from 'react';
import styled from "styled-components"
const Contact = () => {
    return (
        <Contact.Wrapper>
            <section className='content'>
            <div className='cont-heading' ><h1>Contact <span className='underline'>Us</span></h1> </div>
            <div className='sub-cont'>
                <div className="contact-deets">
                     <h2>Office Address</h2>
                    <div>
                   
                    <h4>Lagos Office</h4>
                    <p>3 Vori Close, Off Acme Road, Off Agindigbi Ikeja, Lagos state.</p>
                    <span>+234 12911816</span>
                    </div>
                    <div>
                    <h4>Abuja Office</h4>
                    <p>Suit 1, Yobe Investment House, Plot 1332 Ralph Shodeinde street, Central Business District, Abuja, Nigeria</p>
                    <span>+234 803717 9098</span>
                    </div>
                    <h2>Email</h2>
                    <p>info@superfluxnigeria.com</p>
                </div>
                <div className='contact-form'>
                    <form className='kontact'>
                        <div className='form-row'>
                        <div className='inputss'><label htmlFor='first_name'>First Name</label>
                        <input type={"text"} name='first_name'/></div>
                        <div className='inputss'><label htmlFor='last_name'>Last Name</label>
                        <input type={"text"} name='lastName'/></div></div>
                        <div className='form-row'>
                            <div className='inputss'>
                                <label htmlFor='email'>Email Address</label>
                                <input name='email' type="email" />
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='inputss'><label htmlFor='message'>Message</label>
                            <input type={"text"} name='message' />
                            </div>
                        </div>
                        <div>
                            <button >Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
            </section>
            
        </Contact.Wrapper>
    );
}

Contact.Wrapper = styled.div`
height: 100vh;
.content{
    display:flex
    width: 100%;
    height:600px;
    padding: 100px 0;
    .cont-heading{
        text-align: center;
        margin-bottom: 40px;

    }
    .sub-cont{
        width: 100%;
        height:100%;
        display:flex;
        flex-direction: row;
        div{
            width: 50%;

        }
        .contact-deets{
            margin:50px 0px;
            // border:2px solid  blue;
            height:100%;
            background:#F4F8FC;
            padding-left: 120px;
            padding-top : 30px;
            h2{
                color:#1A66FE;
                padding-bottom: 10px;
                padding-top: 10px;
                font-size: 24px;
                font-style: poppins;
                font-weight: 300;
           
            }
            h4{
                color:#011166;
                padding:5px 0;
            }
            span{
                padding-bottom: 10px;
                color:#011166;
            }
        }
        .contact-form{
            height: 120%;
            justify-self:center;
            padding-bottom: 104px;
            .kontact{
                button{
                    background: #1A66FE;
                    height:45px;
                    padding: 12px 30px;
                    border-radius:   5px;
                    color:  white;
                }
                height:140%;
                border-radius: 24px;
                margin-right: 100px;
                padding: 50px;
                // border:2px solid  red;
               border: 1px solid rgba(1, 17, 102, 0.2);
                box-shadow:0px 4px 16px rgba(144, 153, 200, 0.24);
                input {
                    background:#F4F8FC;
                    outline: none !important;
                    textarea{
                        width: 100%;
                        resize: none;
                        white-space: nowrap;
                        overflow-x: scroll;
                    }

                }
                .form-row{
                    width: 100%;
                    display: flex;
                    margin-bottom: 30px;
                    .inputss{
                        display: flex;
                        outlint: none;
                        input{
                            border: 0;
                            outline: 0;
                            height: 60px;
                        }
                        
                        flex-direction: column ;
                        padding: 0 10px;
                        justify-content: space-between;
                        label{
                            padding-bottom:5px;

                        } 
                    }
                }
            }
        }
    }

}
`
export default Contact;
