import React from "react";
import { images } from "../../../constants";
import { Link } from 'react-router-dom';
import ButtonBlack500 from "../../global-component/button/button-black500/ButtonBlack500";
import { FaPlay, FaClock, FaClipboardCheck } from "react-icons/fa";

function MainCheckout() {
    return (
        <div className="w-full h-[1000px] flex flex-col items-center" style={{ backgroundColor:"#F0F0F0"}}>
            <h1 className="text-[22px] lg:text-[24px] font-bold text-center leading-[32px] lg:leading-[60px] lg:mt-[20px] lg:mb-[20px]">
                Checkout Kelas
            </h1>
            <div className="w-[544px] h-[128px]" style={{ boxShadow: '4px 6px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', border: '2px solid #DEDEDE'  }}>
                <div className="w-full h-full flex lg:ml-[20px] lg:mr-[20px]" >
                    <img
                        src= {images.career_momen1}
                        alt= "kelas bisnis"
                        className="w-[121px] h-[88px] object-cover rounded-[5px] mt-[15px] ml-[5px]"
                    />
                    <div className="lg:ml-[15px] lg:mt-[15px]">
                        <h1 className="lg:text-[16px] font-medium">
                            Belajar Copywriting: Tingkatkan Penjualan <br />Bisnismu dengan Skill Copywriting
                        </h1>
                        <div className="flex">
                            <FaPlay className="h-[14px] w-[14px] lg:mt-[16px]" style={{color:"#5E5F60"}} />
                            <p className="lg:text-[14px] lg:mt-[13px] lg:ml-[5px]" style={{color:"#5E5F60"}}>36 Video</p>
                            <FaClock className="h-[14px] w-[14px] lg:mt-[16px] lg:ml-[15px]" style={{color:"#5E5F60"}} />
                            <p className="lg:text-[14px] lg:mt-[13px] lg:ml-[5px]" style={{color:"#5E5F60"}}>240 Menit</p>
                            <FaClipboardCheck className="h-[14px] w-[14px] lg:mt-[16px] lg:ml-[15px]" style={{color:"#5E5F60"}} />
                            <p className="lg:text-[14px] lg:mt-[13px] lg:ml-[5px]" style={{color:"#5E5F60"}}>4 Kuis</p>
                        </div>
                    </div>    
                </div>

                <div className="w-[544px] h-[356px] lg:mt-[15px]" style={{ boxShadow: '4px 6px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', border: '2px solid #DEDEDE'  }}>
                    <div className="w-full h-[70px] flex mt-[20px]" style={{borderBottom: '2px solid #DEDEDE'}}>
                        <div className="lg:ml-[20px]">
                            <p className="lg:text-[14px]" style={{color: "#3F4041"}}>Bayar Sebelum</p>
                            <p className="lg:mt-[5px] lg:text-[16px] font-medium">Rabu, 27 Desember 2023, 10:40 WIB</p>
                        </div>
                        <div className="w-[134px] h-[32px] ml-auto mr-[20px] rounded-[6px] flex" style={{border: '2px solid #BA0000', backgroundColor:"#F8E6E6"}}>
                            <FaClock className="h-[14px] w-[14px] lg:mt-[8px] lg:ml-[8px]" style={{color:"#BA0000"}} />
                            <p className=" lg:mt-[3px] lg:ml-[10px] lg:text-[16px] font-medium" style={{color:"#BA0000"}}>23 : 59 : 05</p>
                        </div>
                    </div>
                    <div className="w-full h-full lg:ml-[20px] mt-[20px]">
                        <div className="flex">
                            <img
                            src= {images.career_momen1}
                            alt= "kelas bisnis"
                            className="w-[48px] h-[48px] object-cover rounded-[6px]"
                             />
                                <div>
                                     <p className="lg:text-[14px] lg:ml-[20px]" style={{color: "#3F4041"}}>Transfer Bank BCA </p>
                                     <p className="lg:text-[16px] lg:ml-[20px] font-medium">PT. Digital Bisnis Kreatif</p>
                                </div>
                        </div>
                        <div className="w-[504px] h-[56px] mt-[20px] rounded-[10px]" style={{backgroundColor:"#EDEDEE"}}>
                            <div className="flex lg:ml-[20px] ">
                                <p className="lg:text-[22px] mt-[12px] font-bold">5623896490</p>
                                <div className="w-[64px] h-[32px] rounded-[6px] mt-[12px] ml-auto mr-[20px] " style={{border: '1px solid #0F1011'}}>
                                    <p className="mt-[2px] ml-[13px] font-medium">Salin</p>      
                                </div>
                            </div>
                            <div className="mt-[20px]">
                                <p className="lg:text-[14px]" style={{color: "#3F4041"}}>Total Bayar</p>
                                <div className="w-[504px] h-[56px] mt-[10px] rounded-[10px]" style={{backgroundColor:"#EDEDEE"}}>
                                    <div className="flex lg:ml-[20px] ">
                                     <p className="lg:text-[22px] mt-[12px] font-bold">Rp 360.000</p>
                                         <div className="w-[64px] h-[32px] rounded-[6px] mt-[12px] ml-auto mr-[20px] " style={{border: '1px solid #0F1011'}}>
                                            <p className="mt-[2px] ml-[13px] font-medium">Salin</p>      
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[544px] h-[200px] lg:mt-[15px]" style={{ boxShadow: '4px 6px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', border: '2px solid #DEDEDE'  }}>
                    <div className="w-full h-[60px] flex mt-[20px]" style={{borderBottom: '2px solid #DEDEDE'}}>
                        <div className=" w-full h-full lg:ml-[20px] flex">
                            <p className="lg:mt-[5px] lg:text-[16px] font-medium">Detail Pembayaran</p>
                                <div className="w-[148px] h-[36px] rounded-[6px] ml-auto mr-[20px] " style={{border: '1px solid #0F1011'}}>
                                    <p className="mt-[4px] ml-[13px] font-medium">ID#GL12345678</p>      
                                </div>
                        </div>
                    </div>

                    <div className="lg:ml-[20px] lg:mt-[20px]">
                        <div className="flex mr-[20px]">
                            <p className="lg:text-[14px]" style={{color: "#5E5F60"}}>Subtotal</p>
                            <p className="lg:text-[14px] font-medium ml-auto" style={{color: "#5E5F60"}}>Rp 500.000</p>
                        </div>

                        <div className="flex mr-[20px] mt-[8px]">
                            <p className="lg:text-[14px]" style={{color: "#5E5F60"}}>Diskon</p>
                            <p className="lg:text-[14px] font-medium ml-auto" style={{color: "#5E5F60"}}>-Rp 140.000</p>
                        </div>

                        <div className="flex mr-[20px] mt-[8px]">
                            <p className="lg:text-[16px]  font-medium" style={{color: "#5E5F60"}}>Total Bayar</p>
                            <p className="lg:text-[16px] font-medium ml-auto" style={{color: "#12517C"}}>Rp 360.000</p>
                        </div>
                    </div>
                </div>
                
                <Link>
                <h1 className="text-[22px] lg:text-[16px] font-bold text-center leading-[32px] lg:leading-[60px] lg:mt-[20px] lg:mb-[20px] underline">
                    Batalkan Pembelian
                </h1>
                </Link>
            </div>

            <div className="w-full h-[96px] border mt-auto" style={{ boxShadow: '4px 6px 8px rgba(0, 0, 0, 0.1)', border: '2px solid #DEDEDE'  }}>
                <div className="flex ml-[300px]">
                    <div className="w-[350px]  mt-[20px]">
                        <p className="lg:text-[14px] font-light" style={{color:'#5E5F60'}}>Silakan klik tombol di samping ini agar pembayaranmu bisa segera kami konfirmasi</p>
                    </div>
                    <Link className=" mt-[15px] ml-[20px]">
                        <ButtonBlack500 WIDTH={"w-[320px]"} HEIGHT={"w-[56px]"} TEXT_BUTTON={"Saya Sudah Bayar"}/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MainCheckout;
