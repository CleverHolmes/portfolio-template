import React, { Fragment } from "react";
import { Dialog, Grid } from "@mui/material";
import Contact from "./contact";
import RelatedProject from "./related";
import Image from "next/image";

const ProjectSingle = ({
  maxWidth,
  open,
  onClose,
  title,
  pImg,
  psub1img1,
  psub1img2,
  tech
}) => {
  return (
    <Fragment>
      <Dialog
        open={open}
        onClose={onClose}
        className="modalWrapper quickview-dialog"
        maxWidth={maxWidth}
      >
        <Grid className="modalBody modal-body project-modal">
          <button className="modal-close" onClick={onClose}>
            <i className="fa fa-close"></i>
          </button>
          <div className="tp-project-single-area">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-12">
                  <div className="tp-project-single-wrap">
                    <div className="tp-project-single-item">
                      <div className="row align-items-center mb-5">
                        <div className="">
                          <div className="tp-project-single-title">
                            <h3>{title}</h3>
                          </div>
                          <p>
                            Technologies : {tech}
                          </p>
                        </div>                      </div>
                      <div className="tp-project-single-main-img">
                        <Image src={pImg} alt="" />
                      </div>
                    </div>
                    <div className="tp-project-single-gallery">
                      <div className="row mt-4">
                        <div className="col-md-6 col-sm-6 col-12">
                          <div className="tp-p-details-img">
                            <Image src={psub1img1} alt="" />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-12">
                          <div className="tp-p-details-img">
                            <Image src={psub1img2} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tp-project-single-item list-widget">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="tp-project-single-title">
                            <h3>Resieved goals</h3>
                          </div>
                          <ul>
                            <li>
                              Non saed velit dictum quam risus pharetra esta.
                            </li>
                            <li>
                              Id risus pharetra est, at rhoncus, nec ullamcorper
                              tincidunt.
                            </li>
                            <li>
                              Hac nibh fermentum nisi, platea condimentum
                              cursus.
                            </li>
                            <li>
                              Massa volutpat odio facilisis purus sit elementum.
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6 list-widget-s">
                          <div className="tp-project-single-title">
                            <h3>Results</h3>
                          </div>
                          <ul>
                            <li>
                              Mauris dignissim blandit cursus imperdiet accumsan
                              lorem.
                            </li>
                            <li>Nam id in non sed cras purus nunc et.</li>
                            <li>
                              Mauris orci, cursus nisl odio est adipiscing
                              gravida magna eget.
                            </li>
                            <li>
                              Quis mauris vel felis convallis nulla dignissim.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <RelatedProject />
                    <div className="tp-project-single-item">
                      <div className="tp-project-contact-area">
                        <div className="tp-contact-title">
                          <h2>Have project in mind? Let's discuss</h2>
                          <p>
                            Get in touch with us to see how we can help you with
                            your project
                          </p>
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
};
export default ProjectSingle;
