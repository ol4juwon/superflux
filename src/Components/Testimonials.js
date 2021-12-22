import React from 'react';
import styled from 'styled-components';
import Testimonialitems from './TestimonialItems';
import Firstbank from '../assets/images/superflux/home/testimony/Fbn.png';
import Lifebank from '../assets/images/superflux/home/testimony/lifebank.png';
import Arm from '../assets/images/superflux/home/testimony/arm.png';
import LoveLagos from '../assets/images/superflux/home/testimony/lovelagos.png';


const Testimonials = () => {
    const testimonies =[ {
        img : Firstbank,
        imgAlt: "First bank",
        name: "Kehinde Adelowo",
        position: "Head of Cheque Processing Management,First Bank of Nigeria",
        testimony: "The service delivery is excellent." 
        +"The proven track record of compliance to regulatory standard is fantastic. Years of experience in the printing industry coupled with quality & efficiency of the staff is highly commendable.",
    },
    {
        img : Lifebank,
        imgAlt: "lifebank",
        name: "Bukola Ogunfayo",
        position: "MD/CEO, Life Bank",
        testimony: "We've been able to scale the production of our offers from 30 generic offers to about 110 tailored offers though Superflux",
    },
    {
        img : Arm,
        imgAlt: "arm",
        name: "Ada Ebeano",
        position: "MD, ARM Pensions",
        testimony: "We've been able to scale the production of our offers from 30 generic offers to about 110 tailored offers though Superflux",
    },
    {
        img : LoveLagos,
        imgAlt: "Love Lagos",
        name: "Muktar Musa",
        position: "CEO,  Love Lagos",
        testimony: "We've been able to scale the production of our offers from 30 generic offers to about 110 tailored offers though Superflux",
    },
  


]
    return (
        <Testimonials.Wrapper>
            <div className='hrader'>
                <h1>Testimonials</h1>
            </div>
            <div className='tes5timony'>
                {   testimonies.map((testimony, index) => {
                    return <Testimonialitems key={index} testimony={testimony} />
                })

                }                
            </div>
            <div className='dotts'>

            </div>
        </Testimonials.Wrapper>
    );
}
Testimonials.Wrapper = styled.div`
height: 100%;
background: #E2E6FC;
width: 100%;
padding-bottom: 50px;
display: flex;
flex-direction: column;
.hrader{
    width: 100%;
   display:flex;
    height: auto;
    h1{
        width: 100%;
       margin: 30px auto;
        font-size: 40px;
        font-weight: bold;
        color: #011166;
        text-align: center;
    }
}
.tes5timony{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: auto;
    height:auto;
    box-sizing: border-box;
    margin: 10px auto;

    // margin-bottom: 19px;
    // background: green;
    // grid-gap: 10px;
    // padding-bottom: 50px;
}
.dotts{
    // height: 100px;
    // background: yellow;
}
`
export default Testimonials;
