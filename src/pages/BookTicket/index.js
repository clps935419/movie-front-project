import { Container } from "react-bootstrap"
import SessionInfo from "./components/SessionInfo"
import TicketChoose from "./components/TicketChoose"

export default function BookTicket(params) {
  return (<>
    <Container>
      <SessionInfo />
      <TicketChoose />
    </Container>
  </>)
};
