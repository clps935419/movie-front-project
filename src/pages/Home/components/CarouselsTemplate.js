import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import React, { Children } from "react";

const CarouselsWrapper = styled.div`
  width: 100%;
  height: ${(props) => {
    console.log("pr", props);
    return props.height;
  }}px;
  img {
    width: 100%;

    object-fit: cover;
  }
`;
const RightArrow = styled.div`
  border: solid white;
  border-width: 0px 4px 4px 0;
  display: inline-block;
  padding: 7px;
  transform: rotate(-45deg);
  position: relative;
  &:before {
    content: "";
    width: 70px;
    height: 70px;
    border: 2px solid white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-45%, -45%);
    border-radius: 50%;
  }
`;

const LeftArrow = styled.div`
  border: solid white;
  border-width: 0px 4px 4px 0;
  display: inline-block;
  padding: 7px;
  transform: rotate(135deg);
  position: relative;
  &:before {
    content: "";
    width: 70px;
    height: 70px;
    border: 2px solid white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-45%, -45%);
    border-radius: 50%;
  }
`;

function CarouselTemplate({ children, ...rest }) {
  return (
    <Carousel
      as={CarouselsWrapper}
      prevIcon={<LeftArrow />}
      nextIcon={<RightArrow />}
      {...rest}
    >
      {children()}
    </Carousel>
  );
}
export default CarouselTemplate;
