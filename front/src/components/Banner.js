import React from "react";
import styled from "styled-components";
import IMG from "../assets/img/1.jpg";
import { FaTools } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const BtnWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  div {
    width: 220px;
    height: 130px;
    margin: 30px;
    background: rgb(30, 66, 148);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    color: white;
    box-shadow: 0 0 2px white;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      box-shadow: 0 3px 4px gray;
      transform: translateY(-3px) scale(1.03);
    }
    i {
      font-size: 30px;
    }
    span {
      font-size: 18px;
    }
  }
`;
export const Positioner = styled.div`
  margin: 0 auto;
  max-width: 1600px;
  height: 130px;
  background: rgb(219, 236, 248);
`;
export const Visual = styled.div`
  height: 700px;
  margin: 0 auto;
  max-width: 1600px;
  background-image: url(${IMG});
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 160px;
    align-self: center;

    font-size: 55px;
    font-weight: bold;
    text-shadow: 0 0 10px #eeeeee;
  }
`;

export default function Banner() {
  return (
    <div>
      <Positioner />
      <Visual>
        <h1>모시기 저시기 하나둘셋넷</h1>
        <BtnWrapper>
          <Link to="">
            <div>
              <i>
                <RiTeamFill />
              </i>
              <span>팀원모집</span>
            </div>
          </Link>
          <Link to="">
            <div>
              <i>
                <FaTools />
              </i>
              <span>프로젝트 관리</span>
            </div>
          </Link>
        </BtnWrapper>
      </Visual>
    </div>
  );
}