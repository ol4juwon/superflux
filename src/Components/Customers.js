import React from 'react';
import styled from 'styled-components'
const Customers = () => {
        const slide = [
            {
                img:"",
                alt: ""
            },
            {
                img:"",
                alt: ""
            },
            {
                img:"",
                alt: ""
            },
            {
                img:"",
                alt: ""
            },
            {
                img:"",
                alt: ""
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
                                <div className='cardsss'> <img src={reet.img} alt={reet.alt} /></div>
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
`
export default Customers;
