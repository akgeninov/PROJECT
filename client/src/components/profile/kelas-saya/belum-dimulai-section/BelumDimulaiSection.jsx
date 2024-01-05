import React, { useEffect, useState } from "react";
import { api } from "../../../../api/api";
import KelasCard from "../../../global-component/card/kelas-card/KelasCard";

export default function BelumDimulaiSection(){
    const [kelas, setKelas] = useState([]);

  const fetchKelas = async () => {
    try {
      const response = await api.post(
        `${process.env.REACT_APP_API_BASE_URL}/userKelas/nonProgess`,
        {
          userID: 8,
        }
      );
      setKelas(response.data.data);
      // console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchKelas();
  }, []);
  
  return (
    <div>
      {kelas.map((kelas, ) => (
        <KelasCard kelas={kelas} />
      ))}
    </div>
  );
}