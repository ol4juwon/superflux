
// import CustomButton from "components/atoms/CustomButton";
import React from "react";
import GeneralNavBar from "./NavBar";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Background  from '../../assets/images/ezgif.png';
// import landing from "assets/images/landingPage/bannarImg.png";
// import logo from 'assets/images/logo.png'
// import { Link as LinkScroll } from "react-scroll"

// import { Swiper, SwiperSlide } from "swiper/react";
// import Faq from "./Faq";
// import "swiper/swiper-bundle.css";

// import WhatPeopleSay from "./WhatPeopleSay";

const LandingPage = () => {
  const history = useHistory();


  return (
    <LandingPage.Wrapper>
      <GeneralNavBar />
      {/* <section > */}
        {/* <div >
            <h1>Revolutionizing the age long Esusu traditional way to save</h1>
        </div> */}

        {/* <div className="sales-cards center"> */}
          {/* <Swiper id="main" breakpoints={breakPoints}>
            {itemsToSave.map((item) => {
              return (
                <SwiperSlide key={shortid.generate()}>
                  <div key={shortid.generate()} className="card center">
                    <img src={item.image} alt={item.title} />
                    <p>{item.title} </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper> */}
        {/* </div> */}
      {/* </section> */}

      <footer>
       
      </footer>
    </LandingPage.Wrapper>
  );
};

