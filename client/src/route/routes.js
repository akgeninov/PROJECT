import { Route, Switch } from "react-router-dom";
import Home from "../pages/home/Home";
import Komunitas from "../pages/komunitas/Komunitas";
import Protection from "./Protection";
import Artikel from "../pages/artikel/Artikel";
// import OneArtikel from "../pages/artikel/one-artikel/OneArtikel";
import MainSection from "../components/artikel/main-section/MainSection";
import DetailArtikel from "../pages/detail-artikel/DetailArtikel";
import TentangKami from "../pages/tentang-kami/TentangKami";
import KelasSaya from './../pages/profil/kelas-saya/KelasSaya';
import BelumDimulaiSection from './../components/kelas-saya/belum-dimulai-section/BelumDimulaiSection';
import SedangDipelajariSection from './../components/kelas-saya/sedang-dipelajari-section/SedangDipelajariSection';
import SelesaiSection from './../components/kelas-saya/selesai-section/SelesaiSection';
import SemuaKelasSection from './../components/kelas-saya/semua-kelas-section/SemuaKelasSection';
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
    key="about-us"
    path="/about-us"
    element={
      <Protection publicSide={true}>
        <TentangKami />
      </Protection>
    }
  />,
  <Route
    key="kelas-saya"
    path="/profil/kelas-saya"
    element={
      <Protection publicSide={true}>
        <KelasSaya/>
      </Protection>
    }>

      <Route index element={<SemuaKelasSection/>} />
      <Route path="/profil/kelas-saya/semua-kelas" element={<SemuaKelasSection />} />
      <Route path="/profil/kelas-saya/belum-dimulai" element={<BelumDimulaiSection />} />
      <Route path="/profil/kelas-saya/sedang-dipelajari" element={<SedangDipelajariSection />} />
      <Route path="/profil/kelas-saya/selesai" element={<SelesaiSection/>} />

    </Route>,
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
