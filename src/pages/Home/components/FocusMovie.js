import styled from "styled-components";
import React from "react";
import { ReactComponent as ArrowBtn } from "@/assets/icons/arrow_forward_black_24dp 1.svg";
import YouTube, { YouTubeProps } from "react-youtube";

const FocusMovieWrapper = styled.div`
  background: white;
  padding: 100px 0 60px 0;
  display: flex;
  justify-content: center;
`;
const FocusMovieCard = styled.div`
  width: 50%;
  position: relative;
  z-index: 1;
  padding: 80px 110px;
  display: flex;
  justify-content: flex-end;
  &:after {
    content: "";
    top: -5px;
    left: -5px;
    right: -5px;
    left: -5px;
    bottom: -5px;
    position: absolute;
    background: white;
    z-index: -1;
  }
  &:before {
    content: "";
    top: -7px;
    left: -7px;
    right: -7px;
    left: -7px;
    bottom: -7px;
    position: absolute;
    background: linear-gradient(0.25turn, #b7e1cf, #81b0e1);

    z-index: -2;
  }
`;
const FocusMovieCardContent = styled.div`
  width:56%;
  height: 100%;
  div:nth-child(1) {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #00a886;
    margin-bottom: 8px;
  }
  div:nth-child(2) {
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    color: #3d3d3d;
    margin-bottom: 16px;
  }
  div:nth-child(3) {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #6f6f6f;
    margin-bottom: 16px;
  }
`;
const FastBtn = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 24px;
  right: 24px;
  span {
    font-weight: 700;
    font-size: 16px;
    margin-right: 9px;
    margin-top: 5px;
  }
  svg {
    transform: scale(1.5) rotate(-45deg);
  }
`;
const VideoWrapper = styled.div`
  position: absolute;
  left: -20%;
  top: -15%;
  width: 60%;
  height: 63%;
  background: red;
  >div{
    width: 100%;
    height: 100%;
  }
`;

function FocusMovie() {
  const data = {
    title: "驚聲尖叫6",
    synopsis:
      "四名逃過鬼臉殺手毒手的倖存者決定離開伍茲柏勒鎮，沒想到夢魘並沒有結束。這回鬼臉殺手聲稱他不像其他的鬼臉殺手，而蓋兒魏德斯為了要誘捕鬼臉殺手，一群人想盡辦法要將他引到一座聖殿裡面，殊不知鬼臉殺手已經鎖定她正一步步逼近中...",
  };
  const { title, synopsis } = data;
  return (
    <FocusMovieWrapper>
      <FocusMovieCard>
        <FocusMovieCardContent>
          <div>焦點</div>
          <div>{title}</div>
          <div>{synopsis}</div>
          <div className="d-flex gap-2">
            <button type="button" className="btn btn-outline-customBtn1">
              詳細介紹
            </button>
            <button type="button" className="btn btn-outline-customBtn1">
              上映場次
            </button>
          </div>
        </FocusMovieCardContent>
        <VideoWrapper>
          <YouTube
            as={VideoWrapper}
            videoId="fdDz26uwJ08"
            opts={{
              width: "100%",
              height: "100%",
            }}
          />
        </VideoWrapper>
        <FastBtn>
          <span>快速訂票</span>
          <ArrowBtn />
        </FastBtn>
      </FocusMovieCard>
    </FocusMovieWrapper>
  );
}

export default FocusMovie;
