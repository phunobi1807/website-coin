import React from "react";
import { useRouter } from "next/router";
import { contact } from "../translations/contact";
import { Container, Row } from "reactstrap";


const Contact = () => {
  const { locale} = useRouter();
  const { title , subtitle, contact_address, contact_phone, contact_workTime, contact_aus_branch, contact_address_detail, contact_address_aus_detail, form_name, form_email, form_subject, form_message, btn_send  } = contact[locale]
  return (
    <>
      <Container id="contact">
        <Row>
          <div className="col-lg-12 text-center">
            <div className="title">
              <h2>{title}</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact__us">
              <h1>{subtitle}</h1>
              <div className="contact__address">
                <h2 className="title__contact__office">THINKTODO:</h2>
                <p>
                 {contact_address}
                  <span aria-disabled="true" className="address">
                   {contact_address_detail}
                  </span>
                </p>
                <p>
                  {contact_phone}
                  <span aria-disabled="true" className="phone">
                    +84 +84908184981
                  </span>
                </p>
              </div>
              <div className="box__branch">
                <h1 className="title-contact-office">
                {contact_aus_branch}
                </h1>
                <p>
                 {contact_workTime}
                  <span aria-disabled="true" className="address">
                    9h00-17h00
                  </span>
                </p>
                <p>
                 {contact_address}
                  <span aria-disabled="true" className="address">
                {contact_address_aus_detail}
                  </span>
                </p>
                <p>
                {contact_phone}
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
                      placeholder={form_name}
                      required="required"
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      placeholder={form_email}
                      required="required"
                    ></input>
                  </div>
                  <div className="col-lg-12">
                    <input
                      id="form_subject"
                      type="text"
                      name="subject"
                      placeholder={form_subject}
                      required="required"
                    ></input>
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      id="form_message"
                      name="message"
                      placeholder={form_message}
                      rows="4"
                      required="required"
                    ></textarea>
                  </div>
                  <div className="col-lg-12 text-center">
                    <div className="contact__button">
                      <button type="submit" className="button">
                        {btn_send}
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
