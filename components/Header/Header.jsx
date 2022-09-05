import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import Image from "next/dist/client/image";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import HeaderItem from "./HeaderItem";
import classNames from "classnames";
import { query } from "firebase/firestore";
import { orderBy } from "firebase/firestore";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [header, setHeader] = useState([]);
  useEffect(() => {
    const projectRef = query(
      collection(db, "header_item"),
      orderBy("orderBy", "desc")
    );
    if (!projectRef.empty) {
      onSnapshot(
        projectRef,
        (snapshot) => {
          let docs = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setHeader([...docs]);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, []);
  console.log("header", header);
  useEffect(() => {
    const staticHeightOfMenu = 92;

    const onScroll = (e) => {
      const currentScrollYPixel = window.scrollY;

      if (currentScrollYPixel > staticHeightOfMenu) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <>
      <Container>
        <div
          className={classNames("menu", {
            "menu--fixed": isSticky,
          })}
        >
          <div className="menu__logo">
            <Image
              src={"/imgs/logoWhite.svg"}
              width={150}
              height={100}
              alt="logo-header"
            />
          </div>
          <HeaderItem items={header} />
        </div>
      </Container>
    </>
  );
};

export default Header;
