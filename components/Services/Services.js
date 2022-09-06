import React from "react";
import Image from "next/dist/client/image";
import UrlImage from "../UrlImage";

const SerViceItem = ({ items, service_item }) => {
  return (
    <>
      {service_item &&
        service_item.map((item, index) => (
          <div className="col-lg-3" key={items[index].id}>
            <div className="card">
              <div className="img-services">
                <UrlImage
                  src={items[index].image}
                  size="100vw"
                  alt="img-services"
                  objectFit="cover"
                  layoutType="fill"
                />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default SerViceItem;
