import { Container, Form } from "react-bootstrap";
import AreaTime from "./AreaTime";

export default function TimeTable(params) {
  return (<>
    <Container>
      <Form className="d-flex gap-3">
        <Form.Group>
          <Form.Select>
            <option>選擇日期</option>
            <option value="2023/02/10">2023/02/10 星期日</option>
            <option value="2023/02/11">2023/02/11 星期一</option>
            <option value="2023/02/12">2023/02/12 星期二</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Select>
            <option>選擇區域</option>
            <option value="2023/02/10">全部影城</option>
            <option value="2023/02/11">高雄影城</option>
            <option value="2023/02/12">台南影城</option>
          </Form.Select>
        </Form.Group>
      </Form>
      <AreaTime />
      <AreaTime />
      <AreaTime />
    </Container>
  </>)
};
