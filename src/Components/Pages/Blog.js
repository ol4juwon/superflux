import React from 'react'
import styled from 'styled-components';
import Footer from '../Footer';
import blog1 from '../../assets/images/blog/blog1.png'
import blog2 from '../../assets/images/blog/blog2.png'
import blog3 from '../../assets/images/blog/blog3.png'
import blog4 from '../../assets/images/blog/blog4.png'
const Blog = () => {
    const blogTitles = [
        {
            img: blog1,
            title: "Superflux Appoints new MD/CEO",
            type: "News",
            shortBody: "Mr. Gabriel Okonkwo, the erstwhile Chief Operating Officer is now the Managing Director/ Chief Executive Officer of Superflux International Limited and the Vice President of the Super .... Read more",
            link: ""
        },
        {
            img: blog2,
            title: "Nigerian Covid Story",
            type: "Article",
            shortBody: "The world was slowly getting back to business, after the usual festivities that signified the end of a year and the herald of a new one. What made this a bit different was the fact that the .... Read more",
            link:""
        },
        {
            img: blog3,
            title: "Tokunbo Talabi, President of Superflux, appointed as SSG in Ogun State",
            type: "News",
            shortBody: "Ogun State Governor, Dapo Abiodun announced the Founder and President, Superflux International Limited Mr. Olatokunbo Joseph Talabi as the Secretary to the State Governm .... Read more",
            link:""
        },
        {
            img: blog4,
            title: "Can digital disruption kill the printing industry?",
            type: "Article",
            shortBody: "Change is inevitable and with digital disruption affecting almost all areas of our day to day lives, the printing industry has not been left out. Over time... Read more",
            link:""
        },
        
    ]
    return (
        <Blog.Wrapper>
            <div className='blog--heading'>
                <h1>Superflux B<span className="underline">log</span></h1>
            </div>
            <div className='blog--list'><div className="card-group">
                    {
                        blogTitles.map((titles,index )=>{
                            return (                              
                                <div key={index} className="card">
                                    <img className="card-img-top" src={titles.img} alt="Card  cap"/>
                                    <div className="card-body">
                                    <h5 className="card-title">{titles.title}</h5>
                                    <p className="card-text">{titles.shortBody}</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>                    )
                            })
                    }
            </div>
            </div>
            <Footer />
        </Blog.Wrapper>
    )
}

Blog.Wrapper = styled.div`
display: flex;
// height: 100vh;
flex-direction: column;
width: 100%;
.blog--heading{
    width: 100%;
    // padding: 100px 150px;
    display: flex;
    text-align: center;
    h1{
        font-size: 40px;
        width: 100%;
        line-height: 56px;
        font-style: normal;
        color: #011166;
        text-align: center;
    }
}
.card-group{
    width: 80%;
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 100px;
    margin: 50px auto;
    .card{
        width: 383px !important;
        // margin: 100px;
        box-shadow: 0px 4px 24px rgba(1, 17, 102, 0.14);
border-radius: 4px;
    }
}
@media (max-width: 768px){
    .blog--heading{
        width: 100%;
        display: flex;
        justify-content: center;
        // border: 1px solid red;
        padding: 20px 10px;
        align-items: center;
        h1{
            font-size: 24px;
            line-height: 40px;
            font-style: normal;
        }
    }
    .card-group{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        margin-top: 50px;
        .card{
            width: 80%;
            margin: 0 auto;
            box-shadow: 0px 4px 24px rgba(1, 17, 102, 0.14);
border-radius: 4px;
        }
    }
}
`
export default Blog;