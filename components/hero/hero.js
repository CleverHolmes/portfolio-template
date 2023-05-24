import React from "react";
import NavLink from 'next/link'
import himg from '/public/images/slider/right-img.png'
import { Link } from 'react-scroll'
import Image from "next/image";

const Hero =() => {
    return (
        <section className="tp-hero-section-1">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-7 col-lg-7">
                        <div className="tp-hero-section-text">
                            <div className="tp-hero-title">
                                <h2>Web & Mobile</h2>
                                <h2>Web3</h2>
                            </div>
                            <div className="tp-hero-sub">
                                <p>Bronson Williams</p><p style={{color:"rgb(229, 84, 10)"}}> Killeen, TX</p>
                                
                            </div>
                            <div className="btns">
                                <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} offset={-95} className="theme-btn">Contact Me</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-vec">
                <div className="right-img">
                    <Image src={himg} alt=""/>
                </div>
            </div>
            <div className="social-link">
                <ul>
                    <li><NavLink href="/">Web</NavLink></li>
                    <li><NavLink href="/">Mobile</NavLink></li>
                    <li><NavLink href="/">Blockchain</NavLink></li>
                    <li><NavLink href="/">Web3</NavLink></li>
                </ul>
            </div>
            <div className="visible-text">
                <h1 style={{color:'#e5540a'}}>Developer</h1>
            </div>
        </section>
    )
}

export default Hero;