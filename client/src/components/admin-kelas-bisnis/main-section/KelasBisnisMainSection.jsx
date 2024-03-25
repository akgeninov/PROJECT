import { reviewPic, icon } from "../../../constants";
import KelasBisnisCard from "./kelas-bisnis-card/KelasBisnisCarc";
import AdminHeader from "../../global-component/admin-header/AdminHeader";

const newEl = {
  id: 0,
  nama: "Tambah Kelas Baru",
  tipe: "Materi",
  kelas_level: { nama: "Pemula" },
  kelas_regists: [],
  harga: 500000,
};

const dummyEl = {
  id: 1,
  nama: "Langkah Sukses Jadi Youngtrepreneur",
  tipe: "Materi Eksklusif",
  kelas_level: { nama: "Pemula" },
  kelas_regists: [1, 2, 3, 4],
  harga: 500000,
};

function KelasBisnisMainSection() {
  return (
    <div className="w-4/5 flex flex-col grow-0 px-28 py-8">
      <AdminHeader title="List Kelas Bisnis" showSearchBar />
      <div className="grid grid-cols-4 gap-x-4 gap-y-6">
        <KelasBisnisCard el={newEl} index={1} star={5} />
        <KelasBisnisCard el={dummyEl} index={1} star={0} />
        <KelasBisnisCard el={dummyEl} index={1} star={0.5} />
        <KelasBisnisCard el={dummyEl} index={1} star={1} />
        <KelasBisnisCard el={dummyEl} index={1} star={1.5} />
        <KelasBisnisCard el={dummyEl} index={1} star={2} />
        <KelasBisnisCard el={dummyEl} index={1} star={2.5} />
        <KelasBisnisCard el={dummyEl} index={1} star={3} />
        <KelasBisnisCard el={dummyEl} index={1} star={3.5} />
        <KelasBisnisCard el={dummyEl} index={1} star={4} />
        <KelasBisnisCard el={dummyEl} index={1} star={4.5} />
        <KelasBisnisCard el={dummyEl} index={1} star={5} />
      </div>
    </div>
  );
}

export default KelasBisnisMainSection;
