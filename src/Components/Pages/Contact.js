import React from 'react';
import styled from "styled-components"
const Contact = () => {
    return (
        <Contact.Wrapper>
            <section className='content'>
            <div className='cont-heading' ><h1>Contact Us</h1> </div>
            <div className='sub-cont'>
                <div className="contact-deets">
                     <h2>Office Address</h2>
                    <div>
                   
                    <p>Lagos Office</p>
                    <p>3 Vori Close, Off Acme Road, Off Agindigbi Ikeja, Lagos state.</p>
                    <span>+234 12911816</span>
                    </div>
                    <div>
                    <p>Abuja Office</p>
                    <p>Suit 1, Yobe Investment House, Plot 1332 Ralph Shodeinde street, Central Business District, Abuja, Nigeria</p>
                    <span>+234 803717 9098</span>
                    </div>
                    <h2>Email</h2>
                    <p>info@superfluxnigeria.com</p>
                </div>
                <div className='contact-form'>
                    <form className='kontact'>
                        <div className='form-row'>
                        <div><label htmlFor='first_name'>First Name</label>
                        <input type={"text"} name='first_name'/></div>
                        <div><label htmlFor='last_name'>Last Name</label>
                        <input type={"text"} name='lastName'/></div></div>
                        <div className='form-row'>
                            <div>
                                <label htmlFor='email'>Email Address</label>
                                <input name='email' type="email" />
                            </div>
                        </div>
                        <div className='form-row'>
                            <div><label htmlFor='message'>Message</label>
                            <textarea cols={10} rows={6} name='message' />
                            </div>
                        </div>
                        <div>
                            <input type={"submit"} name="submit" value={"Send message"} />
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
            border:2px solid  blue;
            height:100%;
        }
        .contact-form{
            height: 120%;
           
            justify-self:center;
            padding-bottom: 104px;
            .kontact{
                height:130%;
                border-radius: 24px;
                margin-right: 100px;
                border:2px solid  red;
            }
        }
    }

}
`
export default Contact;
