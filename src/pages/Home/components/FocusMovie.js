import styled from "styled-components";
import React from "react";
import { ReactComponent as ArrowBtn } from "@/assets/icons/arrow_forward_black_24dp 1.svg";
import YouTube, { YouTubeProps } from "react-youtube";
import { media } from "@/components/styleMediaQuery";
import { useNavigate } from "react-router";

const FocusMovieWrapper = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  padding: 30px 0;
  ${media.md`
  padding: 100px 0 60px 0;

  `}
`;
const FocusMovieCard = styled.div`
  width: 100vmax;
  display: flex;
  flex-direction: column;
  ${media.md`
    flex-direction: row;
    z-index: 1;
    justify-content: flex-end;
    width: 90vmax;
    position: relative;
    padding: 60px 5%;
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
  `}
  ${media.xl`
    width: 70vmax;
  `}
  ${media.xxl`
    width: 60vmax;
    padding: 80px 110px;
  `}
`;
const VideoWrapper = styled.div`
  width: 100%;
  height: 40vh;
  background: red;
  > div {
    width: 100%;
    height: 100%;
  }
  ${media.md`
  width:calc(100% - 56% - 3%);
  margin-right:3%;
  background: red;
  `}
  ${media.xl`
  position: absolute;
  margin-right:0;
  width: 50%;
  left: -8%;
  top: -15%;
  height: 75%;
  background: red;
  `}
  ${media.xxl`
  width: 55%;
  left: -15%;
  top: -15%;
  height: 75%;
  background: red;
  `}
`;
const FocusMovieCardContent = styled.div`
  width: 100%;
  padding: 20px 12px;
  ${media.md`
    width: 56%;
    height: 100%;
  `}
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

const ContentBtnArea = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  & > button {
    width: 100%;
  }
  ${media.md`
    & > button {
    width: 50%;
  }
  `}
`;

const FastBtn = styled.div`
  background-color: #8c99ae;
  width: calc(100% - 24px);
  color: white;
  padding: 8px 0;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  margin: 0 auto;
  cursor: pointer;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:hover {
    background-color: var(--primaryColor);
  }
  svg {
    display: none;
  }
  ${media.md`
  width: auto;
  background: unset;
  padding:0;
  display: flex;
  align-items: center;
  position: absolute;
  top: 24px;
  right: 24px;
  span {
    color: black;
    font-weight: 700;
    font-size: 16px;
    margin-right: 9px;
    margin-top: 5px;
  }
  svg {
    display: block;
    transform: scale(1.5) rotate(-45deg);
  }
  `}
`;

function FocusMovie(props) {
  const navigate = useNavigate();
  const { data } = props;
  const { _id, movieCName, synopsis, videoUrl } = data;

  function handleNavTicket() {
    navigate(`/ticket/movie/${_id}`);
  }
  function handleNavMovie() {
    navigate(`/movies`);
  }

  return (
    <FocusMovieWrapper>
      <FocusMovieCard>
        <VideoWrapper>
          <YouTube
            as={VideoWrapper}
            videoId={videoUrl}
            opts={{
              width: "100%",
              height: "100%",
            }}
          />
        </VideoWrapper>
        <FocusMovieCardContent>
          <div>焦點</div>
          <div>{movieCName}</div>
          <div>{synopsis}</div>
          <ContentBtnArea>
            <button
              type="button"
              className="btn btn-outline-customBtn1"
              onClick={handleNavTicket}
            >
              上映場次
            </button>
          </ContentBtnArea>
        </FocusMovieCardContent>
        <FastBtn onClick={handleNavMovie}>
          <span>快速訂票</span>
          <ArrowBtn />
        </FastBtn>
      </FocusMovieCard>
    </FocusMovieWrapper>
  );
}

export default FocusMovie;
