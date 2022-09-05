/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../../config/firebaseConfig';
import { Link } from 'react-scroll';
import UrlImage from '../UrlImage';

const HeaderItem = ({items}) => {
  const [languageOption, setLanguageOption] = useState([]);
  const getProjectData =  () => {
     const projectsRef = collection(db, "languageSection");

     if (!projectsRef.empty) {
       onSnapshot(
         projectsRef,
         (snapshot) => {
           let docs = snapshot.docs.map((doc) => ({
             ...doc.data(),
             id: doc.id,
           }));
           setLanguageOption([...docs]);
         },
         (error) => {
           console.log(error);
         }
       );
     }
  }
  console.log("ngonngu", languageOption)
  useEffect(() => {
   getProjectData()
  }, []);
  return (
    <>
      <header className="menu__item">
        <ul>
          {items &&
            items.map((item) => (
              <li key={item.id}>
                <Link activeClass="active" spy={true} to={item.key} offset={-180}>
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              {
                languageOption && 
                languageOption.map((op) => (
                  <>
                    <a href="">{op.name}</a>
                  <UrlImage src={op.icon} width={35} height={30} />
                  </>
                ))
              }
            </li>
        </ul>
      </header>
    </>
  );
}

export default HeaderItem