/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container, Row } from "reactstrap";
import Image from "next/image";
import { useState } from 'react';
import { useEffect } from 'react';
import { collection } from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';
import { db } from "../../config/firebaseConfig";
import AboutItem from "./AboutItem";

const About = () => {
  const [about, setAbout] = useState([]);
  useEffect(() => {;
    const projectRef = collection(db, "features_section")
    if(!projectRef.empty) {
      onSnapshot(
        projectRef,
        (snapshot) => {
          let docs = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setAbout([...docs]);
        },
        (error) => {
          console.log(error)
        }
      )
    }
  }, [])
  return (
    <>
      <Container id="about">
        <Row className="about_row">
          {about &&
            about.map((item) => (
              <>
                <div className="col-lg-6 m-auto" key={item.id}>
                  <h2>{item.title}</h2>
                  <p className="about_row_content" dangerouslySetInnerHTML={{ __html: item?.description ?? "", }}>
                    {/* {item.description} */}
                  </p>
                  {/* <ul>
              <li>Platform for launching your ICO</li>
              <li>Token Fixed exchange rates</li>
              <li>Using Smart Contracts system etc</li>
            </ul>
            <button>learn more</button> */}
                </div>
                <div className="col-lg-6">
                  <Image
                    src={"/imgs/about.png"}
                    width={540}
                    height={418.94}
                    objectFit="contain"
                    alt="about-img"
                  />
                </div>
                <AboutItem listItem = {item.listFeaturestem} />
              </>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default About;
