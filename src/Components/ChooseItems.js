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
// border: 1px solid #E5E5E5;
box-shadow: 0px 4px 16px rgba(144, 153, 200, 0.24);
background-color: #fff;
margin:5px;
div{
    display: flex;
    flex-direction: column;
    img{
        width: 30px;
        height: 30px;
        // border: 1px solid #E5E5E5;
        margin: 15px;
        align-self: right;
    }
    p{
        font-size: 14px;
        margin: 10px;
        
    }
}
@media only screen and (max-width: 768px) {
    width: 250px;
    margin: 0 auto;

}
`
export default Chooseitems;
