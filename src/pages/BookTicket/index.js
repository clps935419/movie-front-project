import { apiTicket } from "@/api";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams, Outlet } from "react-router-dom";
import SessionInfo from "./components/SessionInfo";

const { getSessionTicketTypes } = apiTicket;

export default function BookTicket(params) {
  const { sessionId } = useParams();
  const [ticketTypes, setTicketTypes] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await getSessionTicketTypes({ params: { id: sessionId } })
        .then(({ data }) => {
          if (data.status === "success") {
            setTicketTypes(data.data);
          }
        })
        .catch(({ response }) => {
          throw new Error(response.data.errors[0].msg || response.data.message);
        });
      console.log("res:", res);
    })();
  }, [sessionId]);
  return (
    <>
      <Container>
        <SessionInfo />
        <Outlet />
      </Container>
    </>
  );
}
