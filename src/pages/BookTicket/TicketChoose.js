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
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { apiTicket } from "@/api";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const { getSessionTicketTypes } = apiTicket;

const TICKET_TYPE_KEY = {
  "package": "套票",
  "group": "團體票",
  "single": "電影票",
};

export default function TicketChoose() {
  const { sessionId } = useParams();
  const [currentType, setCurrentType] = useState("package");//目前在哪個票種分類
  const [ticketTypeObj, setTicketTypeObj] = useState({});//API拿回來分類的資料
  const [totalTicketCount, setTotalTicketCount] = useState(0);
  const dispatch = useDispatch();

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
            if(value === currentValue.type){
              accumulator[key].push(currentValue);
            }
          }
          return accumulator;
        }, {});
        console.log("res:", data);
        console.log(" groupData", groupData);
        setTicketTypeObj(groupData);
      } catch (error) {
        console.log("🚀 ~ file: TicketChoose.js:25 ~ error:", error);
      }
    })();
  }, [sessionId]);

  function handleTicketChoose(e, ticketId) {
    console.log("🚀 ~ file: TicketChoose.js:75 ~ handleTicketChoose ~ e, ticketId:", e,e.target.value, ticketId)
    // const index = ticketChoose.findIndex((element) => element._id === ticketId);
    // ticketChoose[index]["buyCount"] = e.target.value;
    // const totalCount = ticketChoose
    //   .filter((item) => item.buyCount > 0)
    //   .map((item) => {
    //     return item.buyCount * item.ticketCount;
    //   })
    //   .reduce((accumulator, currentValue) => {
    //     return accumulator + currentValue;
    //   }, 0);
    // setTotalTicketCount(totalCount);
  }

  function handleTicketContent() {
    // const allChoosedTickets = ticketChoose.filter((item) => item.buyCount > 0);
    // console.log("allChoosedTickets:", allChoosedTickets);
  }

  if(_.isEmpty(ticketTypeObj)){
    return<></>
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
          <Col md={8} className="d-flex justify-content-end">
            <Link
              style={{ pointerEvents: totalTicketCount === 0 ? "none" : "" }}
              to="seats"
              className="btn btn-outline-secondary d-flex h-50 my-auto"
              onClick={handleTicketContent}
            >
              <p className="caption1" style={{ lineHeight: "0.9" }}>
                已選取{totalTicketCount}張票：開始選位
              </p>
              <span
                className="material-icons-outlined"
                style={{ lineHeight: "0.5" }}
              >
                chevron_right
              </span>
            </Link>
          </Col>
        </Row>
        <Tabs
          id="controlled-tab-example"
          activeKey={currentType}
          onSelect={(k) => {
            console.log("e", k);
            setCurrentType(k);
          }}
          className="mb-3"
        >
          {Object.keys(TICKET_TYPE_KEY).map((type) => {
            return (
              <Tab key={type} eventKey={type} title={TICKET_TYPE_KEY[type]}>
                <Table hover className="mb-5" responsive="sm">
                  <thead>
                    <tr>
                      <th className="w-75">票種</th>
                      <th className="text-center">單價</th>
                      <th className="text-center">數量</th>
                      <th className="text-center">小記</th>
                    </tr>
                  </thead>
                  <tbody>
                    {!!ticketTypeObj[currentType] && ticketTypeObj[currentType].map((item) => {
                      const { content, name, price, ticketCount, type, _id } =
                        item;
                      return (
                        <tr
                          key={_id}
                          onChange={(e) => {
                            handleTicketChoose(e, _id);
                          }}
                        >
                          <td>
                            <p>{name}</p>
                            <p>{content}</p>
                          </td>
                          <td className="text-center">${price}</td>
                          <td className="text-center">
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
                          <td className="text-center">
                            ${price * ticketCount}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Tab>
            );
          })}
        </Tabs>
      </Container>
    </>
  );
}
