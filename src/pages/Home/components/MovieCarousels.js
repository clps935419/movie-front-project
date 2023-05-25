import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import React, { Children, useEffect, useRef, useState } from "react";
import CarouselTemplate from "./CarouselsTemplate";
import MovieCardTemplate from "./MovieCardTemplate";
import { breakpoints } from "@/components/styleMediaQuery";

const AllWrapper = styled.div`
    /* padding-top: 40px; */
`;

const MovieCarouselsWrapper = styled.div`
  padding: 0px 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
`;
const MovieCarouselsItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  >div{
    flex: 1;
  }
`;
const RightArrow = styled.div`
  border: solid #b7b7b7;
  border-width: 0px 4px 4px 0;
  display: inline-block;
  padding: 7px;
  transform: rotate(-45deg);
  position: relative;

  &:before {
    content: "";
    width: 70px;
    height: 70px;
    border: 2px solid #b7b7b7;
    position: absolute;
    top: 50%;
    left: 40%;
    transform: translate(-45%, -45%);
    border-radius: 50%;
  }
`;

const LeftArrow = styled.div`
  border: solid #B7B7B7;;
  border-width: 0px 4px 4px 0;
  display: inline-block;
  padding: 7px;
  transform: rotate(135deg);
  position: relative;
  &:before {
    content: "";
    width: 70px;
    height: 70px;
    border: 2px solid #B7B7B7;;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-45%, -45%);
    border-radius: 50%;
  }
`;
const Title = styled.div`
  font-weight: 400;
  font-size: 36px;
  text-align: center;
  margin-bottom: 20px;
`;

function MovieCarousels({ children, ...rest }) {
  const { title, dataArr } = rest;
  const [newDataArr, setNewDataArr] = useState([]);
  const { sm, md, lg, xl, xxl } = breakpoints;
  useEffect(() => {
    const checkWindowWidth = () => {
      const isSM = window.matchMedia(`(max-width: ${sm})`).matches;
      const isMD = window.matchMedia(
        `(min-width: ${sm}) and (max-width: ${md})`
      ).matches;
      const isLG = window.matchMedia(
        `(min-width: ${md}) and (max-width: ${lg})`
      ).matches;
      const isXL = window.matchMedia(
        `(min-width: ${lg}) and (max-width: ${xl})`
      ).matches;
      const isXXL = window.matchMedia(
        `(min-width: ${xl}) and (max-width: ${xxl})`
      ).matches;

      if (isSM) {
        getProcessData({ dataArr, showNum: 1 });
      } else if (isMD) {
        getProcessData({ dataArr, showNum: 1 });
      } else if (isLG) {
        getProcessData({ dataArr, showNum: 1 });
      } else if (isXL) {
        getProcessData({ dataArr, showNum: 2});
      } else if (isXXL) {
        getProcessData({ dataArr, showNum: 2 });
      }else{
        getProcessData({ dataArr, showNum: 3 });
      }
    };
    // 監聽窗口大小變化並執行檢查
    window.addEventListener("resize", checkWindowWidth);

    // 初始化時立即執行一次檢查
    checkWindowWidth();

    // 清除事件監聽器
    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, [sm, md, lg, xl, xxl]);

  function getProcessData({ dataArr, showNum = 1 }) {
    console.log('data',dataArr)
    const result = dataArr.reduce((acc, curr, index) => {
      console.log("acc", acc, "curr", curr, "index", index);
      if (index % showNum === 0) {
        acc.push([curr]);
      } else {
        acc[acc.length - 1].push(curr);
      }
      return acc;
    }, []);
    setNewDataArr(result);
  }

  return (
    <AllWrapper>
      <Title>{title}</Title>
      <CarouselTemplate
        as={MovieCarouselsWrapper}
        prevIcon={<LeftArrow />}
        nextIcon={<RightArrow />}
        indicators={false}
      >
        {() =>
          newDataArr.map((itemArr, index) => {
            return (
              <Carousel.Item key={index}>
                <MovieCarouselsItem>
                  {itemArr.map((item) => {
                    return <MovieCardTemplate dataObj={item} />;
                  })}
                </MovieCarouselsItem>
              </Carousel.Item>
            );
          })
        }
      </CarouselTemplate>
    </AllWrapper>
  );
}
export default MovieCarousels;
