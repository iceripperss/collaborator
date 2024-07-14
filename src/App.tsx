import React, { useEffect } from "react";
import "./styles/style.scss";
import { useDispatch } from "react-redux";
import { ticketsActions } from "@redux/ticket/reducer";
import data from "@api/ticketsResponse.json";
import { Header } from "@components/Header/Header";
import { ListGroup } from "@components/ListGroup/ListGroup";

const fetchData = async () => data;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData().then((data) => dispatch(ticketsActions.setTickets(data)));
  }, [dispatch]);

  return (
    <>
      <Header />
      <ListGroup />
    </>
  );
};

export default App;
