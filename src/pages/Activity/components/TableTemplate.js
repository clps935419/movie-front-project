import { useMemo } from "react";
import Table from "react-bootstrap/Table";
import styled from "styled-components";

const Th1 = styled.th`
  width: 30%;
`;

function TableTemplate({ dataArr }) {
  const row = useMemo(() => {
    return dataArr.map((item) => {
      return (
        <tr>
          <td>{item.title}</td>
          <td>{item.content}</td>
        </tr>
      );
    });
  }, [dataArr]);

  return (
    <>
      <Table responsive="sm">
        <thead>
          <tr>
            <Th1>標題</Th1>
            <th>活動內容</th>
          </tr>
        </thead>
        <tbody>{row}</tbody>
      </Table>
    </>
  );
}
export default TableTemplate;
