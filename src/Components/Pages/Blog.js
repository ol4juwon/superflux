import React from 'react'
import styled from 'styled-components';
const Blog = () => {
    const blogTitles = [
        {
            img: "",
            title: "Superflux Appoints new MD/CEO",
            type: "News",
            shortBody: "Mr. Gabriel Okonkwo, the erstwhile Chief Operating Officer is now the Managing Director/ Chief Executive Officer of Superflux International Limited and the Vice President of the Super .... Read more",
            link: ""
        },
        {
            img: "",
            title: "",
            type: "",
            shortBody: "",
            link:""
        },
        {
            img: "",
            title: "",
            type: "",
            shortBody: "",
            link:""
        },
        {
            img: "",
            title: "",
            type: "",
            shortBody: "",
            link:""
        },
        {
            img: "",
            title: "",
            type: "",
            shortBody: "",
            link:""
        }
    ]
    return (
        <Blog.Wrapper>
            <div className='blog--heading'>
                <h1>Superflux B<i className="underline">log</i></h1>
            </div>
            <div className='blog--list'>
                    {
                        blogTitles.map(titles =>{
                            return (
                                <div className='blog-card'>
                                    </div>
                            )
                        })
                    }
            </div>
        </Blog.Wrapper>
    )
}

Blog.Wrapper = styled.div`
display: flex;
height: 100vh;
width: 100%;
.blog--heading{
    width: 100%;
    padding: 100px 150px;
    display: flex;
    text-align: center;
}
`
export default Blog;