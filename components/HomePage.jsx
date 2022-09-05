import React, {useState, useEffect} from "react";
import { Container, Row } from "reactstrap";
import Image from "next/image";
import { collection, doc } from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';
import { db } from "../config/firebaseConfig";

const HomePage = () => {
  const [homePage, setHomePage] = useState([]);
  useEffect(() => {
    const projectRef = collection(db, "header_section");
    if(!projectRef.empty) {
      onSnapshot(
        projectRef,
        (snapshot) => {
          let docs = snapshot.docs.map((doc)=>({
            ...doc.data(),
            id: doc.id,
          }));
          setHomePage([...docs]);
        },
        (error) => {
          console.log(error)
        }
      )
    }
}, [])
console.log(homePage)
  return (
    <>
      <Container id="home">
        <Row>
          <div className="col-lg-6">
            {homePage &&
              homePage.map((item) => (
                <div className="content" key={item.id}>
                  <h1>{item.title}</h1>
                  <p>
                    {item.description}
                  </p>
                  {/* <button>get started</button> */}
                </div>
              ))}
          </div>
          <div className="col-lg-6">
            <div className="img">
              <Image
                className="img"
                src={"/imgs/homepage-img.png"}
                width={540}
                height={475.75}
                alt="about-img"
                objectFit="contain"
              />
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
