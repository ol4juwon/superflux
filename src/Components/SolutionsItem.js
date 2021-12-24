import React from 'react';
import styled from 'styled-components';
const Solutionsitem = (props) => {
    const { img, h3, p} = props.details
    return (
        <Solutionsitem.Wrapper>
      <div className='card'>
      <div className='images'>
<img src={img} alt=""/>
        </div> 
        <div className='texts'>
            <h3>{h3}</h3>
            <p>{p}</p>
        </div>     
          
          </div>        
        </Solutionsitem.Wrapper>
    );
}

Solutionsitem.Wrapper = styled.div`
width: 410px;
// height: 200px;
// border: 2px solid green;
border-radius: 10px;
display: flex;
filter: drop-shadow(0px 4px 16px rgba(144, 153, 200, 0.24));
flex-direction: column wrap;
margin: 0 20px;
background: transparent !important;
.images{
    width: 200px;
    height: 200px;
    img{
        width: 200px;
        height: 200px;
    }
}
.texts{
    width: 200px;
    height: 200px;
    color: #011166;
    // border: 2px solid blue;
}
.card{
    display: flex;
    flex-direction: row;
}
@media only screen and (max-width: 420px){
width: 100%;
    display: flex;
flex-direction:column;
// height: 400px;
float: right;
.card{
    display:flex;
    flex-direction:column;
}

}
`

export default Solutionsitem;
