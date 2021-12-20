import React from 'react';
import styled from 'styled-components';
import Chooseitems from './ChooseItems';
import starImg from '../assets/images/superflux/home/why choose/Vectorstar.png'
import headsetImg from '../assets/images/superflux/home/why choose/Vectorheadphone.png'
import fastforwdIcon from '../assets/images/superflux/home/why choose/Vectorff.png'
import handbulbIcon from '../assets/images/superflux/home/why choose/Grouphandbulb.png'
import bulb from '../assets/images/superflux/home/why choose/Vectorbulb.png'
import spanner from '../assets/images/superflux/home/why choose/Vectorspanner.png'
import load from '../assets/images/superflux/home/why choose/Vectorakabaru.png'
import note from '../assets/images/superflux/home/why choose/Vectornotepad.png'
import warehouse from  '../assets/images/superflux/home/why choose/Layer 3warehouse.png'
const Choose = () => {
    const reasons = [
        {
            logo:starImg,
            text: "We print security docuemnts on secure printers and provide a secure printing service for your business."
        },
        {
            logo:headsetImg,
            text: "We print hard cover books and provide a secure printing service for your business."
        },
        {
            logo: fastforwdIcon,
            text: "We print hard cover books and provide a secure printing service for your business."
        },
        {
            logo: handbulbIcon,
            text: "We print hard cover books and provide a secure printing service for your business."
        },
        {
            logo: bulb,
            text: "We print hard cover books and provide a secure printing service for your business."
        },
        {
            logo:spanner,
            text: "We print hard cover books and provide a secure printing service for your business."
        },
        {
            logo: load,
            text: "We print hard cover books and provide a secure printing service for your business."
        },
        {
            logo: note,
            text: "We print hard cover books and provide a secure printing service for your business."
        },
        {
            logo: warehouse,
            text: "We print hard cover books and provide a secure printing service for your business."
        }
    ]
    return (
        <Choose.Wrapper>
            <div className='Header'>
                <h1>
                    Why Choose Us</h1>
                <p>
                    Your one-stop security, commercial and variable data print shop.
                </p>
                    
            </div>
            <div className='content'>
                <Chooseitems reason={reasons[0]} />
                <Chooseitems reason={reasons[1]} />
                <Chooseitems reason={reasons[2]} />
                <Chooseitems reason={reasons[3]} />
                <Chooseitems reason={reasons[4]} />
                <Chooseitems reason={reasons[5]} />
                <Chooseitems reason={reasons[6]} />
                <Chooseitems reason={reasons[7]} />
                <Chooseitems reason={reasons[8]} />
            {/* {                reasons.map((reason,index) => {
            //    {console.log(reason)}
               <Chooseitems reason={reasons} />
        }
            )} */}
            
            {/* { <Chooseitems reason />} */}
            </div>
        </Choose.Wrapper>
    );
}

Choose.Wrapper = styled.div`
position: relative;
width: 80%;
.content{
display:grid;
grid-template-columns: repeat(4, 2fr);
grid-gap: 1rem;
color:black;
}
.Header{
    text-align:center;
    margin-bottom:2rem;
    color:black;
}
`
export default Choose;
