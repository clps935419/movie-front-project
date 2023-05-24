import styled from "styled-components";
import { ReactComponent as Calendar } from "@/assets/icons/event_available_black_24dp 1.svg";
import { ReactComponent as Time } from "@/assets/icons/schedule_black_24dp 1.svg";
import { ReactComponent as ArrowCircle } from "@/assets/icons/arrow_circle_right.svg";

const CardWrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: url(${(props) => props.imgUrl});
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
`;
const RateArea = styled.div`
  position: absolute;
  top: 24px;
  left: 32px;
  border-radius: 15px;
  background: ${(props) => props.currentRateColor};
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  padding: 4px 8px;
`;
const CardContent = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 0px 0px 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px 16px 32px;
`;
const CardContentText = styled.div`
  width: 70%;
  > div:nth-child(1) {
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    margin-bottom: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  > div {
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    svg {
      margin-right: 11px;
      fill: white;
    }
    span {
      padding-top: 4px;
    }
  }
`;
const NavTicketBtn = styled.div`
  background-color: #f3f3f3;
  border-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 50%;
  padding: 11px 19px 11px 16px;
  cursor: pointer;
  &:hover {
    background-color: #31e2ce;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  span {
    color: #000000;
    font-weight: 400;
    font-size: 16px;
    white-space: nowrap;
  }
`;

function MovieCardTemplate({ dataObj, width = "30vh", height = "30vh" }) {
  const { movieCName, imgUrl, inTheatersTime, movieTime, rating } = dataObj;
  const rateObj = {
    G: {
      text: "普遍級",
      color: "#AAF07C",
    },
    PG: {
      text: "輔導級",
      color: "#FFF1AB",
    },
    R: {
      text: "限制級",
      color: "#FFC2DF",
    },
  };
  const currentRateText = rateObj[rating].text;
  const currentRateColor = rateObj[rating].color;

  function convertToHourMinute(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return hours + "時" + remainingMinutes + "分";
  }
  return (
    <CardWrapper imgUrl={imgUrl} width={width} height={height}>
      <RateArea currentRateColor={currentRateColor}>{currentRateText}</RateArea>
      <CardContent>
        <CardContentText>
          <div>{movieCName}</div>
          <div>
            <Calendar />
            <span>{convertToHourMinute(movieTime)}</span>
          </div>
          <div>
            <Time />
            <span>{inTheatersTime.substring(0, 10)}</span>
          </div>
        </CardContentText>
        <NavTicketBtn>
          <span>前往訂票</span>
          <ArrowCircle />
        </NavTicketBtn>
      </CardContent>
    </CardWrapper>
  );
}
export default MovieCardTemplate;
