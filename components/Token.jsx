import React from "react";
import { Container, Row } from "reactstrap";
import Image from "next/dist/client/image";

const Token = () => {
  return (
    <>
      <Container id="token">
        <Row>
          <div className="title">
            <h2>Pre-Sale & Values</h2>
          </div>
          <div className="col-lg-6">
            <div className="token__content">
              <h2>Distribution of Tokens</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="token-list">
                <li>
                  <span className="color-1"></span>03% Gift Code Inventory
                </li>
                <li>
                  <span className="color-2"></span>30% Bounty and Overhead
                </li>
                <li>
                  <span className="color-3"></span>40% It Infastructure
                </li>
                <li>
                  <span className="color-4"></span>50% Legal &amp; Financial
                </li>
                <li>
                  <span className="color-5"></span>70% Branding and Merketing
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="token-image">
                <Image src={"/imgs/token.png"} width={540} height={333.33} alt="img-token" />
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Token;
