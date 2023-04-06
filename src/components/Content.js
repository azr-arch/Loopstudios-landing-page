import React from "react";

const Content = () => {
  return (
    <div className="content">
      <div className="content--image-wrapper">
        <img
          src="./images/desktop/image-interactive.jpg"
          alt="a man using VR gadget"
        />
        <div className="content--text-wrapper">
          <p className="content--title">The leader in interactive VR</p>

          <p className="content--text">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
