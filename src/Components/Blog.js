import React from "react";
import styled from "styled-components";
import blogMan from "../assets/images/superflux/home/why choose/blog man.png";
import conference from "../assets/images/superflux/home/why choose/conference.png";
import Image40 from "../assets/images/superflux/home/why choose/image40.png";
import newsImg from "../assets/images/superflux/home/testimony/blog1.png"
const Blog = () => {
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
    </Blog.Wrapper>
  );
};

Blog.Wrapper = styled.div`
  width: 100%;
  height: 80%;
  text-align: center;
  background: ;
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
  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    // padding-top: 10px;
    height: 100%;
    // border: 1px solid red;
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
`;
export default Blog;
