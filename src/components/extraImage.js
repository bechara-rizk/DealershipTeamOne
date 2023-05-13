import React from "react";
import myImage from "images/road2.jpg"; 

const ImagePage = () => {
  return (
    <div>
      <h1>Image Page</h1>
      <img src={myImage} alt="My Image" />
    </div>
  );
};

export default ImagePage;
