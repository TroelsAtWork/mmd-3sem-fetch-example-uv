"use client";

import Image from "next/image";

const Card = ({ img, heading }) => {
  return (
    <article className="group w-full max-w-xs overflow-hidden rounded-xl bg-white shadow-md">
      <Image
        src={img}
        alt={heading}
        width={400}
        height={300}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{heading}</h2>
      </div>
    </article>
  );
};

export default Card;
