import { Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Komunitas from "../pages/komunitas/Komunitas";
import Protection from "./Protection";
import Artikel from "../pages/artikel/Artikel";
// import OneArtikel from "../pages/artikel/one-artikel/OneArtikel";
import MainSection from "../components/artikel/main-section/MainSection";
import DetailArtikel from "../pages/detail-artikel/DetailArtikel";
import Profile from "../pages/profile/Profile";
import DashboardProfile from "../components/profile/dashboard-profile/dashboardProfile";
import KelasSaya from "../components/profile/kelas-saya/KelasSaya";
import SemuaKelasSection from "./../components/profile/kelas-saya/semua-kelas-section/SemuaKelasSection";
import SedangDipelajariSection from "./../components/profile/kelas-saya/sedang-dipelajari-section/SedangDipelajariSection";
import BelumDimulaiSection from "./../components/profile/kelas-saya/belum-dimulai-section/BelumDimulaiSection";
import SelesaiSection from "./../components/profile/kelas-saya/selesai-section/SelesaiSection";
import Event from "./../components/profile/event/Event";
import Wishlist from "./../components/profile/wishlist/Wishlist";
import Transaksi from "./../components/profile/transaksi/Transaksi";
import TentangKami from "../pages/tentang-kami/TentangKami";
import Career from "../pages/career/Career";
import CareerLowongan from "../pages/career-lowongan/CareerLowongan";
import OneCareerLowongan from "../pages/career-lowongan/one-career-lowongan/OneCareerLowongan";
import DetailProfile from "../pages/detail-profile/DetailProfile";
import UbahProfile from "../pages/ubah-profile/UbahProfile";
import KelasBisnis from "../pages/kelas-bisnis/KelasBisnis";
import DetailKelasBisnis from "../pages/detail-kelas-bisnis/DetailKelasBisnis";
import Login from "../pages/login/Login";

const routes = [
  <Route
    key="home"
    path="/"
    element={
      <Protection publicSide={true} userOnly={true}>
        <Home />
      </Protection>
    }
  />,
  <Route
    key="artikel"
    path="/artikel/:page"
    element={
      <Protection publicSide={true} userOnly={true}>
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
      <Protection publicSide={true} userOnly={true}>
        <DetailArtikel />
      </Protection>
    }
  />,
  <Route
    key="komunitas-konten-kreator"
    path="/komunitas/:title"
    element={
      <Protection publicSide={true} userOnly={true}>
        <Komunitas />
      </Protection>
    }
  />,
  <Route
    key="komunitas-bisnis"
    path="/komunitas/:title"
    element={
      <Protection publicSide={true} userOnly={true}>
        <Komunitas />
      </Protection>
    }
  />,
  <Route
    key="kelas-bisnis"
    path="/kelas-bisnis"
    element={
      <Protection publicSide={true} userOnly={true}>
        <KelasBisnis />
      </Protection>
    }
  />,
  <Route
    key="kelas-bisnis"
    path="/kelas-bisnis/:id"
    element={
      <Protection publicSide={true} userOnly={true}>
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
  <Route
    key="login"
    path="/register"
    element={
      <Protection publicSide={true}>
        <Register />
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
    key="kelas-bisnis"
    path="/kelas-bisnis"
    element={
      <Protection publicSide={true}>
        <KelasBisnis />
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
    key="kelas-bisnis"
    path="/kelas-bisnis/:id"
    element={
      <Protection publicSide={true}>
        <DetailKelasBisnis />
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
      <Protection userOnly={true}>
        <Profile />
      </Protection>
    }
  >
    <Route index element={<DashboardProfile />} />
    <Route path="/profile/dashboard/" element={<DashboardProfile />} />
    <Route path="/profile/kelas-saya/" element={<KelasSaya />}>
      <Route index element={<SemuaKelasSection />} />
      <Route
        path="/profile/kelas-saya/semua-kelas"
        element={<SemuaKelasSection />}
      />
      <Route
        path="/profile/kelas-saya/belum-dimulai"
        element={<BelumDimulaiSection />}
      />
      <Route
        path="/profile/kelas-saya/sedang-dipelajari"
        element={<SedangDipelajariSection />}
      />
      <Route path="/profile/kelas-saya/selesai" element={<SelesaiSection />} />
    </Route>
    <Route path="/profile/wishlist/" element={<Wishlist />} />
    <Route path="/profile/event/" element={<Event />} />
    <Route path="/profile/transaksi/" element={<Transaksi />} />
  </Route>,
  <Route
    key="about-us"
    path="/about-us"
    element={
      <Protection publicSide={true} userOnly={true}>
        <TentangKami />
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
  <Route
    key="profile"
    path="/profile"
    element={
      <Protection publicSide={true} userOnly={true}>
        <UbahProfile />
      </Protection>
    }
  >
    <Route path=":username" element={<DetailProfile />} />,
  </Route>,
];

export default routes;
