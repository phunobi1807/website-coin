import React, {useState, useEffect} from "react";
import { Container, Row } from "reactstrap";
import Image from "next/image";
import { collection, doc } from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';
import { db } from "../config/firebaseConfig";
import Link from "next/link";
import { useRouter } from "next/router";
import { homepage } from "../translations/homepage";
const HomePage = () => {
  const { locale} = useRouter();
  const { title , description  } = homepage[locale]
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
          
                <div className="content" >
                  <h1>{title}</h1>
                  <p>
                    {description}
                  </p>
                  {/* <button>get started</button> */}
                </div>
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
