import React from "react";

const Sort = () => {
  return <div>Sort</div>;
};

const FetchMoreButton = () => {
  return <button type="button">Показати ще 5 квитків</button>;
};

const List = () => {
  return (
    <div>
      <Sort />
      <div />
      <FetchMoreButton />
    </div>
  );
};

export default List;
