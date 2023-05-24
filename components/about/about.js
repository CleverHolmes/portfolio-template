import Image from 'next/image';
import React from 'react'
import aImg from '/public/images/about/img-1.jpg'

const About = (props) => {
    return (

        <section className="tf-about-section section-padding">
            <div className="container">
                <div className="tf-about-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="tf-about-img">
                                <Image src={aImg} className="aboutimg" alt="" />
                                <div className="tf-about-img-text">
                                    <div className="tf-about-icon">
                                        <h3>8+</h3>
                                        <span>Years Exprience</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="tf-about-text">
                                <small>about Me</small>
                                <h2>Welcome !</h2>
                                <h2>Best Software Services</h2>
                                
                                <p>As a Senior Frontend Developer, I have been employed in the software companies for 8 years. My work involves providing remote web, mobile, and web3 development and design services to various companies and clients. Additionally, I strive to make my projects full responsive, fast, and SEO friendly. I am also knowledgeable in working with Agile methodology with Scrum and Kanban, and DevOps principles. I am proud that I have been able to deliver great results to clients on time. </p>

                                <div className="tf-funfact">
                                    <div className="tf-funfact-item">
                                        <h3><span>40</span>+</h3>
                                        <p>Projects Completed</p>
                                    </div>
                                    <div className="tf-funfact-item">
                                        <h3><span>52</span>+</h3>
                                        <p>Awards Win</p>
                                    </div>
                                    <div className="tf-funfact-item">
                                        <h3><span>20</span>K+</h3>
                                        <p>Happy clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="visible-rotate-text">
                <h1>About Me</h1>
            </div>
        </section>
    )
}

export default About;