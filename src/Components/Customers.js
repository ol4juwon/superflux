import React from 'react';
import styled from 'styled-components'
import arm from '../assets/images/superflux/home/testimony/arm-cust.png'
import cbn from '../assets/images/superflux/home/testimony/Group 6.png'
import gtb from '../assets/images/superflux/home/testimony/Group 5.png'
import fidson from '../assets/images/superflux/home/testimony/fidson.png'
import courr from '../assets/images/superflux/home/testimony/courier.png'
import access from '../assets/images/superflux/home/testimony/access.png'
const Customers = () => {
        const slide = [
            {
                img:gtb,
                alt: "GTB"
            },
            {
                img:arm,
                alt: "arm insurance"
            },
            {
                img:cbn,
                alt: "central bank"
            },
            {
                img:fidson,
                alt: "fidson"
            },
            {
                img:courr,
                alt: "Courier"
            },
            {
                img:access,
                alt: "access bank"
            }

        ]
    return (
        <Customers.Wrapper>
            <section className="customers--heading">
                <h2> Customers that Trust <i className="underline">Us</i></h2>
            </section>
            <section className='customers--slides' >
                    {
                        slide.map(reet => {
                            return (
                                <div className='cardsss' key={reet.alt}> <img src={reet.img} alt={reet.alt} /></div>
                            )
                        })
                    }
            </section>
        </Customers.Wrapper>
    );
}
Customers.Wrapper = styled.div`
display: flex;
flex-direction: column;
width:100%;
    .customers--heading{
        display: flex;
        width: 100%;
        // border:2px solid red;
            h2{
                margin: 0 auto;
                font-size: 40px;
                line-height: 56px;
                color: #011166;
                text-align: center;
            }

}
.customers--slides{
    width: 100%;
    display: flex;
    .cardsss{
        width:200px;
        height:200px;
    }
}
@media only screen and (max-width: 420){
    .customers--slides{
        width: 100%;
        .cardsss{
            overflow:: scroll;
    }
}
}
`
export default Customers;
