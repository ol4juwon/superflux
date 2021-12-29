import React from 'react'
import styled from 'styled-components'
import Footer from "../Footer"
import img1 from "../../assets/images/GALLERY/1.png"
import img2 from "../../assets/images/GALLERY/2.png"
import img3 from "../../assets/images/GALLERY/3.png"
import img4 from "../../assets/images/GALLERY/4.png"
import img5 from "../../assets/images/GALLERY/5.png"
import img6 from "../../assets/images/GALLERY/6.png"
import img7 from "../../assets/images/GALLERY/7.png"
import img8 from "../../assets/images/GALLERY/8.png"
import img9 from "../../assets/images/GALLERY/9.png"
import img10 from "../../assets/images/GALLERY/10.png"
import img11 from "../../assets/images/GALLERY/11.png"
import img12 from "../../assets/images/GALLERY/12.png"
import img13 from "../../assets/images/GALLERY/13.png"
import img14 from "../../assets/images/GALLERY/14.png"
import img15 from "../../assets/images/GALLERY/15.png"
import img16 from "../../assets/images/GALLERY/16.png"
import img17 from "../../assets/images/GALLERY/17.png"
import img18 from "../../assets/images/GALLERY/18.png"
import img19 from "../../assets/images/GALLERY/19.png"
import img20 from "../../assets/images/GALLERY/20.png"
import img21 from "../../assets/images/GALLERY/21.png"
import img22 from "../../assets/images/GALLERY/22.png"
import img23 from "../../assets/images/GALLERY/23.png"
import img24 from "../../assets/images/GALLERY/24.png"



const Gallery = () => {
    const galleryImages = [
        {
            image: img1,
            alt: "image1",
            caption: "superflux"
    },
    {
        image: img2,
        alt: "image2",
        caption: "superflux"
    },
    {
        image: img3,
        alt: "image3",
        caption: "superflux"

    },
    {
        image: img4,
        alt: "image4",
        caption: "superflux"

    },
    {
        image: img5,
        alt: "image5",
        caption: "superflux"
    },
    {   
        image: img6,
        alt: "image6",
        caption: "superflux"
    },
    {
        image: img7,
        alt: "image7",
        caption: "superflux"

    }
    ,
    {
        image: img8,
        alt: "image8",
        caption: "superflux"

    },
    {
        image: img9,
        alt: "image9",
        caption: "superflux"
    },
    {
        image: img10,
        alt: "image10",
        caption: "superflux"
    },
    {
        image: img11,
        alt: "image11",
        caption: "superflux"
    },
    {
        image: img12,
        alt: "image12",
        caption: "superflux"
    },
    {
        image: img13,
        alt: "image13",
        caption: "superflux"

    },
    {
        image: img14,
        alt: "image14",
        caption: "superflux"

    },
    {
        image: img15,
        alt: "image15",
        caption: "superflux"

    }
    ,{
        image: img16,
        alt: "image16",
        caption: "superflux"

    },
    {
        image: img17,
        alt: "image17",
        caption: "superflux"
    },
    {
        image: img18,
        alt: "image18",
        caption: "superflux"
    },
    {
        image: img19,
        alt: "image19",
        caption: "superflux"

    },
    {
        image: img20,
        alt: "image20",
        caption: "superflux"

    },
    {
        image: img21,
        alt: "image21",
        caption: "superflux"

    },{
        image: img22,
        alt: "image22",
        caption: "superflux"

    },
    {
        image: img23,
        alt: "image23",
        caption: "superflux"

    },{
        image: img24,
        alt: "image24",
        caption: "superflux"
    }
]
    return (
        <Gallery.Wrapper>
            {/* <Navbar /> */}
            <div className='content'>
                <div className='heading'>
                    <h1>Our Gall<span className='underline'>ery</span></h1>
                </div>
                <div className='gallery--text'>
                    <p>
                        Browse through our gallery of photographs and images of the projects, events and functions that Superflux has been involved in over the years as one of the leading printers in the industry, as well as the fun corporate culture we have here.
                    </p>
                </div>
                <div className='gallery'>
                    {
                        galleryImages.map((image,index) => {
                            return(
                                <div className='gallery--card' key={index}>
                                    <img src={image.image} alt={image.alt} />
                                    </div>
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </Gallery.Wrapper>
    )
}

Gallery.Wrapper = styled.div`
    width: 100%;
    .content{
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 100px 0px;
        .heading{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            h1{
                font-size:40px;
                line-height: 56px;
                font-style: normal;
                color: #011166;
            }

        }
        .gallery--text{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            p{
                font-size: 16px;
                line-height: 30px;
                color: #011166;
                text-align: center;
                padding: 20px 245px;
            }
        }
        .gallery{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            div{
                // border: 1px solid #011166;
                width: 290px;
                height: 200px;
                margin: 20px;
            }
        }
    }
    @media only screen and (max-width: 600px){
        .content{
            .heading{
                width: 100%;
                display: flex;
                justify-content: center;
                h1{
                    font-size: 24px;
                    text-align: center;
                    line-height: 30px;
                    font-weight: 600;
                }
            }
            .gallery--text{
                padding: 20px ;
                width: 100%;
                p{
                    font-size: 14px;
                    padding: 20px 20px;
                }
            }
            .gallery{
                width: 100%;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                padding: 20px 0px;
                div{
                    // border: 1px solid #011166;
                    width: 290px;
                    height: 200px;
                    margin: 20px;
                }

            }
        }
    }

`


export default Gallery

