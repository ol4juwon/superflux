import React from 'react';
import styled from 'styled-components';
const Testimonialitems = (props) => {
    console.log("",props.testimony)
    return (
        <Testimonialitems.Wrapper>
            <div className='imgur'>
                <img src={props.testimony.img} alt='' />
            </div>
            <div className="testimone">

            </div>
        </Testimonialitems.Wrapper>
    );
}
Testimonialitems.Wrapper = styled.div`
width: 60%;
height:400px;
margin: 0 40px;
// background-color: #fff;
// margin-bottom: 50px;
display: flex;
flex-direction: column;
.imgur{
    width: 180px;
    height:145px; 
   justify-self: center;
    img{
        width: 100%;
        height: auto;
        
    }
    
}
.testimone{
    width: 100%;
    height: 200px;
    background: red;
}

`
export default Testimonialitems;
