import { kelasBisnisPic } from "../../../../constants";
export default function TransactionCard() {
  const dataTransaction = [
    {
      noinvoice: "abCDef1233Hij4",
      title: "Langkah Sukses Jadi Youngtrepreneur",
      DATE: "10 Desember 2023, 10:23",
      price: 500000,
      status: "Berhasil",
      pic: kelasBisnisPic.pic1,
    },
    {
      noinvoice: "abCDef1233Hij4",
      title: "Langkah Sukses Jadi Youngtrepreneur",
      DATE: "10 Desember 2023, 10:23",
      price: "Gratis",
      status: "Menunggu",
      pic: kelasBisnisPic.pic1,
    },
    {
      noinvoice: "abCDef1233Hij4",
      title: "Langkah Sukses Jadi Youngtrepreneur",
      DATE: "10 Desember 2023, 10:23",
      price: 1000000,
      status: "Dibatalkan",
      pic: kelasBisnisPic.pic1,
    },
  ];
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
      {dataTransaction.map((data) => (
        <div className="w-[750px] h-[346px] border-[1px] border-whiteSmoke700 mb-[20px] rounded-[10px]">
          <div className="h-[74px] flex justify-between bg-[rgba(204,204,204,0.2)] p-[11px] items-center text-[18px] font-medium leading-[30px]">
            <p className="w-[335px]">Waktu Pembayaran, {data.DATE}</p>
            <div className="border-l border-[#666666] border-opacity-30 h-[45px] w-[2px]"></div>
            <p className="h-[60px]">No. Invoice: {data.noinvoice}</p>
            <div
              className={`${labelColor(
                data.status
              )} flex justify-center items-center w-[109px] h-[36px] text-center border-[1px] rounded-[10px] text-whiteSmoke500`}
            >
              {data.status}
            </div>
          </div>
          <div className="flex h-[198px] px-[11px] items-center">
            <div className="flex w-[78px] h-[78px] md:w-[150px] md:h-[150px] mr-[25px]">
              <img
                src={data.pic}
                alt={data.title || "No Data"}
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div className="flex h-[160px] leading-[28px] justify-start">
              <p className="text-[24px] font-medium w-[50%]">{data.title}</p>
              <div className=" h-[150px] w-[2px] text-[24px] font-medium border-l-2 border-[#666666)] border-opacity-50"></div>
              <div className=" h-[160px] pl-[25px] text-[24px] font-medium">
                <p className="text-[#666666] mb-[72px]">Harga Produk</p>
                <p className="text-[#0F1011]">{rupiah(data.price)}</p>
              </div>
            </div>
          </div>
          <div className="h-[74px] flex bg-[rgba(204,204,204,0.2)] px-[11px] text-[24px] leading-[72px] font-medium">
            <p className="w-[65%] text-[#666666]">Total Pembayaran</p>
            <p className=" text-[#0F1011]">
              {total(data.status, rupiah(data.price))}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
