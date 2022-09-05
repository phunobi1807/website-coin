import React, { useState, useEffect } from "react";
import { Container, NavItem, Row } from "reactstrap";
import Image from "next/dist/client/image";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  querySnapshot,
} from "firebase/firestore";
import  {db}  from "../config/firebaseConfig.js";
import UrlImage from "./UrlImage.jsx";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};



const Team = () => {
  const [teams, setTeams] = useState([]);
  useEffect(  () => {
    const projectsRef = collection(db, "team_members");
    if (!projectsRef.empty) {
      onSnapshot(
        projectsRef,
        (snapshot) => {
          let docs = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setTeams([...docs]);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, []);

  return (
    <>
      <Container id="team" className="team">
        <Row>
          <div className="title">
            <h2>Our Team</h2>
          </div>
          {teams &&
            teams.map((team, i) => (
              <div className="col-lg-3" key={team.id}>
                <div className="single__team__box">
                  <div className="team__image">
                    <UrlImage
                      src={team.image}
                      width={298}
                      height={270}
                      alt="team-img"
                      objectFit="cover"
                    />
                    <div className="team__social__icon"></div>
                  </div>
                  <div className="team__info">
                    <h3>{team.name}</h3>
                    <span>{team.position}</span>
                  </div>
                </div>
              </div>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default Team;
