import _ from "lodash";
import { useEffect } from "react";
import { useMemo, useState } from "react";
import { Button, ButtonGroup, Col, Container, Form, Row, Table } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { Link, useParams } from "react-router-dom";


export default function TicketChoose({ ticketTypes }) {
  const { sessionId } = useParams();
  const [ticketInTypes, setTicketInTypes] = useState([])
  const [totalTicketCount, setTotalTicketCount] = useState(0)
  const dispatch = useDispatch();

  const ticketChoose = useMemo(() => {
    return _.cloneDeep(ticketTypes)
  }, [ticketTypes])
    useEffect(() => {
      (async () => {
        try {
          const res = await getSessionTicketTypes({
            params: { id: sessionId },
          });
          console.log("res:", res);
        } catch (error) {
          console.log("🚀 ~ file: TicketChoose.js:25 ~ error:", error)
        }
        
      })();
    }, [sessionId]);

  function handleClick(e, type) {
    switch (type) {
      case 'ticket-package':
        setTicketInTypes(ticketTypes.filter(item => item.type === '套票'));
        break
      case 'ticket-single':
        setTicketInTypes(ticketTypes.filter(item => item.type === '電影票'));
        break
      case 'ticket-group':
        setTicketInTypes(ticketTypes.filter(item => item.type === '團體劃位'));
        break
      default:
        throw new Error('No this action');
    }
  }

  function handleTicketChoose(e, ticketId) {
    const index = ticketChoose.findIndex((element) => element._id === ticketId)
    ticketChoose[index]["buyCount"] = e.target.value
    const totalCount = ticketChoose.filter(item => item.buyCount > 0)
      .map(item => { return item.buyCount * item.ticketCount })
      .reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      }, 0)
    setTotalTicketCount(totalCount);
  }

  function handleTicketContent() {
    const allChoosedTickets = ticketChoose.filter(item => item.buyCount > 0);
    console.log('allChoosedTickets:', allChoosedTickets)
  }

  const buttonTypes = [
    {
      type: "ticket-package",
      name: "套票"
    },
    {
      type: "ticket-single",
      name: "電影票"
    },
    {
      type: "ticket-group",
      name: "團體票"
    },
  ]
  return (<>
    <Container>
      <Row className="my-3 border-bottom border-top">
        <Col md={4} style={{ backgroundColor: '#B7B7B7' }} className="text-center">
          <h4 className="pt-3 pb-1" style={{ letterSpacing: '10px' }}>選取票種</h4>
        </Col>
        <Col md={8} className="d-flex justify-content-end">
          <Link style={{ pointerEvents: totalTicketCount === 0 ? 'none' : '' }} to="seats" className="btn btn-outline-secondary d-flex h-50 my-auto" onClick={handleTicketContent}>
            <p className="caption1" style={{ lineHeight: '0.9' }}>已選取{totalTicketCount}張票：開始選位</p>
            <span className="material-icons-outlined" style={{ lineHeight: '0.5' }}>
              chevron_right
            </span>
          </Link>
        </Col>
      </Row>
      <ButtonGroup aria-label="Basic example" className="mt-2 mb-5">
        {
          buttonTypes.map(item => {
            return (
              <Button key={item.type} variant="light"
                value={item.type}
                className="border"

                onClick={(e) => { handleClick(e, item.type) }}>{item.name}</Button>
            )
          })
        }
      </ButtonGroup>
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
          {
            ticketInTypes.map(ticketInType => {
              return (
                <tr key={ticketInType.name} onChange={(e) => { handleTicketChoose(e, ticketInType._id) }}>
                  <td><p>{ticketInType.name}</p><p>{ticketInType.content}</p></td>
                  <td className="text-center">${ticketInType.price}</td>
                  <td className="text-center">
                    <Form.Select style={{ width: '60px' }}>
                      {
                        [...Array(11)].map((_, i) => i).map(item => {
                          return (
                            <option key={`${ticketInType.name}-${item}`} value={item}>{item}</option>
                          )
                        })
                      }
                    </Form.Select>
                  </td>
                  <td className="text-center">${ticketInType.price * ticketInType.ticketCount}</td>
                </tr>
              )
            })
          }
          {/* <tr>
            <td><p>雙人吉拿套票</p><p>內含:電影票 X 2, 70元飲料 X 2, 大爆米花 X 1, 吉拿棒 X 1</p></td>
            <td>$740</td>
            <td><Form.Select style={{ width: '80px' }}>
              <option>數量</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select></td>
            <td>$740</td>
          </tr>
          <tr>
            <td><p>雙人吉拿套票</p><p>內含:電影票 X 2, 70元飲料 X 2, 大爆米花 X 1, 吉拿棒 X 1</p></td>
            <td>$740</td>
            <td><Form.Select style={{ width: '80px' }}>
              <option>數量</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select></td>
            <td>$740</td>
          </tr>
          <tr>
            <td><p>雙人吉拿套票</p><p>內含:電影票 X 2, 70元飲料 X 2, 大爆米花 X 1, 吉拿棒 X 1</p></td>
            <td>$740</td>
            <td><Form.Select style={{ width: '80px' }}>
              <option>數量</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select></td>
            <td>$740</td>
          </tr> */}
        </tbody>
      </Table>
    </Container>
  </>)
};
