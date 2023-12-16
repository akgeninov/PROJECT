import { Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Komunitas from "../pages/komunitas/Komunitas";
import Protection from "./Protection";
import Artikel from "../pages/artikel/Artikel";
// import OneArtikel from "../pages/artikel/one-artikel/OneArtikel";
import MainSection from "../components/artikel/main-section/MainSection";
import DetailArtikel from "../pages/detail-artikel/DetailArtikel";
import Career from "../pages/career/Career";
import CareerLowongan from "../pages/career-lowongan/CareerLowongan";
import OneCareerLowongan from "../pages/career-lowongan/one-career-lowongan/OneCareerLowongan";
import Profile from "../pages/profile/Profile";

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
    key="career"
    path="/career"
    element={
      <Protection publicSide={true}>
        <Career />
      </Protection>
    }
  />,
  <Route
    key="careerLowongan"
    path="/career-lowongan"
    element={
      <Protection publicSide={true}>
        <CareerLowongan />
      </Protection>
    }
  />,
  <Route
    key="careerLowongan"
    path="/career-lowongan/:id_lowongan"
    element={
      <Protection publicSide={true}>
        <OneCareerLowongan />
      </Protection>
    }
  />,
  <Route
    key="profile"
    path="/profile"
    element={
      <Protection publicSide={true}>
        <Profile />
      </Protection>
    }
  />,
];

export default routes;
