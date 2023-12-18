import React from "react";
import teamPic from "../../../constants/teamPic";

function HeroSection() {
  return (
    <div className="bg-cover px-[16px] sm:px-[100px] w-full 2xl:max-w-[1084px] max-h-fit flex flex-col items-center my-[160px] ">
      <p className="text-[24px] lg:text-[40px] font-bold font-[Heebo] leading-[36px] lg:leading-[60px] max-w-[250px] mb-[42px]">
        Tim Kami
      </p>

      <div className="flex flex-wrap gap-[52px] h-max-[424px] items-center justify-center sm:mb-[50px]">
        <div className="w-[516px] h-[424px] relative">
          <div className="bg-indigoDye500 w-[492px] h-[400px] top-[24px] absolute"></div>
          <img
            src={teamPic.team1}
            alt="Oraldo Emeraldi Anggoro Pic"
            className="w-[492px] h-[400px] absolute left-[24px]"
          />
        </div>
        <div className="w-[512px] h-fit">
          <div className="mb-[24px]">
            <p className="text-[24px] font-bold leading-[36px] mb-[12px]">Oraldo Emeraldi Anggoro</p>
            <p className="text-[18px] font-medium leading-[28px] text-indigoDye500">CEO & Co-Founder</p>
          </div>
          <p className="text-[18px] font-light leading-[28px]">
            Aldo biasa dipanggil, merupakan lulusan dari Universitas Surabaya
            dengan predikat cumlaude serta mahasiswa berprestasi tahun 2019.
            Sejak tahun 2018, Aldo sudah memiliki banyak pengalaman dalam dunia
            Digital Marketing dan hal tersebut membuatnya terjun dengan
            membangun usaha dibidang digital untuk membantu para pebisnis UMKM
            agar dapat mengembangkan usahanya melalui dunia digital.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-[52px] h-max-[424px] items-center justify-center">
      <div className="w-[512px] h-fit">
          <div className="mb-[24px]">
            <p className="text-[24px] font-bold leading-[36px] mb-[12px]">Shandy Christofer Setyono</p>
            <p className="text-[18px] font-medium leading-[28px] text-indigoDye500">COO & Co-Founder</p>
          </div>
          <p className="text-[18px] font-light leading-[28px]">
            Shandy merupakan lulusan dari Universitas Parahyangan pada tahun
            2019 dengan predikat cumlaude. Sejak tahun 2018 Shandy telah
            memiliki pengalaman dalam bidang data dan pengembangan bisnis serta
            telah membantu banyak perusahaan start-up ternama seperti Tokopedia,
            Gojek, Blibli, dan lainnya.
          </p>
        </div>
        <div className="w-[516px] h-[424px] relative">
          <div className="bg-indigoDye500 w-[492px] h-[400px] top-[24px] left-[24px] absolute"></div>
          <img
            src={teamPic.team2}
            alt="Shandy Christofer Setyono Pic"
            className="w-[492px] h-[400px] absolute"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
