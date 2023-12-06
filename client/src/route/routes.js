import { Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Komunitas from "../pages/komunitas/Komunitas";
import Protection from "./Protection";
import Artikel from "../pages/artikel/Artikel";
import OneArtikel from "../pages/artikel/one-artikel/OneArtikel";
import MainSection from "../components/artikel/main-section/MainSection";
import DetailArtikel from "../pages/detail-artikel/DetailArtikel";
import TentangKami from "../pages/tentang-kami/TentangKami";

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
    path="/artikel/:page"
    element={
      <Protection publicSide={true}>
        <Artikel />
      </Protection>
    }
  >
    <Route index element={<MainSection />} />
    <Route path=":kategori" element={<MainSection />} />
  </Route>,
  <Route
    key="detail-artikel"
    path="/detail-artikel/:kategori/:title"
    element={
      <Protection publicSide={true}>
        <DetailArtikel />
      </Protection>
    }
  />,
  <Route
    key="komunitas-konten-kreator"
    path="/komunitas/:title"
    element={
      <Protection publicSide={true}>
        <Komunitas />
      </Protection>
    }
  />,
  <Route
    key="komunitas-bisnis"
    path="/komunitas/:title"
    element={
      <Protection publicSide={true}>
        <Komunitas />
      </Protection>
    }
  />,
  <Route
    key="about-us"
    path="/about-us"
    element={
      <Protection publicSide={true}>
        <TentangKami />
      </Protection>
    }
  />,
];

export default routes;
