import React from 'react';
import styled from 'styled-components';
const Team = () => {
const board = [
    {
        img: "",
        name: "Aderinola Talabi"
    },
    {
        img:"",
        name:"Gabriel Okonkwo",
    },
    {
        img: "",
        name: "Gbemi Ladiran"
    },{
        img:"",
        name: "Mahandra Waman"
    },{
        img:"",
        name: "Wonuola Talabi"
    }
]

const managers = [{},{},{},{},{},{},{},{}]
    return (
        <Team.Wrapper>
            <section className='Manag-d'>
                <div className="man-img">
                    <img src='' alt='' />
                </div>
                <div className='man-text'>
                    <p>dddc</p>
                </div>
            </section>
            <section className="the-board">
                <div className='board-head'>
                   <h1>The Board</h1> 
                </div>
                <div className='board-img'>
                    {board.map(board =>{
                        return (<div className='boardee'>
                            <div className='boardee-img'><img src={board.img} alt={board.name} /></div>
                            <div className='boardee-text'>
                                <p>{board.name}</p>
                            </div></div> 
                        )
                    })}

                </div>
                
            </section>
            <hr />
            <section className='the-managed' >
                <div className='the-managed-header'>
                    <h1>The Management</h1>
                </div>
                <div className='managers'>
                        {
                            managers.map(manager => {
                                return (
                                    <div>
                                        <img src={manager.img} alt={manager.name} /></div>
                                )
                            })
                        }
                </div>
            </section>
        </Team.Wrapper>
    );
}
Team.Wrapper = styled.div`
background: white;

.Manag-d{
    display: flex;
    flex-direction: row;
    height: 400px;
    background: rgba(32,46,121,0.86);
    .man-img {
        width: 30%;
        height: 100%;
        margin: 0 auto;
        background:rgba(26,102,254,0.85);
        img{
            border-radius: 50%;
            border: 4px solid red;
            height: 300px;
            
            width: 300px;            
        }
    }
    .man-text{
        width: 70%;
        height:400px;
        p{
            height: 100%;
            padding: 40px;
            border: 4px solid red;
        }
    }
}
hr {
    width: 80%;
    // height: 4px;
    margin-bottom: 9px;
    margin:  10px  auto;
    border: 1px solid #9EDEFA
}
.the-board{
    margin-top : 100px;
    height: 400px;
    width: 100%;
    h1{
        color:#011166;
        font-weight: 600;
        font-style: normal;
        // padding-left : 100px;
    }
    .board-head{
        width:90%;
        margin: 0 auto;
        padding-bottom: 40px;
    }
   .board-img{
        // background: red;
        width:90%;
        height: 300px;
        display: flex;
        margin: 0 auto;
        .boardee{
                display: flex;
                flex-direction: column;
                positon: relative;
                margin: 0 auto;
                width: 200px;
                height: 300px;
              
                   .boardee-img{
                       border: 2px solid blue;
                       border-radius: 50%;
                       width: 200px;
                       height: 200px;
                   }
                   .boardee-text{
                       text-align: center;
                     padding: 20px 0;
                    //   margin: 0 auto;
                   }
        }
        
    }
}
.the-managed {
    height: 400px;
    .the-managed-header{
        color:green;
        width: 90%;
        margin: 0 auto;
        padding-top: 40px;

        padding-bottom:40px;
    }
    .managers{
        width:90%;
        heigtht: 400px;
        
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        flex-wrap:wrap;
    margin: 0 auto;
    div{
        height: 300px;
        margin: 0 auto;
        // width: 20%;
        // margin: 10px;
        // background: yellow;
        img{
            border-radius:50%;
            border: 2px solid blue;

            height: 200px;
            width:200px;
        }
    }
} 
}
`
export default Team;
