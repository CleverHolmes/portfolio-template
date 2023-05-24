
import React, { Fragment } from 'react';
import Link from 'next/link'
import { Dialog, Grid, } from '@mui/material'
import blog3 from '/public/images/blog-details/comments-author/img-1.jpg'
import blog4 from '/public/images/blog-details/comments-author/img-2.jpg'
import blog5 from '/public/images/blog-details/comments-author/img-3.jpg'
import blog6 from '/public/images/blog-details/author.jpg'
import gl1 from '/public/images/blog-details/1.jpg'
import gl2 from '/public/images/blog-details/2.jpg'
import Image from 'next/image';

const submitHandler = (e) => {
    e.preventDefault()
}


const BlogSingle = ({ maxWidth, open, onClose, title, bImg, create_at, author, comment }) => {

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
                    <section className="tp-blog-single-section">
                        <div className="container">
                            <div className="row">
                                <div className='col col-lg-12 col-12'>
                                    <div className="tp-blog-content">
                                        <div className="post format-standard-image">
                                            <div className="entry-media">
                                                <Image src={bImg} alt="" />
                                            </div>
                                            <div className="entry-meta">
                                                <ul>
                                                    <li><i className="fi flaticon-user"></i> By <Link href="/">{author}</Link> </li>
                                                    <li><i className="fi flaticon-comment-white-oval-bubble"></i> Comments {comment}</li>
                                                    <li><i className="fi flaticon-calendar"></i> {create_at}</li>
                                                </ul>
                                            </div>
                                            <h2>{title}</h2>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful.</p>
                                            <blockquote>
                                                Combined with a handful of model sentence structures, generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                                            </blockquote>
                                            <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself,</p>

                                            <div className="gallery">
                                                <div>
                                                    <Image src={gl1} alt="" />
                                                </div>
                                                <div>
                                                    <Image src={gl2} alt="" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tag-share clearfix">
                                            <div className="tag">
                                                <span>Share: </span>
                                                <ul>
                                                    <li><Link href="/">Planning</Link></li>
                                                    <li><Link href="/">Portfolio</Link></li>
                                                    <li><Link href="/">Creative</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="tag-share-s2 clearfix">
                                            <div className="tag">
                                                <span>Share: </span>
                                                <ul>
                                                    <li><Link href="/">facebook</Link></li>
                                                    <li><Link href="/">twitter</Link></li>
                                                    <li><Link href="/">linkedin</Link></li>
                                                    <li><Link href="/">pinterest</Link></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="author-box">
                                            <div className="author-avatar">
                                                <Link href="/" target="_blank"><Image src={blog6} alt="" /></Link>
                                            </div>
                                            <div className="author-content">
                                                <Link href="/" className="author-name">Author: Jenny Watson</Link>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                                                <div className="socials">
                                                    <ul className="social-link">
                                                        <li><Link href="/"><i className="ti-facebook"></i></Link></li>
                                                        <li><Link href="/"><i className="ti-twitter-alt"></i></Link></li>
                                                        <li><Link href="/"><i className="ti-linkedin"></i></Link></li>
                                                        <li><Link href="/"><i className="ti-instagram"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="more-posts">
                                            <div className="previous-post">
                                                <Link href="/">
                                                    <span className="post-control-link">Previous Post</span>
                                                    <span className="post-name">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</span>
                                                </Link>
                                            </div>
                                            <div className="next-post">
                                                <Link href="/">
                                                    <span className="post-control-link">Next Post</span>
                                                    <span className="post-name">Dignissimos ducimus qui blanditiis praesentiu deleniti atque corrupti quos dolores</span>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="comments-area">
                                            <div className="comments-section">
                                                <h3 className="comments-title">Comments</h3>
                                                <ol className="comments">
                                                    <li className="comment even thread-even depth-1" id="comment-1">
                                                        <div id="div-comment-1">
                                                            <div className="comment-theme">
                                                                <div className="comment-image"><Image src={blog3} alt="" /></div>
                                                            </div>
                                                            <div className="comment-main-area">
                                                                <div className="comment-wrapper">
                                                                    <div className="comments-meta">
                                                                        <h4>John Abraham <span className="comments-date">January 12,2023
                                                                            At 9.00am</span></h4>
                                                                    </div>
                                                                    <div className="comment-area">
                                                                        <p>I will give you a complete account of the system, and
                                                                            expound the actual teachings of the great explorer of
                                                                            the truth, </p>
                                                                        <div className="comments-reply">
                                                                            <Link className="comment-reply-link" href="/"><span>Reply</span></Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <ul className="children">
                                                            <li className="comment">
                                                                <div>
                                                                    <div className="comment-theme">
                                                                        <div className="comment-image"><Image src={blog4} alt="" /></div>
                                                                    </div>
                                                                    <div className="comment-main-area">
                                                                        <div className="comment-wrapper">
                                                                            <div className="comments-meta">
                                                                                <h4>Lily Watson <span className="comments-date">January
                                                                                    12,2023 At 9.00am</span></h4>
                                                                            </div>
                                                                            <div className="comment-area">
                                                                                <p>I will give you a complete account of the system,
                                                                                    and expound the actual teachings of the great
                                                                                    explorer of the truth, </p>
                                                                                <div className="comments-reply">
                                                                                    <Link className="comment-reply-link" href="/"><span>Reply</span></Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <ul>
                                                                    <li className="comment">
                                                                        <div>
                                                                            <div className="comment-theme">
                                                                                <div className="comment-image"><Image src={blog5} alt="" /></div>
                                                                            </div>
                                                                            <div className="comment-main-area">
                                                                                <div className="comment-wrapper">
                                                                                    <div className="comments-meta">
                                                                                        <h4>John Abraham <span className="comments-date">January
                                                                                            12,2023 At 9.00am</span></h4>
                                                                                    </div>
                                                                                    <div className="comment-area">
                                                                                        <p>I will give you a complete account of the
                                                                                            system, and expound the actual teachings
                                                                                            of the great explorer of the truth, </p>
                                                                                        <div className="comments-reply">
                                                                                            <Link className="comment-reply-link" href="/"><span>Reply</span></Link>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="comment">
                                                        <div>
                                                            <div className="comment-theme">
                                                                <div className="comment-image"><Image src={blog3} alt="" /></div>
                                                            </div>
                                                            <div className="comment-main-area">
                                                                <div className="comment-wrapper">
                                                                    <div className="comments-meta">
                                                                        <h4>John Abraham <span className="comments-date">January 12,2023
                                                                            At 9.00am</span></h4>
                                                                    </div>
                                                                    <div className="comment-area">
                                                                        <p>I will give you a complete account of the system, and
                                                                            expound the actual teachings of the great explorer of
                                                                            the truth, </p>
                                                                        <div className="comments-reply">
                                                                            <Link className="comment-reply-link" href="/"><span>Reply</span></Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ol>
                                            </div>
                                            <div className="comment-respond">
                                                <h3 className="comment-reply-title">Post Comments</h3>
                                                <form onSubmit={submitHandler} id="commentform" className="comment-form">
                                                    <div className="form-textarea">
                                                        <textarea id="comment" placeholder="Write Your Comments..."></textarea>
                                                    </div>
                                                    <div className="form-inputs">
                                                        <input placeholder="Website" type="url" />
                                                        <input placeholder="Name" type="text" />
                                                        <input placeholder="Email" type="email" />
                                                    </div>
                                                    <div className="form-submit">
                                                        <input id="submit" value="Post Comment" type="submit" />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Grid>
            </Dialog>
        </Fragment>
    );
}
export default BlogSingle

