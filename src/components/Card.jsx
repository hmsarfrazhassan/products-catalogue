import React from "react";

const Card = ({ bgImage, title, outerLink }) => {
  return (
    <a
      href={outerLink}
      target="_blank"
      style={{ backgroundImage: `url(${bgImage})` }}
      className={`relative h-60 w-full bg-no-repeat bg-center bg-cover rounded-lg transition-all duration-300 ease-out
  hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-300`}
    >
      <p className="absolute w-full bottom-0 p-3 bg-gray-800/90 text-white rounded-b-lg">
        {title}
      </p>
    </a>
  );
};

export default Card;
