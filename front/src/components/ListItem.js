import React from "react";
import styled from "styled-components";

const ImgBox = styled.div`
  width: 100%;
  min-height: 100px;
  background: #e5e5e5;
  img {
  }
`;

const ItemBox = styled.li`
  min-height: 250px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  padding: 10px;

  h2 {
    font-size: 25px;
    margin: 15px 0;
  }
  p {
    margin-bottom: 15px;
    overflow: hidden;
  }
  button {
    height: 30px;
    width: 90%;

    background: rgb(30, 66, 148);
    color: white;
    border: none;
    border-radius: 3px;
    align-self: center;
    outline: white;

    cursor: pointer;
  }

  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 3px gray;
  }
`;

export default function ListItem() {
  return (
    <ItemBox>
      <ImgBox>
        <img src="" alt="" />
      </ImgBox>
      <h2>주제</h2>
      <p>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
        laying out print, graphic or web designs.
      </p>
      <button>더보기</button>
    </ItemBox>
  );
}
