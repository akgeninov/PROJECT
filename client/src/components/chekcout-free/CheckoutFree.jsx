import React from "react";
import { FaPlay, FaClock, FaClipboardCheck } from "react-icons/fa";
import { images } from "../../constants";
import { Link } from 'react-router-dom';
import ButtonBlack500 from "../global-component/button/button-black500/ButtonBlack500";

function CheckoutFree () {
    return (
        <div className="w-full lg:w-full lg:h-[900px] h-[900px] lg:flex flex flex-col items-center" style={{ backgroundColor:"#F0F0F0"}}>
            <h1 className="text-[22px] lg:text-[24px] font-bold text-center leading-[32px] lg:leading-[60px] lg:mt-[20px] mt-[20px] mb-[20px] lg:mb-[20px]">
                Checkout Kelas
            </h1>
            
            <div className="w-[544px] lg:w-[544px] lg:h-[128px] h-[128px]" style={{ boxShadow: '4px 6px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', border: '2px solid #DEDEDE'  }}>
                    <div className="w-full lg:w-full lg:h-full h-full lg:flex flex ml-[20px] lg:ml-[20px] mr-[20px] lg:mr-[20px]" >
                        <img
                            src= {images.career_momen1}
                            alt= "nama"
                            className="w-[121px] lg:w-[121px] lg:h-[88px] lg:mt-[15px] lg:ml-[5px] h-[88px] object-cover rounded-[5px] mt-[15px] ml-[5px]"
                        />
                        <div className="lg:ml-[15px] ml-[15px] mt-[15px] lg:mt-[15px]">
                            <h1 className="lg:text-[16px] text-[16px] font-medium">
                            Belajar Copywriting : Tingkatkan Penjualan Bisnismu dengan Skill Copywriting
                            </h1>
                            <div className="flex lg:flex">
                                <FaPlay className="h-[14px] lg:h-[14px] lg:w-[14px] mt-[16px] w-[14px] lg:mt-[16px]" style={{color:"#5E5F60"}} />
                                <p className="lg:text-[14px] text-[14px] mt-[13px] ml-[5px] lg:mt-[13px] lg:ml-[5px]" style={{color:"#5E5F60"}}>36 Video</p>
                                <FaClock className="h-[14px] lg:h-[14px] lg:w-[14px] w-[14px] mt-[16px] ml-[15px] lg:mt-[16px] lg:ml-[15px]" style={{color:"#5E5F60"}} />
                                <p className="lg:text-[14px] text-[14px] mt-[13px] ml-[5px] lg:mt-[13px] lg:ml-[5px]" style={{color:"#5E5F60"}}>240 Menit</p>
                                <FaClipboardCheck className="h-[14px] lg:h-[14px] lg:w-[14px] mt-[16px] ml-[15px] w-[14px] lg:mt-[16px] lg:ml-[15px]" style={{color:"#5E5F60"}} />
                                <p className="lg:text-[14px] text-[14px] mt-[13px] ml-[5px] lg:mt-[13px] lg:ml-[5px]" style={{color:"#5E5F60"}}>4 Kuis</p>
                            </div>
                        </div> 
                    </div>
            </div>

            <div className="w-[544px] lg:flex flex-col items-center lg:w-[544px] lg:h-[544px] mt-[15px] h-[544px] lg:mt-[15px]" style={{ boxShadow: '4px 6px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', border: '2px solid #DEDEDE'  }}>
                
                <div className="w-full lg:w-full lg:h-[70px] lg:mt-[20px] lg:flex h-[70px] flex mt-[20px]">

                    <div className="ml-[55px]">
                <img 
                src={images.SUCCESS} 
                alt="success"
                className="mt-[20px] mb-[20px]"
            />

<h1 className="text-[22px] ml-[130px] lg:text-[24px] font-bold leading-[32px] lg:leading-[60px]  mb-[10px] lg:mb-[10px]">
               Kelas Ini Gratis!
            </h1>

            <p className=" text-[16px] text-center" style={{color:'#3F4041'}}>
            Jangan lewatkan kesempatan untuk tingkatkan skill kamu <br /> melalui kelas ini secara gratis
                </p>


            </div>
               
            </div>
            </div>

            <div className="w-[540px] lg:w-full lg:h-[96px] lg:mt-auto h-[96px] border mt-auto" style={{ boxShadow: '4px 6px 8px rgba(0, 0, 0, 0.1)', border: '2px solid #DEDEDE'  }}>
                <div className="flex lg:flex lg:ml-[300px]">
                    <div className="w-[350px] lg:w[350px] lg:mt-[20px]  mt-[20px]">
                        <p className="lg:text-[14px] text-[14px] font-light" style={{color:'#5E5F60'}}>Silakan klik tombol di samping ini agar pembayaranmu bisa segera kami konfirmasi</p>
                    </div>
                    <Link to="/checkout/approval-checkout"  className=" mt-[15px] lg:mt-[15px] lg:ml-[20px] ml-[20px]">
                        <ButtonBlack500 WIDTH={"w-[320px] lg:w-[320px]"} HEIGHT={"w-[56px] lg:w-[56px]"} TEXT_BUTTON={"Saya Sudah Bayar"}/>
                    </Link>
                </div>
            </div>
            
        </div>
            
    );
}

export default CheckoutFree;