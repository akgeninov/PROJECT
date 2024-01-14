import { useParams } from "react-router-dom";
import dataTransaction from "./../constant";

export default function LihatInvoice() {
  const { transaction_id } = useParams();

  const getData =
    dataTransaction[
      dataTransaction.findIndex(
        (transaction) => transaction.transaction_id === transaction_id
      )
    ];

  const rupiah = (num) => {
    if (typeof num === "number") {
      return `Rp. ${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")},-`;
    } else {
      return num;
    }
  };

  const labelColor = (status) => {
    if (status == "Berhasil") {
      return "text-[#278B03]";
    } else if (status == "Dibatalkan") {
      return "text-[#A12105]";
    } else {
      return "text-[#E49333]";
    }
  };

  const total = (status, price) => {
    if (status == "Berhasil") {
      return price;
    } else if (status == "Dibatalkan") {
      return "Dibatalkan";
    } else {
      return "Menunggu Konfirmasi";
    }
  };
  return (
    <div className="flex flex-col lg:w-[1080px] max-w-screen-xl justify-center">
      <p className="text-[48px] leading-[72px] font-bold text-black500">
        Invoice
      </p>
      <div className="flex justify-between items-end">
        <table className="text-[24px] leading-[30px] font-normal">
          <tr>
            <td>No. Invoice</td>
            <td>:</td>
            <td className="text-[#AF0707] font-medium">{getData.noinvoice}</td>
          </tr>
          <tr>
            <td>Waktu Pembayaran</td>
            <td>:</td>
            <td className="font-medium">{getData.DATE}</td>
          </tr>
          <tr>
            <td>Status Transaksi</td>
            <td>:</td>
            <td
              className={`${labelColor(
                getData.status
              )} text-[#278B03] font-medium`}
            >
              {getData.status}
            </td>
          </tr>
        </table>
        <div className="text-[24px] leading-[30px]">
          <p className="font-bold">Ahmad Apriansyah</p>
          <p className="font-normal">ahmad@gmail.com</p>
        </div>
      </div>

      <div className="flex flex-col w-[358px] h-[204px] justify-between md:w-[500px] md:h-[280px] lg:w-[1080px] lg:h-[554px] border-[1px] border-whiteSmoke700 mb-[20px] rounded-[10px]">
        <div className="h-[38px] lg:h-[74px] flex justify-between bg-[rgba(204,204,204,0.2)] p-[11px] items-center text-[12px] lg:text-[18px] font-medium leading-[30px] rounded-t-[10px]">
          <p className="lg:w-[335px]">Daftar Produk</p>
        </div>
        <div className="flex lg:h-[198px] px-[11px] items-start lg:items-center">
          <div className="flex w-[78px] h-[78px] md:w-[150px] md:h-[150px] mr-[25px]">
            <img
              src={getData.pic}
              alt={getData.title || "No Data"}
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
          <div className="flex flex-col lg:flex-row lg:h-[160px] lg:leading-[28px] justify-start">
            <p className="text-[14px] lg:text-[24px] font-medium lg:w-[50%] w-[160px] mb-[15px]">
              {getData.title}
            </p>
            <div className="lg:block hidden h-[150px] w-[2px] font-medium border-l-2 border-[#666666)] border-opacity-50"></div>
            <div className=" lg:h-[160px] lg:pl-[25px] text-[12px] lg:text-[24px] font-medium">
              <p className="text-[#666666] mb-[5px] lg:mb-[72px]">
                Harga Produk
              </p>
              <p className="text-[#0F1011]">{rupiah(getData.price)}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="lg:block hidden h-[2px] w-[1046px] font-medium border-t-2 border-[#666666)] border-opacity-50"></div>
          <div className="w-[100%]">
            <p>Detail Pembayaran</p>
            <div className="h-[38px] lg:h-[74px] flex items-center rounded-b-[10px] px-[11px] text-[12px] lg:text-[24px] leading-[72px] font-medium">
              <p className="w-[55%] lg:w-[65%] text-[#666666]">
                Subtotal Harga
              </p>
              <p className="w-[45%] lg:w-[35%]  text-[#0F1011] text-right">
                {total(getData.status, rupiah(getData.price))}
              </p>
            </div>
            <div className="h-[38px] lg:h-[74px] flex items-center rounded-b-[10px] px-[11px] text-[12px] lg:text-[24px] leading-[72px] font-medium">
              <p className="w-[55%] lg:w-[65%] text-[#666666]">
                Total Pembayaran
              </p>
              <p className="w-[45%] lg:w-[35%]  text-[#0F1011] text-right">
                {total(getData.status, rupiah(getData.price))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
