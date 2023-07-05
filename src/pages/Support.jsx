import React from 'react'
import '../styles/support.css'
import customerSupport from '../assets/images/thumbnail/customer-support.png'
import Form from 'react-bootstrap/Form';

const Support = () => {
  return (
    <>
        <section className="support-index">
        <div className="container">
            <div className="row">
                <div className="support-main" style={{background: 'hsl(240deg 14% 93%)'}}>
                    <div className="support-content col-lg-6 col-12">
                        <h1>Support</h1>
                        <p>Find additional customer support arcitles and FAQ.</p>
                    </div>
                    <div className="support-img col-lg-6 col-12">
                        <img src={customerSupport} alt="Customer Support Image" />
                    </div>
                </div>
            </div>
        </div>
        </section>
        <section className="contact-index">
            <div className="container">
                <div className="row">
                    <div className="contact-main">
                        <div className="contact-about col-lg-4 col-md-6">
                            <h2>Contact</h2>
                            <div className='btn-main'>
                                <button className='btn-default'>Contact Support</button>
                            </div>
                            <div className="contact-wrapper">
                            <p>Headquarters</p>
                                <strong>Address</strong>
                                <p>
                                15736 E. Valley Blvd <br/>
                                City of Industry<br/>
                                CA, 91744-3927<br/>
                                </p>
                                <strong>Phone</strong>
                                <p>+1-626-385-8272</p>
                                <strong>Support</strong>
                                <p>+800-228-9395</p>
                            </div>
                            <div className="contact-wrapper">
                                <p>Customer Support Hours</p>
                                <div className='d-flex gap-1'>
                                <strong>Monday - Friday:</strong>
                                <p>
                                15736 E. Valley Blvd
                                </p>
                                </div>
                                <strong>Holiday Schedule</strong>
                                <p>New Years Day - 01/02 <br/>
                                Martin Luther King Jr. Day - 01/16<br/>
                                President’s Day - 02/20<br/>
                                Memorial Day - 05/29<br/>
                                Juneteenth - 06/19<br/>
                                Independence Day - 07/04<br/>
                                Labor Day - 09/04<br/>
                                Thanksgiving Day - 11/23<br/>
                                Black Friday - 11/25<br/>
                                </p>
                                <div>
                                    <p>If you are experiencing delays reaching us via phone, please head to our live chat by clicking the ‘Support’ bubble on the bottom right corner of your screen. Thank you for your patience! 💜</p>
                                </div>
                            </div>
                        </div>
                        <div className="article-main col-lg-8 col-md-6">
                            <h2>Search for help articles</h2>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Search for help articles</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <div className="btn-article">
                                    <button className='btn-default'>
                                        Browse Articles
                                    </button>
                                </div>
                            </Form>
                            <div className="article-wrapper">
                            <div className="article-item">
                                <h3>WIN WIN ATTITUDE</h3>
                                <p>“We put our customers first”. Our mission is to provide our customers a winning
                                 solution in response to their customer support request.</p>
                            </div>
                            <div className="article-item">
                                <h3>BE HUMBLE</h3>
                                <p>We are gamers ourselves and we respect the community we come from. This keeps us humble and reminds us to keep improving.</p>
                            </div>
                            <div className="article-item">
                                <h3>SERVICE WOW!</h3>
                                <p>We believe that there is a service above and beyond what exists as the norm. We strive to deliver more and exceed expectations in consumer satisfaction.</p>
                            </div>
                            <div className="article-item">
                                <h3>EFFICIENCY & QUALITY</h3>
                                <p>It’s important to us that our customer service is reliable, receptive, prompt in follow ups and offers easy-to-use self-help tools.</p>
                            </div>
                            <div className="article-item">
                                <h3>TEAM WORK</h3>
                                <p>Our teamwork inspires people to make their best contributions- we share lessons learnt, identify areas to improve upon and celebrate our shared accomplishments.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>

  )
}

export default Support