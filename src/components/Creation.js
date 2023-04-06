import React from "react";
import data from "../galleryItemData";

const Creation = () => {
  const items = data.map((item, idx) => (
    <div key={idx} className="gallery--item">
      <picture>
        <source
          media="(max-width:800px)"
          srcSet={`./images/mobile/${item.img}`}
        />
        <img
          src={`./images/desktop/${item.img}`}
          alt="galleryimage"
          style={{ width: "auto" }}
        />
        <p className="item-text">
          {item.title} <br /> {item.title2}
        </p>
      </picture>
    </div>
  ));

  return (
    <div className="creation">
      <div className="creation--header">
        <p>OUR CREATIONS</p>
        <button className="creation--btn">SEE ALL</button>
      </div>

      <div className="creation--gallery">{items}</div>
    </div>
  );
};

export default Creation;
