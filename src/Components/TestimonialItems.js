import React from 'react';
import styled from 'styled-components';
const Testimonialitems = (props) => {
    console.log("",props.testimony)
    return (
        <Testimonialitems.Wrapper>
            <div className='img'>
                <img src={props.testimony.img} alt='' />
            </div>
        </Testimonialitems.Wrapper>
    );
}
Testimonialitems.Wrapper = styled.div`
width: 60%;
height:400px;
// margin: 0 20px;
background-color: #fff;
.img{
    width: 100%;
    height:200px;
    img{
        width: 100%;
    }
}

`
export default Testimonialitems;
