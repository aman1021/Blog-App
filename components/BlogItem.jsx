import { assets, blog_data } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogItem = ({ image, category, title, description, id }) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] border border-black bg-white hover:shadow-[-7px_7px_0px_#000000]">
      <Link href={`/blogs/${id}`}>
        <Image
          src={image}
          alt="blog image"
          width={400}
          height={400}
          className="border-b border-black"
        />
      </Link>

      <p className="ml-5 mt-5 p-1 inline-block rounded-md bg-black text-white text-sm">
        {category}
      </p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 tracking-tight text-gray-700 text-sm">
          {description}
        </p>
        <Link href={`/blogs/${id}`} className="inline-flex items-center py-2 font-semibold text-center cursor-pointer">
          Read more...
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
