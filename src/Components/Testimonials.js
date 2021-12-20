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
        name: "",
        testimony: "",
    },
    {
        img : Lifebank,
        imgAlt: "lifebank",
        name: "",
        testimony: "",
    },
    {
        img : Arm,
        imgAlt: "arm",
        name: "",
        testimony: "",
    },
    {
        img : LoveLagos,
        imgAlt: "Love Lagos",
        name: "",
        testimony: "",
    },
    {
        img : "",
        imgAlt: "",
        name: "",
        testimony: "",
    }


]
    return (
        <Testimonials.Wrapper>
            <div className='hrader'>
                <h1>Testimonials</h1>
            </div>
            <div className='testimony'>
                {   testimonies.map((testimony, index) => {
                    return <Testimonialitems key={index} testimony={testimony} />
                })

                }                
            </div>
        </Testimonials.Wrapper>
    );
}
Testimonials.Wrapper = styled.div`
height: 100%;
width: 100%;
padding-top: 50px;
display: flex;
flex-direction: column;
.hrader{
    width: 100%;
    height: auto;
    h1{
        font-size: 40px;
        font-weight: bold;
        color: #011166;
        text-align: center;
    }
}
.testimony{
    display: grid;
    grid-template-columns: auto auto auto auto auto;
}
`
export default Testimonials;
