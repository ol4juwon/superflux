import React from 'react';
import styled from 'styled-components';
const Testimonialitems = (props) => {
    console.log("",props.testimony)
    return (
        <Testimonialitems.Wrapper>
            <div className='card--img'>
            <img src={props.testimony.img} alt='' />
      
            </div>
                
            <div className="testimone">

            </div>
        </Testimonialitems.Wrapper>
    );
}
Testimonialitems.Wrapper = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 200px;
    .card--img{
        width:200px;
        height: 400px;
        align-content:center;
        img{
            width: 100%;
            // justify-content:center;
            // height: 200px;
        }
    }
`
export default Testimonialitems;
