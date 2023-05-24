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

const dataArr = [
  {
    imgUrl: "https://picsum.photos/seed/red/1920/830",
    movieCName: "First slide label",
    inTheatersTime: "2023.1.2",
    outOfTheatersTime: "2023.4.2",
  },
  {
    imgUrl: "https://picsum.photos/seed/apple/1920/830",
    movieCName: "second slide label",
    inTheatersTime: "2023.1.2",
    outOfTheatersTime: "2023.4.2",
  },
  {
    imgUrl: "https://picsum.photos/seed/rww/1920/830",
    movieCName: "Third slide label",
    inTheatersTime: "2023.1.2",
    outOfTheatersTime: "2023.4.2",
  },
];

function BannerCarousels({ children, ...rest }) {
  // const { dataArr } = props;
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
                <p className="carousel-caption__time">{`${inTheatersTime} ~ ${outOfTheatersTime}`}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })
      }
    </CarouselTemplate>
  );
}
export default BannerCarousels;
