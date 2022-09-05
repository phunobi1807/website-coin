/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../../config/firebaseConfig';
import Link from "next/link";
import UrlImage from '../UrlImage';
import { useRouter } from "next/router";
const header_navigation = {
  'en': {
    navItem: [
        { content: "Features" },
        { content: "Home" },
        { content: "Blog" },
        { content: "Contact" },
        { content: "Services" },
        { content: "Team" },
        { content: "Projects" }
    ]
  },
  'vn': {
     navItem: [
        { "content": "Tính năng" },
        { "content": "Trang chủ" },
        { "content": "Blog" },
        { "content": "Liên hệ" },
        { "content": "Dịch vụ" },
        { "content": "Đội nhóm" },
        { "content": "Dự án" }
    ]
  }
}
const HeaderItem = ({ items }) => {
   const { locale,  asPath } = useRouter();
  const { navItem   } = header_navigation[locale]
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
                languageOption && 
                languageOption.map((op) => (
                  <Link
                    activeClassName={op.name === 'Viet Nam' ? 'vn' : 'en'}
                    href={asPath}
                    locale={op.name === 'Viet Nam' ? 'vn' : 'en'}>
                    <div>

                   {op.name}
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