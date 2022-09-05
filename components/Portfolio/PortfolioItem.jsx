import React from "react";
import UrlImage from "../UrlImage";
import useState from "react";

const PortfolioItem = ({ listItem, tags, filterPort }) => {
  // const [item, setItem] = useState([]);
  // setItem(listItem);
  const array = [];
  Object.keys(listItem).forEach((key) => {
    // convert object to array
    array.push({ [key]: listItem[key] });
  });
  console.log("array", array);

  return (
    <>
      {Array.isArray(array)
        ? array.map((item) => (
            <>
              <div className="col-lg-3" key={item.id}>
                <UrlImage
                  src={
                    tags?.includes("mobile")
                      ? item[0]?.banner
                      : item[1]?.representive_image
                  }
                  width={255}
                  height={286}
                  alt="img-portfolio"
                  objectFit="contain"
                />
              </div>
            </>
          ))
        : "haha"}
    </>
  );
};

export default PortfolioItem;
