import { Link } from "react-router-dom";
// import { kelasBisnisPic } from "../../../../constants";
export default function TransactionCard(transaksi) {
  // console.log(transaksi.transaksi);
  // const dataTransaction = [
  //   {
  //     transaction_id:"a1",
  //     noinvoice: "ORD-clikben9XBkL44wlkaMMas",
  //     title: "Langkah Sukses Jadi Youngtrepreneur",
  //     DATE: "10 Desember 2023, 10:23",
  //     price: 500000,
  //     status: "Berhasil",
  //     pic: kelasBisnisPic.pic1,
  //   },
  //   {
  //     transaction_id:"b1",
  //     noinvoice: "ORD-clikben9XBkL44wlkaMMas",
  //     title: "Langkah Sukses Jadi Youngtrepreneur",
  //     DATE: "10 Desember 2023, 10:23",
  //     price: "Gratis",
  //     status: "Menunggu",
  //     pic: kelasBisnisPic.pic1,
  //   },
  //   {
  //     transaction_id:"c1",
  //     noinvoice: "ORD-clikben9XBkL44wlkaMMas",
  //     title: "Langkah Sukses Jadi Youngtrepreneur",
  //     DATE: "10 Desember 2023, 10:23",
  //     price: 1000000,
  //     status: "Dibatalkan",
  //     pic: kelasBisnisPic.pic1,
  //   },
  // ];
  //   const rupiah = (number) => {
  //     return new Intl.NumberFormat("id-ID", {
  //       style: "currency",
  //       currency: "IDR",
  //     }).format(number);
  //   };

  const rupiah = (num) => {
    if (typeof num === "number") {
      return `Rp. ${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")},-`;
    } else {
      return num;
    }
  };

  const labelColor = (status) => {
    if (status == "Berhasil") {
      return "bg-[#278B03]";
    } else if (status == "Dibatalkan") {
      return "bg-[#A12105]";
    } else {
      return "bg-[#E49333]";
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
    <>
      {transaksi.transaksi.map((data) => (
        <div className="flex flex-col w-[358px] h-[204px] justify-between md:w-[500px] md:h-[280px] lg:w-[750px] lg:h-[346px] border-[1px] border-whiteSmoke700 mb-[20px] rounded-[10px]">
          <div className="h-[38px] lg:h-[74px] flex justify-between bg-[rgba(204,204,204,0.2)] p-[11px] items-center text-[12px] lg:text-[18px] font-medium leading-[30px] rounded-t-[10px]">
            <p className="lg:w-[335px]">
              <span className="lg:inline hidden">Waktu Pembayaran, </span>
              {data.DATE}
            </p>
            <div className="border-l border-[#666666] border-opacity-30 h-[45px] w-[2px] lg:block hidden"></div>
            <Link
              to={`/profile/transaksi/${data.transaction_id}/lihat-invoice`}
            >
              <p className="h-[60px] lg:block hidden">
                No. Invoice: {data.noinvoice}
              </p>
            </Link>
            <div
              className={`${labelColor(
                data.status
              )} flex justify-center items-center w-[67px] h-[24px] lg:w-[109px] lg:h-[36px] text-center border-[1px] rounded-[5px] lg:rounded-[10px] text-whiteSmoke500`}
            >
              {data.status}
            </div>
          </div>
          <div className="flex lg:h-[198px] px-[11px] items-start lg:items-center">
            <div className="flex w-[78px] h-[78px] md:w-[150px] md:h-[150px] mr-[25px]">
              <img
                src={data.pic}
                alt={data.title || "No Data"}
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:h-[160px] lg:leading-[28px] justify-start">
              <p className="text-[14px] lg:text-[24px] font-medium lg:w-[50%] w-[160px] mb-[15px]">
                {data.title}
              </p>
              <div className="lg:block hidden h-[150px] w-[2px] font-medium border-l-2 border-[#666666)] border-opacity-50"></div>
              <div className=" lg:h-[160px] lg:pl-[25px] text-[12px] lg:text-[24px] font-medium">
                <p className="text-[#666666] mb-[5px] lg:mb-[72px]">
                  Harga Produk
                </p>
                <p className="text-[#0F1011]">{rupiah(data.price)}</p>
              </div>
            </div>
          </div>
          <div className="h-[38px] lg:h-[74px] flex items-center rounded-b-[10px] bg-[rgba(204,204,204,0.2)] px-[11px] text-[12px] lg:text-[24px] leading-[72px] font-medium">
            <p className="w-[55%] lg:w-[65%] text-[#666666]">
              Total Pembayaran
            </p>
            <p className="w-[45%] lg:w-[35%]  text-[#0F1011] text-right lg:text-left">
              {total(data.status, rupiah(data.price))}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
