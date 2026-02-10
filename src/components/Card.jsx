import React from "react";

const Card = ({ bgImage, title, outerLink }) => {
  return (
    <a
      href={outerLink}
      style={{ backgroundImage: `url(${bgImage})` }}
      className={`relative h-60 w-full bg-no-repeat bg-center bg-cover rounded-lg`}
    >
      <p className="absolute w-full bottom-0 p-3 bg-gray-800/90 text-white rounded-b-lg">
        {title}
      </p>
    </a>
  );
};

export default Card;
