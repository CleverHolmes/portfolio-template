
import React, { useState, Fragment } from 'react';
import { Dialog, Grid, } from '@mui/material'
import Contact from './contact';
import Services from '../../api/service'
import Image from 'next/image';


const ServiceSingle = ({ maxWidth, open, onClose, title, dImg, sImg1, sImg2, }) => {

    return (
        <Fragment>
            <Dialog
                open={open}
                onClose={onClose}
                className="modalWrapper quickview-dialog"
                maxWidth={maxWidth}
            >
                <Grid className="modalBody modal-body">
                    <button className='modal-close' onClick={onClose}><i className='fa fa-close'></i></button>
                    <div className="tp-service-single-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-12">
                                    <div className="tp-service-single-wrap">
                                        <div className="tp-service-single-item">
                                            <div className="tp-service-single-main-img">
                                                <Image src={dImg} alt="" />
                                            </div>
                                            <div className="tp-service-single-title">
                                                <h3>{title}</h3>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus dis posuere amet
                                                tincidunt commodo, velit. Ipsum, hac nibh fermentum nisi, platea condimentum cursus
                                                velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum
                                                quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis
                                                sollicitudin diam, elit sit. Et nisi in libero facilisis sed est. Elit curabitur
                                                amet risus bibendum. Posuere et eget orci, tempor enim.</p>
                                            <p>Hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio
                                                facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at
                                                rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam, elit sit.</p>
                                            <div className="row mt-4">
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    <div className="tp-p-details-img">
                                                        <Image src={sImg1} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    <div className="tp-p-details-img">
                                                        <Image src={sImg2} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tp-service-single-item list-widget">
                                            <div className="tp-service-single-title">
                                                <h3>Our Capabilities</h3>
                                            </div>
                                            <p>Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id
                                                risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis
                                                sollicitudin diam.</p>
                                            <ul>
                                                <li>Non saed velit dictum quam risus pharetra esta.</li>
                                                <li>Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.</li>
                                                <li>Hac nibh fermentum nisi, platea condimentum cursus.</li>
                                                <li>Massa volutpat odio facilisis purus sit elementum.</li>
                                                <li>Elit curabitur amet risus bibendum.</li>
                                            </ul>
                                        </div>
                                        <div className="tp-service-single-item">
                                            <div className="tp-service-single-title">
                                                <h3>Our approach</h3>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat suspendisse aenean
                                                tellus augue morbi risus. Sit morbi vitae morbi sed urna sed purus. Orci facilisi
                                                eros sed pellentesque. Risus id sed tortor sed scelerisque. Vestibulum elit
                                                elementum, magna id viverra non, velit. Pretium, eros, porttitor fusce auctor vitae
                                                id. Phasellus scelerisque nibh eleifend vel enim mauris purus. Rutrum vel sem
                                                adipiscing nisi vulputate molestie scelerisque molestie ultrices. Eu, fusce
                                                vulputate diam interdum morbi ac a.</p>
                                        </div>
                                        <div className="tp-service-single-item list-widget">
                                            <div className="tp-service-single-title">
                                                <h3>Our Work Process</h3>
                                            </div>
                                            <ul>
                                                <li>Non saed velit dictum quam risus pharetra esta.</li>
                                                <li>Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.</li>
                                                <li>Hac nibh fermentum nisi, platea condimentum cursus.</li>
                                                <li>Massa volutpat odio facilisis purus sit elementum.</li>
                                            </ul>
                                        </div>
                                        <div className="tp-service-single-item">
                                            <div className="tp-service-single-title">
                                                <h3>Related Service</h3>
                                            </div>
                                            <div className="tp-service-area">
                                                <div className="row align-items-center">
                                                    {Services.slice(0, 3).map((service, srv) => (
                                                        <div className="col-lg-4 col-md-6 col-12" key={srv}>
                                                            <div className="tp-service-item">
                                                                <i className={`fi ${service.icon}`} ></i>
                                                                <h2>{service.sTitle}</h2>
                                                                <p>Lacus, etiam sed est eu tempus need Temer diam congue.</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tp-service-single-item">
                                            <div className="tp-service-contact-area">
                                                <div className="tp-contact-title">
                                                    <h2>Have project in mind? Let's discuss</h2>
                                                    <p>Get in touch with us to see how we can help you with your project</p>
                                                </div>
                                                <div className="tp-contact-form-area">
                                                    <Contact />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Dialog>
        </Fragment>
    );
}
export default ServiceSingle

