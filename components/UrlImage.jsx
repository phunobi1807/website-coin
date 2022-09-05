import React, { useEffect, useState } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export default function UrlImage(props) {
  const [imageUrl, setImageUrl] = useState("");
  const storage = getStorage();
  const [loading, setLoading] = useState(false);

  const getImage = () => {
    if (props.src) {
      setLoading(true);
      getDownloadURL(ref(storage, props.src))
        .then((url) => {
          setImageUrl(url);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
          return false;
        });
    } else {
      return null;
    }
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <>
      {!loading ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageUrl}
          width={props.width}
          height={props.height}
          className={props.className}
          alt={props.alt}
        />
      ) : (
        <div>loading ...</div>
      )}
    </>
  );
}
