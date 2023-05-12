import React from "react";
import myImage from "../path/to/your/image.jpg"; //to do: Replace "../path/to/your/image.jpg" with the actual path to your image file

const ImagePage = () => {
  return (
    <div>
      <h1>Image Page</h1>
      <img src={myImage} alt="My Image" />
    </div>
  );
};

export default ImagePage;
