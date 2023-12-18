import React from "react";
import NavbarKelasSaya from './../../../components/kelas-saya/navbar-kelas-saya/NavbarKelasSaya';


export default function KelasSaya() {
    return (
    <div className="flex gap-[20px] justify-center items-center shrink-0">
        <div>Sidebar</div>
        <div className="flex flex-col">
            <NavbarKelasSaya/>
        </div>
    </div>
  );
}

  

