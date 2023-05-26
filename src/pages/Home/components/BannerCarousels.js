import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import React, { Children } from "react";
import CarouselTemplate from "./CarouselsTemplate";

const CarouselsWrapper = styled.div`
  height: 830px;
  img {
    width: 100%;
    height: 830px;
    object-fit: cover;
  }
`;
const CarouselCaption = styled.div`
  top: 45%;
  padding: 0;
  .carousel-caption__title {
    font-size: 60px;
  }
  .carousel-caption__time {
    font-size: 30px;
  }
`;

function BannerCarousels({ children, ...rest }) {
  const { dataArr } = rest;
  return (
    <CarouselTemplate as={CarouselsWrapper}>
      {() =>
        dataArr.map((item) => {
          const { imgUrl, movieCName, inTheatersTime, outOfTheatersTime } =
            item;
          return (
            <Carousel.Item key={movieCName}>
              <img className="d-block w-100" src={imgUrl} alt={movieCName} />
              <Carousel.Caption as={CarouselCaption}>
                <div className="carousel-caption__title">{movieCName}</div>
                <p className="carousel-caption__time">{`${formatDateString(
                  inTheatersTime
                )} ~ ${formatDateString(outOfTheatersTime)}`}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })
      }
    </CarouselTemplate>
  );
}

function formatDateString(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}
export default BannerCarousels;
