import React from "react";
import { Container, Row } from "reactstrap";

const Contact = () => {
  return (
    <>
      <Container id="contact">
        <Row>
          <div className="col-lg-12 text-center">
            <div className="title">
              <h2>Contact Us</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact__us">
              <h1>Contact With Us</h1>
              <div className="contact__address">
                <h2 className="title__contact__office">THINKTODO:</h2>
                <p>
                  Address:
                  <span aria-disabled="true" className="address">
                    27 Hoang Hoa Tham street, Binh Thanh district, Ho Chi Minh
                    city
                  </span>
                </p>
                <p>
                  Phone:
                  <span aria-disabled="true" className="phone">
                    +84 +84908184981
                  </span>
                </p>
              </div>
              <div className="box__branch">
                <h1 className="title-contact-office">
                  Australia Branch Viet Nam:
                </h1>
                <p>
                  Working Time:
                  <span aria-disabled="true" className="address">
                    9h00-17h00
                  </span>
                </p>
                <p>
                  Address:
                  <span aria-disabled="true" className="address">
                    27 Hoang Hoa Tham street, Binh Thanh district, Ho Chi Minh
                    city,Việt Nam
                  </span>
                </p>
                <p>
                  Phone:
                  <span aria-disabled="true" className="phone">
                    +84 +84908184981
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <form>
              <div className="controls">
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required="required"
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required="required"
                    ></input>
                  </div>
                  <div className="col-lg-12">
                    <input
                      id="form_subject"
                      type="text"
                      name="subject"
                      placeholder="Your Subject"
                      required="required"
                    ></input>
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      id="form_message"
                      name="message"
                      placeholder="Your Message"
                      rows="4"
                      required="required"
                    ></textarea>
                  </div>
                  <div className="col-lg-12 text-center">
                    <div className="contact__button">
                      <button type="submit" className="button">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
