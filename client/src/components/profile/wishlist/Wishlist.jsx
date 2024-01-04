import React from "react";
import WishlistCard from "../../global-component/card/wishlist-card/WishlistCard";

export default function Wishlist() {
  return (
    <div className="flex flex-col">
      <p className="text-[24px] md:text-[32px] font-bold leading-[72px] mb-[16px] text-black">
        Wishlist
      </p>
      <p className="mb-[37px] text-[24px] font-normal leading-[72px] text-black500">Course yang disimpan</p>
      <WishlistCard/>
    </div>
  );
}
