import React from 'react';
import styled from 'styled-components';
const Testimonialitems = (props) => {
    // console.log("",props.testimony)
    return (
        <Testimonialitems.Wrapper>
            <div className="card" >
  <img className="card-img-top" src={props.testimony.img} alt="Card cap"/>
    <div className="card-body">
      <h3 className='card-title'>{props.testimony.name}</h3>
                    <i>{props.testimony.position}</i>
                    <p>{props.testimony.testimony}</p>  
    </div>

</div>
          
                
    
        </Testimonialitems.Wrapper>
    );
}
Testimonialitems.Wrapper = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
height: auto;
//   transition: 0.3s;
  margin: 0 40px;
  margin-bottom: 10px;
  width: 18rem;   color:#011166;
//     .card--img{
//         width:18rem;
//         // height: 200px;
//         align-content:center;
//         img{
//             width: 100%;
//             // justify-content:center;
//             // height: 200px;
//         }
//     }
//     .testimone{
//         width: 18rem;;
//         // padding-bottom: 10px;
//         background: white;
//      
//         padding:0 5px;
//         text-align: center;
//         h3{
//             font-size: 16px;
//             line-height: 23px;
//         }
//         i{
//             font-size: 8px;
//             line-height: 12px;
//         }
//         p{
//             font-size:12px;
//             line-height: 20px;
//         }
//     }
    @media only screen and (max-width: 768px) {
    }
`
export default Testimonialitems;
