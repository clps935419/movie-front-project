import _ from "lodash";
import { useEffect } from "react";
import { useMemo, useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  Row,
  Table,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { apiTicket } from "@/api";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import {
  selectCurrentTicketTotalCount,
  setCurrentChooseTickets,
} from "../../store/slice/ticketsSlice";
import styled from "styled-components";
import { media } from "@/components/styleMediaQuery";

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
const Th1 = styled.th`
  width: 70%;
`;
const Th2 = styled.th`
  width: 10%;
  text-align: center;
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
  const myTicketTotalCount = useSelector(selectCurrentTicketTotalCount);

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
                {!!ticketTypeObj[currentType] &&
                ticketTypeObj[currentType].length > 0 ? (
                  ticketTypeObj[currentType].map((item) => {
                    const {
                      content,
                      name,
                      price,
                      ticketCount,
                      type,
                      _id,
                      currentTicketCount,
                    } = item;
                    return (
                      <Table hover className="mb-5" responsive="sm">
                        <thead>
                          <tr>
                            <Th1>票種</Th1>
                            <Th2>單價</Th2>
                            <Th2>數量</Th2>
                            <Th2>小記</Th2>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            key={_id}
                            onChange={(e) => {
                              handleTicketChoose({
                                e,
                                ticketObj: item,
                              });
                            }}
                          >
                            <td>
                              <p>{name}</p>
                              <p>{content}</p>
                            </td>
                            <td className="text-center align-middle">
                              ${price}
                            </td>
                            <td className="text-center align-middle">
                              <Form.Select style={{ width: "60px" }}>
                                {[...Array(11)]
                                  .map((_, i) => i)
                                  .map((subItem) => {
                                    return (
                                      <option
                                        key={`${name}-${subItem}`}
                                        value={subItem}
                                      >
                                        {subItem}
                                      </option>
                                    );
                                  })}
                              </Form.Select>
                            </td>
                            <td className="text-center align-middle">
                              ${price * currentTicketCount}
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    );
                  })
                ) : (
                  <div className="text-center p-5">查無資料</div>
                )}
              </Tab>
            );
          })}
        </Tabs>
      </Container>
    </>
  );
}
