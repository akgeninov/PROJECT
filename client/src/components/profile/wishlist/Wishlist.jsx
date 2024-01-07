import React, { useEffect, useState } from "react";
import { api } from "../../../api/api";
import WishlistCard from "../../global-component/card/wishlist-card/WishlistCard";

function Wishlist() {
    const [wishlist, setWishlist] = useState([]);
    //const [count, setCount] = useState(0);

    const fetchWislist = async () => {
      try {
        const response = await api.get(
          `${process.env.REACT_APP_API_BASE_URL}/kelasWishlist/myWishlist/${3}`,
        );
        setWishlist(response.data.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchWislist();
    }, []);
    console.log(wishlist.wishlist)

    useEffect(() => {
      console.log(wishlist)
    },[wishlist]);

  return (
    <div className="flex flex-col">
      <p className="text-[24px] md:text-[32px] font-bold leading-[72px] mb-[16px] text-black">
        Wishlist
      </p>
      <p className="mb-[37px] text-[24px] font-normal leading-[72px] text-black500">Course yang disimpan</p>
      <div className="grid grid-cols-1  lg:grid-cols-2  xl:grid-cols-3  gap-[24px]">
      {wishlist.map((wishlist, ) =>  {
      //setCount((prev) => prev+1)
      return (
      //<div>{count}</div>
      <WishlistCard wishlist={wishlist} />
      )})}
      </div>
    </div>
  );
}

export default Wishlist;