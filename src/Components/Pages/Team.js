import React from 'react';
import styled from 'styled-components';
import Aderinola from '../../assets/images/Team/aderinola.png'
import Mahan from "../../assets/images/Team/Mahan.png"
import Gbemi from "../../assets/images/Team/Gbemi.png"
import Toks from '../../assets/images/Team/Tokunbo.png'
import Gabriel from  '../../assets/images/Team/Gabriel Okonkwo.png'
import Wonu from "../../assets/images/Team/wonu.png"
import JOSEPHINE from '../../assets/images/Team/Josephine.png'
import chuka from "../../assets/images/Team/chuka.png"
import daramola from "../../assets/images/Team/daramola.png"
import Eucharia from "../../assets/images/Team/eucharia.png"
import Folorunsho from "../../assets/images/Team/folorunsho.png"
import Ireti from "../../assets/images/Team/iretiola.png"
import Footer from "../Footer"
const Team = () => {
const board = [
    {
        img: Aderinola,
        name: "Aderinola Talabi"
    },
    {
        img:Gabriel,
        name:"Gabriel Okonkwo",
    },
    {
        img: Gbemi,
        name: "Gbemi Ladiran"
    },{
        img:Mahan,
        name: "Mahendra Waman"
    },{
        img:Wonu,
        name: "Wonuola Talabi"
    }
]

const managers = [{    img: Gabriel,name: "Gabriel Okonkwo",position: "Managing Director"},
{img: Mahan, name: "Mahendra Waman", position: "Director Of Operations"},
{img:JOSEPHINE, name: "Josephine Olomu", position:"Regional Director,Abuja and North"},
{img:chuka, name: "Chuka Ohajunwa", position:"Divisional Head of Operations"},
{img:daramola, name: "Daramola Solomon", position:"Head of Finance and Accounts"},
{img:Eucharia, name: "Eucharia Adumekwe", position:"Head of Human Resources"},
{img:Folorunsho, name: "Folorunsho Adeleye", position:"Team lead,Internal Audit Risk and Compliance"},
{img: Ireti, name: "Iretioluwa Banjo", position:"Head of Legal and Corporate Affairs"}]
    return (
        <Team.Wrapper>
            <div className="navbar navbar-expand-lg navbar-light bg-light"></div>
            <section className='Manag-d'>
                <div className="man-img">
                    <img src={Toks} alt='Tokunbo Talabi' />
                    <p>Tokunbo Talabi . Founder &amp; C.E.O</p>
                </div>
                <div className='man-text'>
                    <p>Mr. Tokunbo Talabi attended the University of Ife where he obtained a Bachelors’ Degree in Physiotherapy and later obtained a Master’s Degree from the University of Lagos. Vast in various international trainings, Certifications in; Finance, Business Management and Corporate Governance.
                        He garnered unparalleled work experience from various organisations including Guaranty Trust Bank where he joined as one of the pioneer staff. Mr. Tokunbo Talabi served diligently at the Bank for 9 years managing various functions including Support Services, Corporate Banking and Retail Operations.
                        He later ventured into the entrepreneurial space serving as founding President/CEO of Superflux International Limited, the foremost security printing company in Nigeria alongside with the management of Speedypri...</p>
                </div>
            </section>
             <section className="the-board">
                <div className='board-head'>
                   <h1>The Board</h1> 
                </div>
                <div className='board-img'>
                    {board.map((board, index) =>{
                        return (<div className='boardee' key={index}>
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
                            managers.map((manager,index) => {
                                return (
                                    <div key={index}>
                                        <img src={manager.img} alt={manager.name} />
                                        <h3>{manager.name}</h3>
                                        <p>{manager.position}</p>
                                        </div>
                                )
                            })
                        }
                </div>
            </section>
            <Footer />
        </Team.Wrapper>
    );
}
Team.Wrapper = styled.div`
background: white;
// height: 1000px;
width: 100%;
display: flex;
flex-flow: column  nowrap;

.Manag-d{
    display: flex;
    flex-direction: row;
    height: 400px;
    width:100%;
    // background: rgba(32,46,121,0.86);
    .man-img {
        width: 40%;
        height: 100%;
        margin: 0 auto; 
        padding: 40px 90px;
        background: rgba(26, 102, 254, 1);
        
        img{
            border-radius: 50%;
            // border: 4px solid red;
            height: 300px;
            width:300px;
            margin: 0 auto;
            align-items: center;
         
            // width: 300px;            
        }
        p{
            display: none;
        }
    }
    .man-text{
        width: 70%;
        height:400px;
        background: rgba(32, 46, 121, 0.86);
        p{
            height: 100%;
            padding: 40px;
            color: white;
            font-style: normal;
            font-size: 15px;
            font-weight: 300;
            Font-family: Poppins;
            // border: 4px solid red;
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
    // height: 400px;
    width: 100%;
    h1{
        color:#011166;
        font-weight: 600;
        font-style: normal;
        // padding-left : 100px;
    }
    .board-head{
        width:90%;
        height: auto;
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
                      
                       border-radius: 50%;
                       margin: 0 auto;
                        // border: 2px solid blue;
                        // width: 200px;
                    //    height: 200px;
                       img{
                           border-radius: 50%; 
                           width:200px;
                           height: 200px;
                           margin: 0 auto;
                           border: 2px solid blue ;
                       }
                   }
                   .boardee-text{
                       text-align: center;
                     padding: 20px 0;
                     color:  rgba(1, 17, 102, 1);
                     font-size: 18px;
                     line-height: 27px;
                     p{
                         text-align:center;
                     }

                    //   margin: 0 auto;
                   }
        }
        
    }
}
.the-managed {
    height: 800px;
    .the-managed-header{
        color:green;
        width: 90%;
        margin: 0 auto;
        padding-top: 40px;

        padding-bottom:40px;
    }
    .managers{
        width:90%;
        height: auto;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        flex-wrap:wrap;
    margin: 0 auto;
    div{
        height: 400px;;
        margin: 0 auto;
        text-align: center !important;
        // width: 20%;
        // margin: 10px;
        // background: yellow;
        img{
            border-radius:50%;
            height: 200px;
            width:200px;
            }
        }
    } 
}
@media only screen and (max-width: 600px){
    .Manag-d{
        // position: relative;
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        .man-img{
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
            
            p{
                display: flex;
                text-align: center;
                color: white;
                font-weight: 600;
                font-family: Poppins;
                
            }
            margin: 0 auto;
            align-content: center;
            padding-top: 30px;padding-bottom: 5px;
            img{
                width: 200px;
                height: 200px;
                margin:  0 auto;
                border-radius: 50%;
            }

        }
        .man-text{
            width: 100%;
            height: auto;
        }
    }
    .the-board{
        width:  100%;
        display: flex;
        flex-direction:  column;
        h1{
            color: #011166;
            text-align: center;
        }
        .board-img{
            display: flex;
            flex-direction: column;
            height: auto;
        }

    }
    .the-managed{
        color: #011166;
        .the-managed-header{
            h1{
            color:#011166;
            text-align: center;
            }
        }
        width: 100%;
        display: flex;
        flex-direction: column;
        height: auto;
        margin: 0 auto;
        .managers{
            width: 100%;
            display: flex;
            flex-direction: column;
            height: auto;
            justify-content: center;
            text-align: center;
            // div{
            //     width: 100%;
            //     // img{
            //     //     margin: 0 auto;
            //     //     // padding: 10%;
            //     // }
            //     // margin: 0 auto;
            // }

        }
    }
}
`
export default Team;
