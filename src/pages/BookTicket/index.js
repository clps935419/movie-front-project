import { apiTicket } from "@/api";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams, Outlet } from "react-router-dom";
import SessionInfo from "./components/SessionInfo";

export default function BookTicket(params) {
  return (
    <>
      <Container>
        <SessionInfo />
        <Outlet />
      </Container>
    </>
  );
}
