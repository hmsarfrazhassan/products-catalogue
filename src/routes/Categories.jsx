import React from "react";
import glasses from "../assets/images/glasses.jpg";
import hats from "../assets/images/hats.jpg";
import mugs from "../assets/images/mugs.jpg";
import phoneCases from "../assets/images/phone-case.jpeg";
import shirts from "../assets/images/shirts.jpeg";
import socks from "../assets/images/socks.jpg";
import winter from "../assets/images/winter.jpg";
import bags from "../assets/images/bags.jpg";
import jewellery from "../assets/images/jewellery.jpg";
import shoes from "../assets/images/shoes.jpg";
import belts from "../assets/images/belts.jpg";
import wallets from "../assets/images/wallets.jpg";
import watches from "../assets/images/watches.jpg";
import Card from "../components/Card";

const accessories = [
  {
    title: "Designer Bags",
    image: bags,
    url: "https://drive.google.com/drive/folders/1mPeb0bTJUtQs8aXxRuxd0n2FO4tJ-Q69?usp=drive_link",
  },
  {
    title: "Belts",
    image: belts,
    url: "https://drive.google.com/drive/folders/1aLLwCQovIrWN6o10svXHsGA58Z2UA2nL?usp=drive_link",
  },
  {
    title: "Jewellery",
    image: jewellery,
    url: "https://drive.google.com/drive/folders/1E90hgZIPJjZp2FEphQV3GBS5nlezah1V?usp=drive_link",
  },
  {
    title: "Shoes",
    image: shoes,
    url: "https://drive.google.com/drive/folders/1T2SuGpddbDJsKtnCY5yjZ5hhw1KIOTsX?usp=drive_link",
  },
  {
    title: "Wallets",
    image: wallets,
    url: "https://drive.google.com/drive/folders/1zjVOcv5t5Zi1EJv12QL5WqpKeG9X82um?usp=drive_link",
  },
  {
    title: "Watches",
    image: watches,
    url: "https://drive.google.com/drive/folders/1QSNHXObXXWrobW557xue6FLQPdzN5cdX?usp=drive_link",
  },
  {
    title: "Glasses",
    image: glasses,
    url: "https://drive.google.com/drive/folders/1BKnEAco9-sDDCxGHPwTUCzCGpNI4s1BO?usp=drive_link",
  },
  {
    title: "Hats",
    image: hats,
    url: "https://drive.google.com/drive/folders/1fI76jUgOzLjy5uWG5MU-mJYM1uovOyRX?usp=drive_link",
  },
  {
    title: "Mugs and Trays",
    image: mugs,
    url: "https://drive.google.com/drive/folders/1lPAThtnRyZc3JLrfaMcGaSbUCeFBf3Ke?usp=drive_link",
  },
  {
    title: "Phone Cases",
    image: phoneCases,
    url: "https://drive.google.com/drive/folders/1hjBqD28lqCl7ug1M3kfYfDSCYmfr1Vch?usp=drive_link",
  },
  {
    title: "Shirts & Dresses",
    image: shirts,
    url: "https://drive.google.com/drive/folders/13SLi_EGDq-hk5dt3DrmCGXxfwwZxZxED?usp=drive_link",
  },
  {
    title: "Socks",
    image: socks,
    url: "https://drive.google.com/drive/folders/1Yaot7wYasAFc7FzdpEGfHrUfrnssxHDk?usp=drive_link",
  },
  {
    title: "Winter Apparels",
    image: winter,
    url: "https://drive.google.com/drive/folders/1NEdlwFp4XkM1K1fo8jwld0c4maQ1BSCd?usp=drive_link",
  },
];

function Categories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {accessories.map((product) => (
        <Card
          key={product.title}
          title={product.title}
          bgImage={product.image}
          outerLink={product.url}
        />
      ))}
    </div>
  );
}

export default Categories;
