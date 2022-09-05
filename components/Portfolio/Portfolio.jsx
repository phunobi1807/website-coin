/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import { collection, onSnapshot } from "firebase/firestore";
import React from "react";
import { useEffect, useState } from "react";
import { Button, Container, Row } from "reactstrap";
import { db } from "../../config/firebaseConfig";
import PortfolioItem from "./PortfolioItem";
import classNames from "classnames";
import UrlImage from "../UrlImage";
import { async } from '@firebase/util';

const Portfolio = () => {
  const [projectList, setProjectList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [filter, setFilter] = useState("all");
  const getProjectData = async () => {
     const projectsRef = collection(db, "projects");

     if (!projectsRef.empty) {
       onSnapshot(
         projectsRef,
         (snapshot) => {
           let docs = snapshot.docs.map((doc) => ({
             ...doc.data(),
             id: doc.id,
           }));
           setProjectList([...docs]);
         },
         (error) => {
           console.log(error);
         }
       );
     }
  }
  useEffect(() => {
   getProjectData()
  }, []);
  console.log("project", projectList);
  // const filterPort = (tag) => {
  //   const updateProject = projectList?.filter((x) =>
  //     x.tags?.find((a) => a === tag)
  //   );
  //   setProjectList([...updateProject]);
    

  //   // const updatedList = projectList.filter((x) => x.tags === tag);
  // };
  console.log("update", projectList);
  // chịu ...
  console.log("projecttag", projectList);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  const ButtonTags = () => {
    return (
      <>
        <div className="buttons d-flex  justify-content-center pb-5">
          <button
            className={
              activeIndex === 0
                ? "btn btn-outline-light me-2 active"
                : "btn btn-outline-light me-2"
            }
            onClick={() => [setFilter("all"), handleOnClick(0)]}
          >
            All
          </button>
          <button
            className={
              activeIndex === 1
                ? "btn btn-outline-light me-2 active"
                : "btn btn-outline-light me-2"
            }
            onClick={() => [setFilter("website"), handleOnClick(1)]}
          >
            Website
          </button>
          <button
            className={
              activeIndex === 2
                ? "btn btn-outline-light me-2 active"
                : "btn btn-outline-light me-2"
            }
            onClick={() => [setFilter("mobile"), handleOnClick(2)]}
          >
            Mobile
          </button>
          <h1>{projectList.title}</h1>
        </div>
      </>
    );
  };

  return (
    <>
      <Container id="projects">
        <Row>
          <h2 className="title">OUR PORTFOLIO</h2>
          <p className="subtitle">
            We are a small team with great skills. See the faces behind the
            lines of code.!Let's see our projects.
          </p>
          <ButtonTags />

          {projectList.filter(e => e?.tags?.includes(filter)).map((list) => (
            <>
              <div className="col-lg-3 p-0" key={list.id}>
                <div className="imgs">
                  <UrlImage
                  src={
                     list.image.representive_image
                    // list.image.banner
                  }
                  databaseName="projectList"
                  width={"100vw"}
                  height={239}
                  alt="img-portfolio"
                 
                  layoutType="fill"
                />
                </div>
              </div>
            </>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Portfolio;
