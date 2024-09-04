import React from "react";
import "./Products.css";
import Product from "./Product";

const Products = () => {
  return (
    <>
      <div className="products_row">
        <Product
          id="1"
          image="https://m.media-amazon.com/images/I/61is2ZwnHEL._AC_UY327_FMwebp_QL65_.jpg"
          title=" SteelSeries Apex 3 RGB Gaming Keyboard – 10-Zone RGB Illumination –
          IP32 Water Resistant – Premium Magnetic"
          rating={5}
          price={59.99}
        />

        <Product
          id="2"
          image="https://m.media-amazon.com/images/I/71segDxCn+L._AC_UY327_FMwebp_QL65_.jpg"
          title="Chants of Sennaar Nintendo Switch"
          rating={5}
          price={93.99}
        />
        <Product
          id="3"
          image="https://m.media-amazon.com/images/I/51tbWVPtckL._AC_UY327_FMwebp_QL65_.jpg"
          title="Playstation Sony 4, 500GB Slim System [CUH-2215AB01], Black, 3003347"
          rating={4}
          price={279.99}
        />
      </div>
      <div className="products_row">
        <Product
          id="4"
          image="https://m.media-amazon.com/images/I/61aT5JiZn2L._AC_UL480_FMwebp_QL65_.jpg"
          title="AutoFull M6 Gaming Chair, Ergonomic Office Chair"
          rating={3}
          price={699.99}
        />
        <Product
          id="5"
          image="https://m.media-amazon.com/images/I/61GYxYAQd5L._AC_UY327_FMwebp_QL65_.jpg"
          title="Meta Quest 3 128GB— Breakthrough Mixed Reality Headset — Powerful Performance"
          rating={5}
          price={499.99}
        />
        <Product
          id="6"
          image="https://m.media-amazon.com/images/I/81GrCeuCzxL._AC_UY327_FMwebp_QL65_.jpg"
          title="ASUS ROG Strix G16 (2024) Gaming Laptop, 16” 16:10 FHD 165Hz Display, NVIDIA® GeForce RTX™ 4060, Intel"
          rating={4}
          price={1281.63}
        />
      </div>
      <div className="products_row">
        <Product
          id="7"
          image="https://m.media-amazon.com/images/I/81D9ybwtAEL._AC_UL480_FMwebp_QL65_.jpg"
          title="Mckanti 8 Pcs Drink Coasters with Holder, Minimalist Cotton Woven 4 Colors Absorbent"
          rating={5}
          price={8.99}
        />
        <Product
          id="8"
          image="https://m.media-amazon.com/images/I/71eVfGp06oL._AC_UL480_FMwebp_QL65_.jpg"
          title="Decorative Books for Home Decor Living Room, White Table Decor Blank Books for Coffee Table, Hardcover Faux"
          rating={4}
          price={12.49}
        />
        <Product
          id="9"
          image="https://m.media-amazon.com/images/I/51napIbnqtL._AC_UL480_FMwebp_QL65_.jpg"
          title="Vacuum Cleaner Strong Suction Powerful Lightweight for Home Cordless Vacuum Cleaner, 210W 25Kpa"
          rating={4}
          price={77.99}
        />
      </div>
    </>
  );
};

export default Products;
