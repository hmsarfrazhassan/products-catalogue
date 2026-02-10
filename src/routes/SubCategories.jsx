import React from "react";
import belts from "../assets/images/accessories.jpg";
import glasses from "../assets/images/glasses.jpg";
import hats from "../assets/images/hats.jpg";
import mugs from "../assets/images/mugs.jpg";
import phoneCases from "../assets/images/phone-case.jpeg";
import shirts from "../assets/images/shirts.jpeg";
import socks from "../assets/images/socks.jpg";
import winter from "../assets/images/winter.jpg";
import Card from "../components/Card";

const accessories = [
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

function SubCategories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {accessories.map((product) => (
        <Card
          title={product.title}
          bgImage={product.image}
          outerLink={product.url}
        />
      ))}
    </div>
  );
}

export default SubCategories;
