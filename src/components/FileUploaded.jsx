import {
  getDownloadURL,
  listAll,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { v4 } from "uuid";
import { storage } from "./firebase.config";
const FileUploaded = ({ setImageList, setLoading }) => {
  const [imageUpload, setImageUpload] = useState(null);
  const [progress, setProgress] = useState(0);
  const handleFileUpload = () => {
    if (imageUpload === null) {
      return toast.error("Please select File for Upload.");
    }
    const imageRef = ref(storage, `images/${imageUpload.name} - ${v4()}`);
    uploadBytes(imageRef, imageUpload).then((response) => {
      getDownloadURL(response.ref).then((url) => {
        setImageList((prev) => [...prev, url]);
        setLoading(true);
      });
      toast.success("Upload file successfully!");
      setImageUpload(null);
    });
    const uploadImage = uploadBytesResumable(imageRef, imageUpload);
    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
        console.log(snapshot, progressPercent);
      },
      (error) => {
        toast.error("something went wrong");
      }
    );
  };

  useEffect(() => {
    const imageListRef = ref(storage, "/images");
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
          setLoading(true);
        });
      });
    });
  }, [setImageList, setLoading]);

  return (
    <section id="fileUploaded">
      <div className="container">
        <FileUploadContainer>
          <div className="input-group">
            <label htmlFor="uploadFile">
              {imageUpload ? imageUpload.name : "Upload Image"}
            </label>
            <input
              type="file"
              onChange={(e) => setImageUpload(e.target.files[0])}
              name="uploadFile"
              id="uploadFile"
            />
            <button onClick={handleFileUpload}>Upload</button>
          </div>
          {progress > 0 && (
            <div className="progressbar">
              <div className="progress" style={{ width: `${progress}%` }}>
                <small>{progress}%</small>
              </div>
            </div>
          )}
        </FileUploadContainer>
      </div>
    </section>
  );
};

const FileUploadContainer = styled.div`
  position: relative;
  text-align: center;
  .progressbar {
    position: relative;
    width: 40%;
    height: 15px;
    background-color: #f8f8f8;
    margin: 1rem auto;
    border-radius: 10px;
    transition: all 0.5s ease;
    .progress {
      position: absolute;
      inset: 0;
      height: 100%;
      background-color: #00a5f0;
      display: grid;
      place-items: center;
      transition: all 0.5s ease;
      border-radius: 10px;

      small {
        font-size: 0.7rem;
        color: #fff;
      }
    }
  }
  .input-group {
    position: relative;
    border: 1px solid #f8f8f8;
    padding: 1rem;
    display: flex;
    align-items: stretch;
    justify-content: center;
    label {
      display: block;

      border: 1px dashed #d8d8d8;
      padding: 0.5rem 1rem;
      width: 40%;
    }
    input {
      border: 1px solid #f8f8f8;
      padding: 0.4rem;
      display: none;
    }
    button {
      padding: 0rem 1rem;
      background-color: #03a9f4;
      border: none;
      outline: none;
      cursor: pointer;
      font-family: "poppins";
      color: #f8f8f8;
    }
  }
`;

export default FileUploaded;
