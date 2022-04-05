import React from "react";
import styled from "styled-components";

const ShowImage = () => {
  return (
    <ShowImageContainer>
      <div className="container">
        <div className="title">
          <h1>All of Image</h1>
          <p>get all the image from database </p>
        </div>
        <div className="image-container">
          <div className="image">
            <img
              src="https://raw.githubusercontent.com/Ashik-Mahmud/react-volunteers-app/main/preview.png"
              alt=""
            />
          </div>
          <div className="image">
            <img
              src="https://raw.githubusercontent.com/Ashik-Mahmud/react-volunteers-app/main/preview.png"
              alt=""
            />
          </div>
          <div className="image">
            <img
              src="https://raw.githubusercontent.com/Ashik-Mahmud/react-volunteers-app/main/preview.png"
              alt=""
            />
          </div>
          <div className="image">
            <img
              src="https://raw.githubusercontent.com/Ashik-Mahmud/react-volunteers-app/main/preview.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </ShowImageContainer>
  );
};
const ShowImageContainer = styled.section`
  padding: 2rem 0rem;
  .title {
    padding: 0.4rem 1rem;
    background-color: #f8f8f8;
    border-radius: 5px;
    position: relative;
  }
  .image-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;
    margin: 1rem 0rem;
    .image {
      box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.08);
      border-radius: 4px;
      padding: 0.4rem;
    }
  }
`;
export default ShowImage;
