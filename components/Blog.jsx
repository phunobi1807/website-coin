import React from "react";
import { Container, Row } from "reactstrap";
import Image from "next/dist/client/image";

const Blog = () => {
  return (
    <>
      <Container id="blog" className="blog">
        <Row>
          <div className="title">
            <h2>Latest Blog</h2>
          </div>
          <div className="col-lg-4">
            <div className="single__blog">
              <div className="post__img">
                <Image
                  src={"/imgs/blog-1.jpg"}
                  width={350}
                  height={245}
                  alt="img-blog"
                />
              </div>
              <div className="blog__content">
                <div className="blog__date">
                  <p>ICO | 20 January - 2021</p>
                </div>
                <div className="blog__body__title">
                  <h3>
                    New Leveraged Pairs Added to Margin Trading on the Crypto
                    Exchange
                  </h3>
                </div>
                <div className="blog__body__text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore veniam dolore.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single__blog">
              <div className="post__img">
                <Image
                  src={"/imgs/blog-1.jpg"}
                  width={350}
                  height={245}
                  alt="img-blog"
                />
              </div>
              <div className="blog__content">
                <div className="blog__date">
                  <p>ICO | 20 January - 2021</p>
                </div>
                <div className="blog__body__title">
                  <h3>
                    New Leveraged Pairs Added to Margin Trading on the Crypto
                    Exchange
                  </h3>
                </div>
                <div className="blog__body__text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore veniam dolore.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single__blog">
              <div className="post__img">
                <Image
                  src={"/imgs/blog-1.jpg"}
                  width={350}
                  height={245}
                  alt="img-blog"
                />
              </div>
              <div className="blog__content">
                <div className="blog__date">
                  <p>ICO | 20 January - 2021</p>
                </div>
                <div className="blog__body__title">
                  <h3>
                    New Leveraged Pairs Added to Margin Trading on the Crypto
                    Exchange
                  </h3>
                </div>
                <div className="blog__body__text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore veniam dolore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Blog;
