import React from "react";
import { images } from "../../../constants";
import { Link } from 'react-router-dom';
import ButtonBlack500 from "../../global-component/button/button-black500/ButtonBlack500";
import { FaPlay, FaClock, FaClipboardCheck, FaPercent } from "react-icons/fa";

function MainCheckout() {
    return (
        <div className="w-full h-[904px] flex flex-col items-center" style={{ backgroundColor:"#F0F0F0"}}>
            <h1 className="text-[22px] lg:text-[24px] font-bold text-center leading-[32px] lg:leading-[60px] lg:mt-[20px] lg:mb-[20px]">
                Checkout Kelas
            </h1>
            <div className="w-[360px] h-[552px]" style={{ boxShadow: '4px 6px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', border: '2px solid #DEDEDE'  }}>
                <div style={{borderBottom: '2px solid #DEDEDE'}}>
                <h2 className="text-[22px] lg:text-[16px] font-bold lg:mt-[20px] lg:mb-[20px] lg:ml-[20px]">Detail Pembayaran</h2>
                </div>
                <div className="w-[310px] h-[137px] flex lg:ml-[20px] lg:mr-[20px]" style={{borderBottom: '2px solid #DEDEDE'}}>
                <img
                    src= {images.career_momen1}
                    alt= "kelas bisnis"
                    className="w-[132px] h-[104px] object-cover rounded-[6px] mt-[15px] ml-[5px]"
                />
                <div className="ml-[10px]">
                <h2 className=" mt-[15px] font-bold lg:text-[16px]">Langkah Sukses Jadi Youngtrepreneur</h2>
                    <div className="flex lg:mt-[7px] gap-[4px]">
                        <FaPlay className="h-[14px] w-[14px] lg:mt-[3px]" style={{color:"#5E5F60"}} />
                        <p className="lg:text-[14px]" style={{color:"#5E5F60"}}>36 Video</p>
                        <FaClock className="h-[14px] w-[14px] lg:mt-[3px] lg:ml-[5px] " style={{color:"#5E5F60"}} />
                        <p className="lg:text-[14px]" style={{color:"#5E5F60"}}>240 Menit</p>
                    </div>
                    <div className="flex gap-[6px]">
                    <FaClipboardCheck className="h-[14px]  lg:mt-[10px] w-[14px]" style={{color:"#5E5F60"}} />
                    <p className="lg:text-[14px] lg:mt-[8px]" style={{color:"#5E5F60"}}>4 Kuis</p>
                    </div>
                </div>
                 </div>

            <div className=" w-[310px] h-[90px] lg:ml-[20px] lg:mr-[20px]" style={{borderBottom: '2px solid #DEDEDE'}} >
                <div className="w-[310px] h-[56px] lg:mt-[27px] rounded-[10px]" style={{border: '2px solid #DEDEDE'}}>
                    <div className="flex gap-[8px]">
                        <FaPercent className="h-[14px]  lg:mt-[18px]  lg:ml-[13px] w-[14px]" style={{color:"#5E5F60"}} />
                        <p className="lg:text-[16px] lg:mt-[15px] font-bold">NEWYEAR - Potongan harga 10%</p>
                        <Link className="h-[14px]  lg:mt-[9px] lg:text-[24px]  lg:mr-[6px] w-[14px]" style={{color:"#5E5F60"}}>  &gt; </Link>
                    </div>
                </div>
            </div>

            <div className="lg:mt-[10px] lg:ml-[20px] lg:mr-[20px]" style={{borderBottom: '2px solid #DEDEDE'}}>
                <div className="flex">
                    <p className="lg:text-[14px]" style={{color:"#5E5F60"}}>Subtotal</p>
                    <p className="ml-auto lg:mr-[20px] lg:text-[14px] font-bold" style={{color:"#5E5F60"}}>Rp 500.000</p>
                </div>
                
                <div className="flex lg:mt-[8px]">
                    <p className="lg:text-[14px]" style={{color:"#5E5F60"}}>Diskon</p>
                    <p className="ml-auto lg:mr-[20px] lg:text-[14px] font-bold" style={{color:"#5E5F60"}}>-Rp 100.000</p>
                </div>

                <div className="flex lg:mt-[8px]">
                    <p className="lg:text-[14px]" style={{color:"#5E5F60"}}>Voucher Diskon</p>
                    <p className="ml-auto lg:mr-[20px] lg:text-[14px] font-bold" style={{color:"#5E5F60"}}>-Rp 40.000</p>
                </div>

                <div className="flex lg:mt-[15px] lg:mb-[10px]">
                    <p className="lg:text-[16px] font-bold">Total Bayar</p>
                    <p className="ml-auto lg:mr-[20px] lg:text-[16px] font-bold" style={{color:"#12517C"}}>Rp 360.000</p>
                </div>
            </div>

            <div className="lg:mt-[10px] lg:ml-[20px]">
                <Link>
                <ButtonBlack500 WIDTH={"w-[319px]"} TEXT_BUTTON={"Bayar Sekarang"}/>
                </Link>
            </div>
            </div>
        </div>
    );
}

export default MainCheckout;
