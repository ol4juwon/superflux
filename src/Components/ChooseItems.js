import React from 'react';
import styled from 'styled-components';
const Chooseitems = (props) => {
    return (
        <Chooseitems.Wrapper>
            <div>
                <img src={props.reason.logo} alt="ola" />
                {console.log(props)}
            </div>
            <div>
               <p> {props.reason.text}</p>
                </div>
        </Chooseitems.Wrapper>
    );
}
Chooseitems.Wrapper = styled.div`

width: 290px;
height: 150px;
border-radius: 4px;
border: 1px solid #E5E5E5;
box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
background-color: #fff;
margin:5px;
div{
    display: flex;
    flex-direction: column;
    img{
        width: 50px;
        height: 50px;
        border: 1px solid #E5E5E5;
        align-self: right;
    }
    p{
        font-size: 14px;
        margin-top: 10px;
        margin-left: 10px;
    }
}
`
export default Chooseitems;