LandingPage.Wrapper = styled.div`
  position: relative;
  background: url(${Background}) no-repeat center;
  .pad {
    padding: 0 15rem;
  }
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: -1;
    clip-path: polygon(0 0, 100% 0, 100% 95%, 0 82%);
    height: 104rem;
    background-color: #e6ffea;
    .transparent {
      position: absolute;
      top: -12rem;
      left: -21rem;
    }
    .coin {
      position: absolute;
      top: 10rem;
      right: 8rem;
    }
  }
  .banner {
    margin-top: 7rem;
    
    h1 {
      font-family: Graphie-Bold;
      font-size: 4.5rem;
      color: #292d61;
      text-align: center;
      width: 60rem;
      line-height: 7rem;
    }
    p {
      color: #47486b;
      font-size: 1.8rem;
      margin: 1rem 0 3rem ;
    }
  }
  .banner-img {
    display: flex;
    justify-content: center;
    margin-top: 5rem;
    img {
      width: 80%;
    }
  }
  .display__area {
    margin-top: 4rem;
    .text-holder {
      h1 {
        font-family: Graphie-Bold;
        font-size: 4rem;
        color: #292d61;
        text-align: center;
        width: 70%;
        align-self: center;
        margin-bottom: 2rem;
      }
      p {
        color: #47486b;
        font-size: 1.8rem;
        margin: 1rem 0;
        font-family: Muli-SemiBold;
      }
    }
    .sales-cards {
      flex-direction: row;
      margin: 3rem 0;

      img {
        width: 13rem;
        height: 5rem;
      }
      p {
        text-align: center;
        font-family: Muli-Black;
        color: #232a59;
        font-size: 2rem;
        opacity: 0.9;
        margin-top: 3rem;
      }

      .card {
        cursor: grab;
        border-radius: 2rem;
        height: 11rem;
        background-color: #c7fef5;
        padding: 6rem 2rem;
        margin-right: 2rem;
        background: transparent
          linear-gradient(180deg, #e6ffea 0%, #e6ffea 100%) 0% 0% no-repeat
          padding-box;
      }
    }
  }
  .save__together {
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    gap: 3rem;
    .left-side {
      position: relative;
     
      .rectangle {
        position: absolute;
        width: 68%;
        z-index: -1;
      }
      .main-card {
        width : 80%;
        padding-left: 7rem;
      }
      .ellipse {
        position: absolute;
        top: 38%;
        left: 35%;
        z-index: -1;
        width: 45%;
      }
      .save-card {
        position: absolute;
        top: 35%;
        left: 25%;
      }
    }
    .right-side {
      position: relative;
      align-self: center;
      img {
        position: absolute;
        top: 0;
      }
      button {
        align-self: baseline;
      }
      .fas {
        align-self: baseline;
        background: #fff;
        width: 7rem;
        height: 7rem;
        border-radius: 50%;
        text-align: center;
        line-height: 7rem;
        vertical-align: middle;
        color: #08cb7b;
        font-size: 2.8rem;
        box-shadow: 50px 70px 90px #00000029;
       
      }
      h2 {
        font-family: Graphie-Bold;
        font-size: 3.5rem;
        color: #292d61;
        width: 70%;
        align-self: baseline;
        margin-top: 1rem;
      }
      p {
        color: #47486b;
        font-size: 1.8rem;
        font-family: Muli-Light;
        margin: 3.5rem 0;
        width: 80%;
        line-height: 2;
      }
    }
  }
  .independence {
    flex-direction: row;
    margin: 4rem 0;
    h2 {
      margin-top: 3rem;
      font-family: Graphie-Bold;
      font-size: 2.8rem;
      color: #292d61;
      /* width: 70%; */
      /* align-self: center; */
    }
    p {
      color:    #47486b;
      font-size: 1.8rem;
      font-family: Muli-Light;
      margin: 3.5rem 0;
    }
    .right-side {
      align-self: baseline;
      margin-top: 10rem;
      width: 41%;
      max-width: initial;
      /* margin-right: 10rem; */
    }
    .fas {
      background: #fff;
      width: 7rem;
      height: 7rem;
      border-radius: 50%;
      text-align: center;
      line-height: 7rem;
      vertical-align: middle;
      color: #08cb7b;
      font-size: 2.8rem;
      box-shadow: 50px 70px 90px #00000029;
    }
    .left-side {
      position: relative;
      width: 45%;
      max-width: 47.2rem;
      .main-card{
        position: relative;
        right: -150px;
        width:  37.7rem;
        border-radius: 20px;
        height: 500px;
        width: 80%;
      }
      .card{
        position: absolute;
        top: 51%;
        right: 10%;
        width: 100%;
      }
    }
  }
  .financial-freedom {
    margin-top: 5rem;
    background-color: #292d61;
    padding: 8rem 15rem;
    position: relative;
    h1 {
      color: #fff;
      font-family: Graphie-Bold;
      font-size: 3rem;
      margin: 3rem 0;
      line-height: 4rem;
    }
    .floatingcoin {
      position: absolute;
      top: -5rem;
      right: 0%;
      height: 30rem;
    }
    .line{
      border-bottom : 3.5px solid white;
      width: 50px;
    }
    .stepping-text {
      justify-content: space-between;
      flex-direction: row;
      height: 35rem;
      h3 {
        color: #eff2ff;
        font-family: Muli-Bold;
        font-size: 2.5rem;
        margin-bottom: 3rem;
      }
      p {
        color: #fff;
        font-size: 1.8rem;
        font-family: Muli-Light;
        line-height: 3rem;
      }
      .item {
        width: 28%;
        align-self: flex-start;
        .fas {
        align-self: baseline;
        background: #fff;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        text-align: center;
        padding-top: 1rem;
        vertical-align: middle;
        color: #08cb7b;
        font-size: 2.8rem;
        box-shadow: 50px 70px 90px #00000029;
        font-size: 2rem;
        margin-bottom: 1.5rem;
      }
      }
      .item:nth-of-type(2) {
       align-self: center;
      }
      .item:nth-of-type(3) {
        align-self: flex-end;
      }
    }
  }
  .what-people-say {
    padding: 5rem 15rem 3rem;
    background-color: #f1fff3;
    position: relative;
    z-index: 4;
    .line{
      border-bottom : 3px solid #08CB7B;
      width: 50px;
    }
    .ellipse{
      position: absolute;
      z-index: -1;
      width: 30%;
      top: 5%;
      left: 0;
    }
    .header{
      display: flex;  
      align-items: center;
      justify-content:space-between;
      margin-bottom: 3rem;
      width: 41.9rem;
    }
    h2 {
  
      color: #292d61;
      font-size: 3rem;
    }
    .name {
      color: #292d61;
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    .cards {
      display: flex;
      justify-content: space-between;
      width: 100%;
      .swiper-container{
        position: static;
      }
      .swiper-button-next, .swiper-button-prev{
        top: 14%;
        width: 1rem;
        right: 50%;
        color: #292d61;
        &::after{
          font-size: 1.5rem;
        }
      }
      .swiper-button-prev{
        left: 45%;
      }
      .card {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        img {
          width: 80%;
          margin-top : 1.5rem;
          border-radius : 1.5rem;
        }
        span {
          font-size: 1.2rem;
          color: #bec6df;
        }
        .content {
          max-width: 45rem;
          color: #47486b;
          opacity: 0.8;
          font-size: 1.4rem;
          line-height: 2.2rem;
        }
      }
    }
  }
  .faqs-container {
    padding: 7rem 15rem;
    h2 {
      margin-bottom: 0.3rem;
      color: #292d61;
      font-size: 3rem;
    }
    .sub-heading {
      color: #47486b;
      opacity: 0.8;
      font-size: 1.8rem;
      margin-bottom: 2rem;
    }
    .faq-item {
      h2 {
        color: #059157;
        font-size: 2rem;
      }
    }
  }
  footer {
    background-color: #f1fff3;
    padding: 11rem 15rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    .logo {
      width: 12rem;
      font-family: Graphie-Bold;
      font-size: 2.2rem;
      color: #444c64;
    }
    h2 {
      color: #059157;
      font-family: Muli-Bold;
      font-size: 2.5rem;
      margin-bottom: 3rem;
    }
    a,p{
      color: #47486b;
      font-size: 1.6rem;
      opacity: 0.8;
      margin-bottom: 1rem;
      cursor: pointer;
    }
    .company{
      display: flex;
      flex-direction: column;
      
    }
  }
  @media screen and (max-width: 960px) {
    .overlay{
      height: 105vh;
    }
    .banner-img img {
      width: 85%;
    }
    .pad {
      padding: 2rem;
    }
    .banner {
      h1 {
        font-size: 3rem;
        width: 100%;
        line-height: 4rem;
      }
   
    }
    .overlay {
      & > * {
        width: 100%;
      }
      .coin {
        display: none;
      }
    }

    .display__area {
      .text-holder {
        h1 {
          width: auto;
          font-size: 2rem;
        }
        p {
          text-align: center;
        }
      }
    }
    .save__together {
      grid-template-columns: repeat(1, 1fr);
      .left-side {
        & > img {
          width: 100%;
        
        }
        .main-card {
          position: relative;
          left: -30px;
          padding-left: 0;
        }
        .ellipse {
          right: 0;
          left: 5%;
          width: 70%;
        }
        .save-card {
          top: 55%;
          right: 0;
          left: auto;
          width: 80%;
        }
      }
      .right-side {
        padding: 0 2rem;
        margin-top: 0;
        h2,
        p {
          width: 100%;
          font-size: 3rem;
        }
        p {
          font-size: 1.6rem;
          margin: 1rem auto;
        }
      }
    }
    .independence {
      flex-direction: column-reverse;
      .left-side {
        width: 100%;
        margin-bottom: 4.2rem;
        .main-card{
          border-radius: 20px;
          height: 370px;
          width: 80%;
          right: -60px;
        }
        .card {
          top: 70%;
          right: 20%;
          left: auto;
          width: 100%;
        }
      }
      .right-side {
        width: 100%;
        margin-top: 0;
      }

      p {
        margin: 1.5rem auto;
      }
      h2 {
        margin-top: 1rem;
      }
    }
    .financial-freedom {
      width: 100%;
      .floatingcoin {
        display: none;
      }
      br{
        display: none;
      }
      .line{
        display: none;
      }
      .stepping-text {
        flex-direction: column;
        height: 75rem;
        padding-bottom: 2rem;
        h3 {
          margin-bottom: 1rem;
        }
        .item {
          width: 100%;
          &:nth-of-type(2),
          &:nth-of-type(3) {
            margin-top: 2rem;
          }
        }
      }
      h1 {
        font-size: 2.5rem;
        text-align: center;
      }
    }
    .what-people-say {
      .header{
        width: 100%;
        .line{
          display : none;
        }
      }
      padding: 2rem;
      h2 {
        font-size: 1.6rem;
        text-align: center;
      }
      .cards {
        flex-direction: column;
        .swiper-button-next, .swiper-button-prev{
          top: 8%;
        }
        .swiper-button-prev{
          left: 75%;
        }
         .swiper-button-next{
          right: 10%;
         }
        .swiper-container{
          width: 100%;
        }
        .card {
          width: 100%;
          .content {
            max-width: 100%;
          }
        }
      }
    }
    .faqs-container {
      padding: 1rem;
    }

    footer {
      padding: 2rem;
      grid-template-columns: repeat(1, 1fr);
      text-align: center;
    }
    .faqs-container h2{
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
      }
  }
`;
export default LandingPage;
