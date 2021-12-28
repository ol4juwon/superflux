import React from "react";
import styled from "styled-components";
import blogMan from "../assets/images/superflux/home/why choose/blog man.png";
import conference from "../assets/images/superflux/home/why choose/conference.png";
import Image40 from "../assets/images/superflux/home/why choose/image40.png";
import newsImg from "../assets/images/superflux/home/testimony/blog1.png"
const Blog = () => {
    const news = [{
        img: newsImg,
        alt: "",
        type: "Article",
        title: "Nigerian COVID Story",
        text: "Exactly two weeks after the first case in Egypt, we woke up to the news that Lagos, the commercial hub of Nigeria, had recorded the incident case of covid-19 in Nigeria. We were restles... Read more",
        link: ""
    },
    {img: blogMan,
        alt: "Tokunbo talabi",
        type: "News",
        title: "Tokunboh Talabi, President of Superflux, appointed as SSG in Ogun State",
        text: "Ogun State Governor, Dapo Abiodun announced the Founder and President, Superflux International Limited Mr. Olatokunbo Joseph Talabi as the Secretary to the State Government. Read more",
        link: "" },
{img: conference,
    alt: "",
    title: "Superflux Appoints new MD/CEO",
    type: "News",
    text: "Mr. Gabriel Okonkwo, the erstwhile Chief Operating Officer is now the Managing Director/ Chief Executive Officer of Superflux International Limited ... Read more",
    link: ""},
{img: Image40,
    alt: "",
    title: "",
    type: "",
    text: "",
    link: ""}]

  
  return (
    <Blog.Wrapper>
      <div className="Header">
        <h3>
          Superflux B<span className="underline">log</span>
        </h3>
      </div>
      <div className="content">
        <div className="Blog">
          <div className="blog1 .bg1">hi</div>
          <div className="blog2 .bg2">{/* <img src={blogMan} alt='' /> */}</div>
          <div className="blog3"></div>
          <div className="blog4"></div>
        </div>
      </div>
      <div className="news">
      <div id="carouselExampleSlidesOnly" className="carousel slide bl--og" data-ride="carousel">
        <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    
      {
        news.map((item, index) => {
          return   index === 0 ?( 
          <div className="carousel-item active">
            <img className="d-block w-100" src={item.img} alt="first slide"/>
            <div className="carousel-caption  d-md-block">
              <h5>{item.title}</h5>
              <p>{item.text}</p>
            </div>
          </div> ):  
           (

            <div className="carousel-item">
                    <img className="d-block w-100" src={item.img} alt="Second slide"/>
                    <div className="carousel-caption  d-md-block">
                    <h5>{item.title}</h5>
                    <p>{item.text}</p>
                  </div>
            </div>
          );
        })
      }
  </div>
  </div>
</div>

     
    </Blog.Wrapper>
  );
};

Blog.Wrapper = styled.div`
  width: 100%;
  height: 80%;
  text-align: center;
//   background: ;

  .Header {
    width: 100%;
    height: auto;
    h3 {
      padding-top: 40px;
      font-size: 40px;
      font-weight: 400;
      font-style: Poppins;
      line-height: 56px;
      margin-bottom: 20px;
      align-self: center;
      color: #011166;
    }
  }
 .news{
   display: none !important;
 }
  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    // padding-top: 10px;
    height: 100%;
    // border: 1px solid red;
    .blo--og{
      display: none !important;
    }
    .slide{
      display: none !important;
      width: 0px;
      height: 0px;
    }
    .carousel{
      display: none !important;
      width: 0px;
      height: 0px;
    }
    .Blog {
      width: 80%;
      height: 100%;
      background: white;
      display: grid;
      grid-template-columns: repeat(6, 2fr);
      grid-gap: 50px;
      
      .bg2 {
        background: url(${blogMan}) #011166;
        mix-blend-mode: multiply;
      }
      .bg1{
        background: url(${newsImg}) #011166;
        mix-blend-mode: multiply;
      }
      .blog1 {
        // background: #011166;
        background: url(${newsImg}) no-repeat;
        background-attachment: cover;
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 3;
        padding:0;
        // border: 1px solid red;
      }
      .blog2 {
        background: url("${blogMan}") no-repeat;
        // background-size:fit;
        padding: 0px;
        background-attachment: cover;
        grid-column-start: 3;
        grid-column-end: 7;
        grid-row-start: 1;
        grid-row-end: 2;
        // img {
        //     width: 800px;
        //     height: 200px;
        // }
      }
      .blog3 {
        // background: #011166;
        background: url(${Image40});
        background-attachment: cover;
        grid-column-start: 3;
        grid-column-end: 5;
        grid-row-start: 2;
        grid-row-end: 3;
        img {
        }
      }
      .blog4 {
        // background: #011166;
        background: url(${conference});
        grid-column-start: 5;
        grid-column-end: 7;
        grid-row-start: 2;
        grid-row-end: 3;
      }
    }
  }
  @media only screen and (max-witdh: 420px){
      width: 100%;
      overflow:  scroll;
      .Header{
          width: 100%;
          h3{
              padding: 0px;
              font-size: 24px;
              font-weight: 32px;
          }
      }
  } 
  @media only screen and (max-width: 728px){
    .Header{
        width: 100%;
        h3{
            padding: 0px;
            font-size: 24px;
            font-weight: 32px;
        }
    }
    .content{
        display: flex;
        flex-direction row;
        .Blog{
            // width: 100%;
            display: none !important;
            // flex-direction: row;
        }
        .carousel-item> img{
          width:  370px;
          height: 480px;
        }
       
    }
  }
  .carousel-item{
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
/* try */
mix-blend-mode: multiply;
blend:passthrough;
filter: drop-shadow(0px 4px 24px rgba(1, 17, 102, 0.14));
  }
`;
export default Blog;
