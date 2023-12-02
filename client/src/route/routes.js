import { Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Komunitas from "../pages/komunitas/Komunitas";
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
  <Route
    key="komunitas"
    path="/komunitas"
    element={
      <Protection publicSide={true}>
        <Komunitas />
      </Protection>
    }
  />
];

export default routes;
