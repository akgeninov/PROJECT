import React from 'react'
import CardsData from './CardsData';

// function LanggananCards() {
//   return (
//     <div className=" flex flex-row px-[60px] mx-[60px] h-[1000px] gap-10 items-center  overflow-hidden shadow-lg">
//         <div className=" rounded-lg text-white h-full w-full bg-[#3F4041] px-[60px] ">
//             ansduhaowidjasuhjoi
//         </div>
//         <div className=" rounded-lg text-black h-full w-full bg-[#F4F4F4] px-[60px] ">
//             ksdajbdwndkawduoasnl
//         </div>
//         <div className=" rounded-lg text-white h-full w-full bg-[#3F4041] px-[60px] ">
//             aiwduoaiwjdawdoiajso
//         </div>

//     </div>
//   )
// }

// export default LanggananCards

const dataPaket = [
  {
    jenisPaket: "Paket Basic",
    hargaNormal: "Rp 3.000.000",
    hargaDiskon: "Rp 1.990.000",
    benefit: ["Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet"],
    bestOffer: false,
  },
  {
    jenisPaket: "Paket Premium",
    hargaNormal: "Rp 7.000.000",
    hargaDiskon: "Rp 4.990.000",
    benefit: ["Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet"],
    bestOffer: true,
  },
  {
    jenisPaket: "Sesuaikan Dengan Keinginanmu",
    hargaNormal: "",
    hargaDiskon: "Rp 7.000.000",
    benefit: ["Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet"],
    bestOffer: false,
  }
]


function LanggananCards() {
  return (
    <div className={` flex flex-col sm:flex-row justify-center items-center text-center h-fit max-w-[400px] max-h-[6000px] gap-[50px] mb-[50px]`} >
      {dataPaket?.map((item, index) => (
        <CardsData
          key={index}
          jenisPaket={item.jenisPaket}
          hargaNormal={item.hargaNormal}
          hargaDiskon={item.hargaDiskon}
          benefit={item.benefit}
          bestOffer={item.bestOffer}
        />
      ))}
    </div>  
  );
}

export default LanggananCards;
