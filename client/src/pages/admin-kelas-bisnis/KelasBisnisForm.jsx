import KelasBisnisFormSection from "../../components/admin-kelas-bisnis/main-section/kelas-bisnis-form/KelasBisnisFormSection";
import AdminSidebar from "../../components/global-component/admin-sidebar/AdminSidebar";

function KelasBisnisForm() {
  return (
    <div className="flex">
      <AdminSidebar />
      <KelasBisnisFormSection />
    </div>
  );
}

export default KelasBisnisForm;
