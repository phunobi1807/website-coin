import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import Link from "next/link";
import { useRouter } from "next/router";

import Image from "next/dist/client/image";
import { db } from "../../config/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import SerViceItem from "./Services";
const service = {
  'en': {
    title: 'Our Services'
  },
  'vn': {
    title: 'Dịch vụ'

  }
}
const Services = () => {
     const { locale,  asPath } = useRouter();
  const { title  } = service[locale]
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
            <h2>{ title}</h2>
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
