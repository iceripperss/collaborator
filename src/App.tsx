import React, { useEffect } from "react";
import "./styles/style.scss";
import { useDispatch } from "react-redux";
import { setTickets } from "@redux/ticket/ticketReducer";
import data from "@api/ticketsResponse.json";
import { Header } from "@components/Header/Header";
import { ListGroup } from "@components/ListGroup/ListGroup";

const fetchData = async () => data;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData().then((data) => dispatch(setTickets(data)));
  }, [dispatch]);

  return (
    <>
      <Header />
      <ListGroup />
    </>
  );
};

export default App;
