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
height: 230px;
float: left;
display: flex;
margin-left: 50px;
padding-bottom: 10px;
margin-bottom: 10px;
text-align: left;
.images{
    border-radius: 5px;
}
.texts{
    border-radius: 0px 4px 4px 0px;
    background: #FFFFFF;
}
h3{
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-top: 30px;
    color: #011166;
}
p{
    font-size: 14px;
    margin-bottom: 20px;
    color: #011166;
    margin-left: 20px;
    
}
`

export default Solutionsitem;
