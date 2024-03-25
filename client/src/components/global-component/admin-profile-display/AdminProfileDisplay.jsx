import { reviewPic } from "../../../constants";

function AdminProfileDisplay() {
  return (
    <div className="flex border border-black items-center rounded-lg p-2 self-end cursor-pointer">
      <img
        src={reviewPic.rectangle103}
        className="w-[36px] h-[36px] "
        alt="profile"
      />
      <p className="px-2 w-40 text-center font-bold text-xl">Anonym</p>
    </div>
  );
}

export default AdminProfileDisplay;
