import React from "react";
import { RouteComponentProps } from "react-router";
import Parent from "../components/palette/Parent";

const Home: React.FC<RouteComponentProps> = () => {
  return (
    <div>
      <p>홈화면</p>
      <Parent />
    </div>
  );
};

export default Home;
