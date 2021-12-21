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
bsckground: #E2E6FC;
width: 100%;
border: 1px solid red;
// padding-bottom: 50px;
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
.tes5timony{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 10px auto;
    // margin-bottom: 19px;
    // background: green;
    // grid-gap: 10px;
    // padding-bottom: 50px;
}
.dotts{
    height: 100px;
    // background: yellow;
}
`
export default Testimonials;
