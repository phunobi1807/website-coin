/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../../config/firebaseConfig';
import UrlImage from '../UrlImage';
import Link from "next/link";
import { useRouter } from "next/router";
import { header_navigation } from '../../translations/header';

const HeaderItem = ({ items }) => {
   const { locale,  asPath } = useRouter();
  const { navItem , language_options  } = header_navigation[locale]
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
 
  useEffect(() => {
   getProjectData()
  }, []);
  return (
    <>
      <header className="menu__item">
        <ul>
          {navItem &&
            navItem.map((item) => (
              <li key={item.content}>
                <Link activeClass="active" spy={true} to={item.key} offset={-180} href=''>
                  {item.content}
                </Link>
              </li>
            ))}
            <li>
              {
                language_options && 
                language_options.map((op) => (
                  <Link
                    activeClassName={op.type}
                    href={asPath}
                    locale={op.type}>
                    <div>

                   {op.display}
                      <UrlImage src={op.icon} width={35} height={30} />
                    </div>
                      
                  </Link>
                ))
              }
            </li>
        </ul>
      </header>
    </>
  );
}

export default HeaderItem