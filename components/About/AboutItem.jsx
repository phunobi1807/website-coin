/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import UrlImage from '../UrlImage';

const AboutItem = ({listItem, aboutItem}) => {
  return (
    <>
      {aboutItem &&
        aboutItem.map((item, index) => (
          <>
            <div className="col-lg-3 pt-5" key={listItem[index].id}>
              <div className="card">
                <div className="card_box">
                  <UrlImage className="card_img" src={listItem[index].image} size="100vw" alt="img-about" />
                </div>
              </div>
              <p className="card_title">{item.title.substring(0, 26)}</p>
              <p className="card__text" dangerouslySetInnerHTML={{ __html: item?.description ?? "", }}>
                
              </p>
            </div>
          </>
        ))}
    </>
  );
}

export default AboutItem