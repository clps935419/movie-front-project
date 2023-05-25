import { useMemo } from "react";
import Table from "react-bootstrap/Table";

function TableTemplate({dataArr}) {
  const row = useMemo(()=>{
    return dataArr.map(item=>{
      return (
        <tr>
          <td>{item._id}</td>
          <td>{item.content}</td>
        </tr>
      );
    })
  },[dataArr])

  return (
    <>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>編號</th>
            <th>活動內容</th>
          </tr>
        </thead>
        <tbody>
          {row}
        </tbody>
      </Table>
    </>
  );
}
export default TableTemplate;
