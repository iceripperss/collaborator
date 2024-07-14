import React from "react";
import "./styles/style.scss";
import Header from "@components/Header/Header";
import List from "@components/ListGroup/List";
import Filters from "./components/Filters/Filters";

const App = () => {
  return (
    <>
      <Header />
      <Filters />
      <List />
    </>
  );
};

export default App;
