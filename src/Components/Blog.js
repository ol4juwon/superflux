import React from 'react';
import styled from 'styled-components';
const Blog = () => {
    return (
        <Blog.Wrapper>
            <div className='Header'>
                <h3>Superflux Blog</h3>
                </div>
               <div className='content'>
                     <div className='Blog'>
                         <div className='blog1'>
                             hi
                             </div>
                                <div className='blog2'>
                                    </div>
                                        <div className='blog3'>
                                            </div>
                                                <div className='blog4'>
                                                    </div>
                        </div>
                    </div> 
        </Blog.Wrapper>
    );
}

Blog.Wrapper = styled.div`

width: 100%;
height: 80%;
text-align: center;
.Header{
    width: 100%;
    height: auto;
h3{
    padding-top: 40px;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    align-self: center;
    color: #011166;
}}
.content{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    // padding-top: 10px;
    height: 100%;
    // border: 1px solid red;
    .Blog{
        width: 80%;
        height: 100%;
        background: white;
        display: grid;
        grid-template-columns: repeat(6, 2fr);
        grid-gap: 50px;
        .blog1{
            background: #011166;
            grid-column-start: 1;
            grid-column-end: 3;
            grid-row-start: 1;
            grid-row-end: 3;
            border: 1px solid red;
        }
        .blog2{
            background: #011166;
            grid-column-start: 3;
            grid-column-end: 7;
            grid-row-start: 1;
            grid-row-end: 2;
        }
        .blog3{
            background: #011166;
            grid-column-start: 3;
            grid-column-end: 5;
            grid-row-start: 2;
            grid-row-end: 3;
        }
        .blog4{
            background: #011166;
            grid-column-start: 5;
            grid-column-end: 7;
            grid-row-start: 2;
            grid-row-end: 3;

        }
    }
}

`
export default Blog;
