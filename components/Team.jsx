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
import { team } from "../translations/team.js";
import { useRouter } from "next/router.js";
const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};



const Team = () => {
  const { locale} = useRouter();
  const {title, role} = team[locale]
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
  console.log(teams);
  return (
    <>
      <Container id="team" className="team">
        <Row>
          <div className="title">
            <h2>{title}</h2>
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
                      {
                        role.map(roleItem => (
                          <span>
                            {roleItem.type === team.position && roleItem.display}
                          </span>
                        ))
                      }
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
