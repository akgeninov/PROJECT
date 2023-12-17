import { Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Komunitas from "../pages/komunitas/Komunitas";
import Protection from "./Protection";
import Artikel from "../pages/artikel/Artikel";
import OneArtikel from "../pages/artikel/one-artikel/OneArtikel";
import MainSection from "../components/artikel/main-section/MainSection";
import DetailArtikel from "../pages/detail-artikel/DetailArtikel";
import KelasBisnis from "../pages/kelas-bisnis/KelasBisnis";
import DetailKelasBisnis from "../pages/detail-kelas-bisnis/DetailKelasBisnis";
import Login from "../pages/login/Login";

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
    key="artikel"
    path="/artikel/:page"
    element={
      <Protection publicSide={true}>
        <Artikel />
      </Protection>
    }
  >
    {/* <Route index element={<MainSection />} /> */}
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
    key="kelas-bisnis"
    path="/kelas-bisnis"
    element={
      <Protection publicSide={true}>
        <KelasBisnis />
      </Protection>
    }
  />,
  <Route
    key="kelas-bisnis"
    path="/kelas-bisnis/:title"
    element={
      <Protection publicSide={true}>
        <DetailKelasBisnis />
      </Protection>
    }
  />,
  <Route
    key="login"
    path="/login"
    element={
      <Protection publicSide={true}>
        <Login />
      </Protection>
    }
  />,
];

export default routes;
