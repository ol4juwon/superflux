import React from 'react';
import styled from 'styled-components';
const Solutionsitem = (props) => {
    const { img, h3, p} = props.details
    return (
        <Solutionsitem.Wrapper>
        <div className='images'>
<img src={img} alt=""/>
        </div> 
        <div className='texts'>
            <h3>{h3}</h3>
            <p>{p}</p>
        </div>           
        </Solutionsitem.Wrapper>
    );
}

Solutionsitem.Wrapper = styled.div`
width: 500px;
height: 250px;
margin: auto 100px;
padding: 5px;
z-index: 4;
box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
display: flex;
flex-direction: row;
img{
    width: 250px;
    background: #EFEFEF;
}
h3{
    color: #1A66FE;
}
p{
    color: #1A66FE;
}
.images{
    width: 250px;
    height: 200px;
}
.texts{
    width: 250px;
}
`

export default Solutionsitem;
