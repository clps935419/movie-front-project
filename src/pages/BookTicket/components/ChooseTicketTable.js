import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  Row,
  Table,
} from "react-bootstrap";
import styled from "styled-components";

const Th1 = styled.th`
  width: 70%;
`;
const Th2 = styled.th`
  width: 10%;
  text-align: center;
`;

function ChooseTicketTable(props) {
  const { dataArr, handleTicketChoose } = props;

  if(dataArr.length === 0){
    return <div className="text-center p-5">查無資料</div>;
  }

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
        {dataArr.map((item) => {
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
              <td className="text-center align-middle">${price}</td>
              <td className="text-center align-middle">
                <Form.Select style={{ width: "60px" }}>
                  {[...Array(11)]
                    .map((_, i) => i)
                    .map((subItem) => {
                      return (
                        <option key={`${name}-${subItem}`} value={subItem}>
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
          );
        })}
      </tbody>
    </Table>
  );
}

export default ChooseTicketTable;
