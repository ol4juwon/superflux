import React from 'react';
import styled from 'styled-components';
const Solutionsitem = (props) => {
    const { img, h3, p} = props.details
    return (
        <Solutionsitem.Wrapper>
        <div>
<img src={img} alt=""/>
        </div> 
        <div>
            <h3>{h3}</h3>
            <p>{p}</p>
        </div>           
        </Solutionsitem.Wrapper>
    );
}

Solutionsitem.Wrapper = styled.div`
width: 500px;
height: 200px;
div{
    background: white;
    width: 50%;
    height: 100%;
}
`

export default Solutionsitem;
