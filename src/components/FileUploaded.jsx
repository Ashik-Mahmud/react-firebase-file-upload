import React, { useState } from "react";
import styled from "styled-components";

const FileUploaded = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const handleFileUpload = () => {
    console.log(imageUpload);
  };
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
        </FileUploadContainer>
      </div>
    </section>
  );
};

const FileUploadContainer = styled.div`
  position: relative;
  text-align: center;
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
      background-color: green;
      border: none;
      outline: none;
      cursor: pointer;
      font-family: "poppins";
      color: #f8f8f8;
    }
  }
`;

export default FileUploaded;
