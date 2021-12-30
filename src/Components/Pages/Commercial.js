import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer'
import img1 from "../../assets/images/commercial/commerce1.png"
import img2 from "../../assets/images/commercial/commerce2.png"
import img3 from "../../assets/images/commercial/commerce3.png"
import img4 from "../../assets/images/commercial/commerce4.png"
import img5 from "../../assets/images/commercial/commerce5.png"
import img6 from "../../assets/images/commercial/commerce6.png"
import img7 from "../../assets/images/commercial/commerce7.png"
import img8 from "../../assets/images/commercial/commerce8.png"
const Commercial = () => {
    return (
        <Commercial.Wrapper>
            <div className='secure--heading'>
                <h1>Commercial pri<span className='underline'>nts</span></h1>
                <img src={img1} alt="" />
                <p>In 2008, Superflux International Limited started from the top end of printing technology to cater for quality conscious print buyers by opening shop for commercial printing services, having invested in machineries for quality output and finishing.
                    <br></br><br />
Our commercial print unit is well equipped with state-of-the-art print technology, comprehensive finishing lines, workflow technology as well as proven skills and expertise to ensure our customers benefit from speedy turnaround and excellent quality finished products. We have continued to add value to customers’ branding and communication efforts by providing consistent and high quality print.

We provide end to end services from design to finishing, logistics and warehousing print products till they are needed. </p>
            </div>
            <div className='secure--heading'>
                <h1>Produ<span className='underline'>cts</span></h1>
                 </div>
            <div className='secure--Types'>
                <div className='secure1'>
                    <img src={img2} alt='' />
                    <div className='secureNums'>
                        <span>1</span><h3>Transaction forms</h3>
                    </div>
                    <ul>
                        <li>Bank forms including deposit slips, account opening forms, withdrawal slips</li>
                        <li>Receipts, Invoices, LPOs</li>
                        <li>Way Bills</li>
                    </ul>
                </div>
                <div className='secure2' dir="RTL">
                    <img src={img3} alt="" />
                    <div className='secureNums'>
                        <span>2</span><h3>Books, brochures and magazines</h3>
                    </div>
                    <p>Superflux is your specialist printer to print all kinds of exercise books, brochures, magazines to convey your brand and company activities. We print, finish, cut and fold to any size or shape you want. Some of our professional products are;</p>
                    <ul >
                        <li>Light publishing</li>
                        <li>Annual reports</li>
                        <li>Magazines</li>
                        <li>Custom school exercise books</li>
                        <li>Training and educational materials</li>
                    </ul>
                </div>
                <div className='secure3'>
                    <img src={img4} alt='' />
                    <div className='secureNums'>
                        <span>3</span><h3>Marketing and corporate marketing</h3>
                    </div>
                    <p>Corporate marketing materials are a great way to engage with customers. With state-of-the-art print technology, we produce quality promotional materials tailored to your specific need and brand including:</p>
                    <ul>
                        <li>Posters, handbills</li>
                        <li>Flyers</li>
                        <li>Pamphlets </li>
                        <li>Cards</li>
                    </ul>
                </div>
                <div className='secure4' dir="RTL">
                    <img src={img5} alt='' />
                    <div className='secureNums'>
                        <span>4</span><h3>Calendars and diaries</h3>
                    </div>
                    <p>
                    We consider ourselves as the print and design printer that every business needs. We produce large volume of calendars, notepad in different forms, specific designs or colours as requested.
                     </p>
                    <ul>
                        <li>Wall calendars </li>
                        <li>Table calendars</li>
                        <li>Notepads</li>
                        <li>Diaries</li>
                    </ul>
                </div>
                <div className='secure5'>
                <img src={img6} alt='' />
                <div className='secureNums'>
                        <span >5</span><h3>Office stationaries</h3>
                    </div>
                    <p>As your number one commercial printing company, we specialize in supplying quality office stationeries.

                    </p>
                    <ul>
                        <li>Letter head/continuation sheets</li>
                        <li>Visitors notebook</li>
                        <li>Business cards</li>
                        <li>Business forms</li>
                        <li>Receipts</li>
                        <li>A4 papers</li>
                    </ul>
                </div>
                <div className='secure4' dir="RTL">
                    <img src={img7} alt='' />
                    <div className='secureNums'>
                        <span>6</span><h3>Packaging and labels</h3>
                    </div>
                    <p>
                    We supply quality labels and packaging products tailored to your brand and product.
                     </p>
                    <ul>
                        <li>Labels</li>
                        
                    </ul>
                </div>
                <div className='secure5'>
                <img src={img8} alt='' />
                <div className='secureNums'>
                        <span >7</span><h3>Total print management</h3>
                    </div>
                    <p>We offer a total print management solution for our customers which involves handling every aspect of their print requirements from design, online request and ordering platform, production, logistics, warehousing, and final distribution to designated points to ensure value for money and great results every time.

                    </p>
                    
                </div>
            </div>

            
            <Footer />
        </Commercial.Wrapper>
    )
}

Commercial.Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
   
    .secure--heading{
        width: 100%;
        color: #011166;
        h1{
            font-size: 24px;
            line-height: 32px;
            padding: 20px 0px;
            padding-left: 10px;
        }
        img{
            padding-left: 10px;
             margin: 0 auto;
        }
        p{
            padding: 20px;
            font-size: 16px;
            line-height: 30px;
            font-weight: 300;
            text-align: left;
        }
    }
    @media only screen and (max-width: 600px){
        .secure--heading{

            img{
                width: 400px;
                height: 250px;
            }
        }
        .embedded {
            h3{ 
                text-decoration: underline;
                color: #1A66FE;
                padding: 10px 20px;
            }
            p{
                ul{
                    color:#011166;
                    // background: green;
                    list-style: disc;
                    // display: list-item;
                    margin-left: 3em;
                }
                ul li::before{
                    color: #1A66FE;
                }
            }
        }
        .secure--Types{
             .secure1,.secure3, .secure5{
                 background:#F4F8FC;
                .secureNums{
                width: 100%;
                display: flex;
                flex-direction: row;
                    h3{
                        padding: 10px 0px 10px 10px;
                        color: #1A66FE;
                    }
                }
                img{
                    width: 400px;
                    height: 250px;
                }
            }
            .secure2, .secure4{
                img{
                    width: 400px;
                    height: 250px;
                }
                .secureNums{
                    width: 100%;
                    display: flex;
                    margin-right: 20px;
                    flex-direction: row;
                    
                        h3{
                            padding: 10px 10px 10px 0px;
                            color: #1A66FE;
                        }
                }
                p{
                        padding:20px;
                        color: #011166;
                    }
            }
            .secureNums span:nth-child(odd){
                    margin-left: 15px;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    padding: 1rem;
                    background:#1A66FE;
                    color: white;
                    border-radius: 10px;
                
            }
            // .secureNums:nth-child(even){
            //     margin-left: 25px;
            //     border: 2px solid red;
            // }
            .secure1, .secure3, .secure5{
                ul li{
                    list-style-type: disc;
                    // color: #1A66FE;
                    margin-left: 65px;
                    display: list-item;
                    list-style-position: inside;
                }
                ul li::before{
                    color: #1A66FE;
                }

            }
            .secure2, .secure4{
                ul li{
                    list-style-type: disc;
                    color: #1A66FE;
                    // margin-left: 65px;
                    display: list-item;
                    list-style-position: inside;
                    text-align: right;
                    margin-right: 65px;
                }
            }
        }
    }
`

export default Commercial
