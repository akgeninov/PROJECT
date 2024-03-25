import { reviewPic, icon } from "../../../constants";
import AdminHeader from "../../global-component/admin-header/AdminHeader";
import ArtikelCard from "./artikel-card/ArtikelCard";

const dummyEl = {
  id: 1,
  date: "November 2023",
  title: "3 Cara Mengembangkan Bisnis di TikTok Shop",
  description:
    "TikTok Shop salah satu platform e-commerce yang sedang naik daun, telah menjadi fokus utama para pengusaha utk...",
};

function ArtikelMainSection() {
  return (
    <div className="w-4/5 flex flex-col grow-0 px-28 py-8">
      <AdminHeader title="List Artikel" showSearchBar />
      <div className="grid grid-cols-4 gap-x-4 gap-y-6">
        <ArtikelCard el={dummyEl} />
        <ArtikelCard el={dummyEl} />
        <ArtikelCard el={dummyEl} />
        <ArtikelCard el={dummyEl} />
        <ArtikelCard el={dummyEl} />
        <ArtikelCard el={dummyEl} />
        <ArtikelCard el={dummyEl} />
        <ArtikelCard el={dummyEl} />
      </div>
    </div>
  );
}

export default ArtikelMainSection;
