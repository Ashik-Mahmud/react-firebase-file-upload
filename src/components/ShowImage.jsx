import { deleteObject, ref } from "firebase/storage";
import React from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { storage } from "./firebase.config";
import { Loading } from "./Loading";
const ShowImage = ({ imageList, setImageList, loading }) => {
  const handleDelete = async (url) => {
    const deleteRef = ref(storage, url);
    await deleteObject(deleteRef)
      .then(() => {
        toast.success("Image Deleted Successfully");
        const deletedItem = imageList.filter((image) => image !== url);
        setImageList(deletedItem);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong");
      });
  };
  return (
    <ShowImageContainer>
      <div className="container">
        <div className="title">
          <h1>All of Image</h1>
          <p>get all the image from database </p>
        </div>
        {loading ? (
          <div className="image-container">
            {imageList.length > 0
              ? imageList.map((image, ind) => {
                  return (
                    <div className="image" key={ind}>
                      <img src={image} alt="avatar" />
                      <button
                        onClick={() => {
                          if (window.confirm("Do you delete?")) {
                            handleDelete(image, ind);
                          }
                        }}
                        className="delete-btn"
                      >
                        &times;
                      </button>
                    </div>
                  );
                })
              : "No Image Upload yet."}
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
      position: relative;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center center;
      }
      .delete-btn {
        position: absolute;
        right: -10px;
        top: -10px;
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        background: salmon;
        border: none;
        outline: none;
        border-radius: 50%;
        font-size: 1.3rem;
        cursor: pointer;
        color: #fff;
      }
    }
  }
`;
export default ShowImage;
