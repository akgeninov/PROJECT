import { Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Protection from "./Protection";
import Artikel from "../pages/artikel/Artikel";
import OneArtikel from "../pages/artikel/one-artikel/OneArtikel";
import MainSection from "../components/artikel/main-section/MainSection";

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
    key="home"
    path="/artikel"
    element={
      <Protection publicSide={true}>
        <Artikel />
      </Protection>
    }
  >
    <Route path="" element={<MainSection />} />
    <Route path=":kategori" element={<MainSection />} />
  </Route>,
];

export default routes;
