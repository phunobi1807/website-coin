import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import CountUp from "react-countup";
import { collection, onSnapshot, query, queryOneDocumentByLimit, orderBy, limit } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { counter } from "../translations/counter";
import { useRouter } from "next/router";

const Counter = () => {
  const { locale} = useRouter();
  const {count_item} = counter[locale]
  const [count, setCount] = useState([]);
  useEffect(() => {
    const counterRef = query(
      collection(db, "counter_section"),
      orderBy("updatedAt", "desc"),
      limit(4)
    );
    onSnapshot(
      counterRef,
      (snapshot) => {
        if (!snapshot.empty) {
          let array = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setCount([...array]);
        } else {
          setCount(null);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }, [])
    console.log(count)
  return (
    <>
      <Container id="counter">
        <Row>
          {count_item && count &&
            count_item.map((item, index) => (
              <>
                <div className="col-lg-3">
                  <div className="single__counter" key={count[index]?.id}>
                    <div className="counter__contents">
                      <h2>
                        <span className="counter__number">
                          <CountUp start={0} end={count[index]?.number} duration={2.75} />
                        </span>
                        <span>+</span>
                      </h2>
                      <h3 className="counter__heading">{item.display}</h3>
                    </div>
                  </div>
                </div>
              </>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default Counter;
