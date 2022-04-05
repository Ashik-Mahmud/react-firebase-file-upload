import React from "react";
import styled from "styled-components";
import { Loading } from "./Loading";

const ShowImage = ({ imageList, loading }) => {
  return (
    <ShowImageContainer>
      <div className="container">
        <div className="title">
          <h1>All of Image</h1>
          <p>get all the image from database </p>
        </div>
        {loading ? (
          <div className="image-container">
            {imageList.map((image, ind) => {
              return (
                <div className="image" key={ind}>
                  <img src={image} alt="avatar" />
                </div>
              );
            })}
          </div>
        ) : (
          <Loading />
        )}
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
      height: 340px;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center center;
      }
    }
  }
`;
export default ShowImage;
