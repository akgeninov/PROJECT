import React from "react";

function DetailSection(props) {
    return (
        <div class="grid grid-cols-2 divide-x">
            <div>
                <div class="grid grid-cols-1 divide-y">
                    <div><h1>Deskripsi : </h1> <br/>{props.lowongan.deskripsi_lowongan_pekerjaan}</div>
                    <div><h1>Persyaratan : </h1> <br/>{props.lowongan.persyaratan_lowongan_pekerjaan}</div>
                </div>
            </div>
            <div>Lamar sekarang</div>
            {/* kasih link dll sesuaiin figma */}
        </div>
    );
}

export default DetailSection;
