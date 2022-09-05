import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import Image from "next/dist/client/image";
import { db } from "../../config/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import SerViceItem from "./Services";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const projectRef = collection(db, "services_section");
    if (!projectRef.empty) {
      onSnapshot(
        projectRef,
        (snapshot) => {
          let docs = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setServices([...docs]);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, []);
  console.log(services);

  return (
    <>
      <Container id="services">
        <Row>
          <div className="title">
            <h2>Our Services</h2>
          </div>
          {services &&
            services.map((service, i) => (
              <>
                <SerViceItem items={service.listServiceItem} />
              </>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default Services;
