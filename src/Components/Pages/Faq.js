import React, { useEffect } from 'react';
import {Helmet }  from 'react-helmet'
import styled from 'styled-components';
import Footer from '../Footer';
const Faq = () => {
    const faqs = [
            {         
            question:"What Does NICPAS Stand For ?",
            answer:"Nigeria Cheque Printers Accreditation Scheme."
            },
            {
                question:"Are you a certified cheque Printer?",
                answer:"Nigeria Cheque Printers Accreditation Scheme."
            },
            {
                question:"What Does MICR Stand For?",
                answer:""
            },
            {
                question:"What colour background can I have?",
                answer:""
            },
            {
                question:"What is OCR?",
                answer:""
            },
            {         
                question:"How do I know when to reorder?",
                answer:""
                },
                {
                    question:"What Does the CODE LINE Contain?",
                    answer:""
                },
                {
                    question:"How long does it take for the documents be delivered?",
                    answer:""
                },
                {
                    question:"What is the Standard Size of a Corporate Cheque?",
                    answer:""
                },
                {
                    question:"Does Superflux provide a design/proof service?",
                    answer:""
                },
                {         
                    question:"What is the Standard Size of an Individual Cheque?",
                    answer:""
                    },
                    {
                        question:"What security features will my cheques have to prevent fraud?",
                        answer:""
                    },
                    {
                        question:"What is the Standard Size of a MICR Line?",
                        answer:""
                    },
                    {
                        question:"What is \"dropout\"?",
                        answer:""
                    }
]
useEffect(() => {
    <Helmet>
    <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    </Helmet>
} , [])
    
    return (
        <Faq.Wrapper>
           
            <div className='faq-Header'>
                <h1>Frequently Asked Questi<span className="underline">ons</span> </h1>
            </div>
            <div className='faq-text'>
                    <p>Your questions answered</p>
            </div>
            <div className='faq-content'>
                        <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            
                            {
                                faqs.map((faq,index)=>{
                                    return(
                                        <div key={index} className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingOne">
                                                <h4 className="panel-title">
                                                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    {faq.question}
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                                <div className="panel-body">
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            
                            </div>
                    </div>
                </div>
                </div>
            </div>
            <div className='extra--question'>
                <div className="heading">
                    <h3>Still have questions?</h3>
                </div>
                <div className="forms">
                    <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
                    <textarea className="form-control" rows={10} aria-label="With textarea"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                 </form> </div>
              
            </div>
            <Footer/>
        </Faq.Wrapper>
    );
}

Faq.Wrapper = styled.div`
width: 100%;
.faq-Header{
    width: 100%;
    height: 100px;
    padding: 20px;
    text-align: center;
}

.faq-text{
    width: 100%;
    height: 100px;
    padding: 20px;
    text-align: center;
}
.extra--question{
    width: 100%;
    background-color: #F4F8FC;
    .heading{
        width: 100%;
        height: 100px;
        padding: 20px;
        text-align: center;

    }
    .forms{
        width: 30%;
        margin: 0 auto;
        padding: 20px;
        input{
            background: #E1EEFB;
        }
        textarea{
            background: #E1EEFB;
        }
    }
}
.faq-content{
    font-family: Poppins;

a:hover,a:focus{
    text-decoration: none;
    outline: none;
}
// #accordion:before{
//     content: "";
//     width: 1px;
//     height: 80%;
//     background: #550527;
//     position: absolute;
//     top: 20px;
//     left: 24px;
//     bottom: 20px;
// }
#accordion .panel{
    border: none;
    border-radius: 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    margin: 0 0 12px 50px;
    position: relative;
}
#accordion .panel:before{
    content: "";
    width: 2px;
    height: 100%;
    // background: linear-gradient(to bottom, #688e26 0%,#ff816a 100%);
    position: absolute;
    top: 0;
    left: -2px;
}
#accordion .panel-heading{
    padding: 0;
    background: #fff;
    position: relative;
}
// #accordion .panel-heading:before{
//     content: "";
//     width: 15px;
//     height: 15px;
//     border-radius: 50px;
//     background: #fff;
//     border: 1px solid #550527;
//     position: absolute;
//     top: 50%;
//     left: -48px;
//     transform: translateY(-50%);
// }
#accordion .panel-title a{
    display: block;
    padding: 15px 55px 15px 30px;
    font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
    // font-size: 20px;
    // font-weight: 600;
    color: #011166;
    border: none;
    margin: 0;
    position: relative;
}
#accordion .panel-title a:before,
#accordion .panel-title a.collapsed:before{
    content: "\f068";
    // font-family: "Font Awesome 5 Free";
    font-weight: 900;
    width: 25px;
    height: 25px;
    line-height: 25px;
    border-radius: 50%;
    font-size: 15px;
    font-weight: normal;
    color: #1A66FE;
    text-align: center;
    border: 1px solid #1A66FE;
    position: absolute;
    top: 50%;
    right: 25px;
    transform: translateY(-50%);
    transition: all 0.5s ease 0s;
}
#accordion .panel-title a.collapsed:before{ content: "\f067"; }
#accordion .panel-body{
    width: 100%;
    padding: 0 30px 15px;
    border: none;
    font-size: 14px;
    color: #1A66FE;
    line-height: 28px;
}}
@media only screen and (max-width: 600px){
    .extra--question{
        width: 100%;
        background-color: #F4F8FC;
        .heading{
            width: 100%;
            height: 100px;
            padding: 20px;
            text-align: center;
    
        }
        .forms{
            width: 100%;
            margin: 0 auto;
            padding: 20px;
            input{
                background: #E1EEFB;
            }
            textarea{
                background: #E1EEFB;
            }
        }
    }
}
`
export default Faq;
