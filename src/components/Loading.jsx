import React from "react";
import styled from "styled-components";

export const Loading = () => {
  return (
    <Loader>
      <img
        src="https://thumbs.gfycat.com/GeneralUnpleasantApisdorsatalaboriosa-size_restricted.gif"
        alt="loading"
      />
    </Loader>
  );
};
const Loader = styled.div`
  text-align: center;
  margin: 3rem 0rem;
`;
