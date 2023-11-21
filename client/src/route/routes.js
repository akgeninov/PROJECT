import { Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Protection from "./Protection";

const routes = [
  <Route
    key="home"
    path="/"
    element={
      <Protection publicSide={true}>
        <Home />
      </Protection>
    }
  />,
];

export default routes;
