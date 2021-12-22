import React from 'react';
import styled from 'styled-components';
const Testimonialitems = (props) => {
    // console.log("",props.testimony)
    return (
        <Testimonialitems.Wrapper>
            <div className='card--img'>
            <img src={props.testimony.img} alt='' />
      
            </div>
                
            <div className="testimone">
                    <h3>{props.testimony.name}</h3>
                    <i>{props.testimony.position}</i>
                    <p>{props.testimony.testimony}</p>
            </div>
        </Testimonialitems.Wrapper>
    );
}
Testimonialitems.Wrapper = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin: 0 40px;
  margin-bottom: 10px;
  width: 200px;
    .card--img{
        width:200px;
        // height: 200px;
        align-content:center;
        img{
            width: 100%;
            // justify-content:center;
            // height: 200px;
        }
    }
    .testimone{
        width: 200px;
        // padding-bottom: 10px;
        background: white;
        color:#011166;
        padding:0 5px;
        text-align: center;
        h3{
            font-size: 16px;
            line-height: 23px;
        }
        i{
            font-size: 8px;
            line-height: 12px;
        }
        p{
            font-size:12px;
            line-height: 20px;
        }
    }
`
export default Testimonialitems;
