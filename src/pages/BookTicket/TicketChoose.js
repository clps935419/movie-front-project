import { apiTicket } from "@/api";
import { media } from "@/components/styleMediaQuery";
import _ from "lodash";
import { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row
} from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  selectCurrentChooseTicket,
  selectCurrentTicketTotalCount,
  setCurrentChooseTickets,
} from "../../store/slice/ticketsSlice";
import ChooseTicketTable from "./components/ChooseTicketTable";

const { getSessionTicketTypes } = apiTicket;

const NavBtn = styled.button`
  padding: 5px 22px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;

  ${media.md`
    width:50%;
    margin:0;
  `};
`;


const TICKET_TYPE_KEY = {
  package: "套票",
  group: "團體票",
  single: "電影票",
};

export default function TicketChoose() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { sessionId } = useParams();
  const [currentType, setCurrentType] = useState("package"); //目前在哪個票種分類
  const [ticketTypeObj, setTicketTypeObj] = useState({}); //API拿回來分類的資料
  console.log("ite", ticketTypeObj);
  const myTicketTotalCount = useSelector(selectCurrentTicketTotalCount);
  const currentChooseTicket = useSelector(selectCurrentChooseTicket);

  useEffect(() => {
    dispatch(setCurrentChooseTickets({}));
  });

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { data },
        } = await getSessionTicketTypes({
          params: { id: sessionId },
        });
        const groupData = data.reduce((accumulator, currentValue) => {
          for (const [key, value] of Object.entries(TICKET_TYPE_KEY)) {
            accumulator[key] = accumulator[key] ?? [];
            if (value === currentValue.type) {
              currentValue["currentTicketCount"] = 0;
              accumulator[key].push(currentValue);
            }
          }
          return accumulator;
        }, {});
        setTicketTypeObj(groupData);
      } catch (error) {
        console.log("🚀 ~ file: TicketChoose.js:25 ~ error:", error);
      }
    })();
  }, [sessionId]);

  //redux撈回來的值做預設值處理 之後再做
  // useEffect(() => {
  //   const tmpCurrentArr = ticketTypeObj[currentType];
  //   if(tmpCurrentArr.length===0){
  //     return;
  //   }
  //   tmpCurrentArr.map((item) => {
  //     const {_id} = item;
  //     if (!!currentChooseTicket[_id]) {
  //       return {
  //         ...item,
  //       };
  //     }
  //   });
  // }, [
  //   JSON.stringify(ticketTypeObj),
  //   currentType,
  //   JSON.stringify(currentChooseTicket),
  // ]);

  function handleTicketChoose({ e, ticketObj }) {
    const num = e.target.value;
    ticketObj = {
      ...ticketObj,
      currentTicketCount: parseInt(num),
    };
    setTicketTypeObj((prevState) => {
      const updatedObj = { ...prevState };
      updatedObj[currentType] = updatedObj[currentType].map((item) =>
        item._id === ticketObj._id ? ticketObj : item
      );
      return updatedObj;
    });
    dispatch(setCurrentChooseTickets(ticketObj));
    sessionStorage.setItem("currentChooseTickets", JSON.stringify(ticketObj));
  }
  function handleNavToSeat() {
    navigate(`/ticket/${sessionId}/seats`);
  }

  if (_.isEmpty(ticketTypeObj)) {
    return <></>;
  }

  return (
    <>
      <Container>
        <Row className="my-3 border-bottom border-top">
          <Col
            md={4}
            style={{ backgroundColor: "#B7B7B7" }}
            className="text-center"
          >
            <h4 className="pt-3 pb-1" style={{ letterSpacing: "10px" }}>
              選取票種
            </h4>
          </Col>
          <Col md={8} className="d-flex align-items-center justify-content-end p-sm-0">
            <NavBtn
              type="button"
              className="btn btn-outline-customBtn1"
              onClick={handleNavToSeat}
            >
              已選取{myTicketTotalCount}張票：開始選位
            </NavBtn>
          </Col>
        </Row>
        <Tabs
          id="controlled-tab-example"
          activeKey={currentType}
          onSelect={(k) => {
            setCurrentType(k);
          }}
          className="mb-3"
        >
          {Object.keys(TICKET_TYPE_KEY).map((type) => {
            return (
              <Tab key={type} eventKey={type} title={TICKET_TYPE_KEY[type]}>
                <ChooseTicketTable
                  dataArr={ticketTypeObj[currentType]}
                  handleTicketChoose={handleTicketChoose}
                />
              </Tab>
            );
          })}
        </Tabs>
      </Container>
    </>
  );
}
