"use client";
import { assets } from "@/Assets/assets";
import Footer from "@/components/Footer";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [data, setData] = useState(null);

  //   console.log(params, typeof params.id)

  const fetchBlogData = async() => {
    const response = await axios.get("/api/blog", {
      params: {id: params.id}
    })

    setData(response.data) 
  };


  useEffect(() => {
    fetchBlogData();
  }, []);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-24">
        <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            src={assets.logo}
            alt="logo"
            width={180}
            className="w-[130px] sm:w-auto"
          />
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">
            Add Blog
            <Image src={assets.arrow} alt="arrow" />
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-4xl font-semibold max-w-[700px] mx-auto">
            {data.blog.title}
          </h1>
          <Image
            className="mx-auto mt-6 border border-white rounded-full"
            src={data?.blog.authorImg}
            alt="author-img"
            width={80}
            height={80}
          />
          <p className="mt-1 pb-2 text-xl max-w-[720px] mx-auto">
            {data.blog.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image className="border-4 border-white mb-20" src={data.blog.image} width={1280} height={720} alt=""/>
        <div className="blog-content" dangerouslySetInnerHTML={{__html:data.blog.description}}>
        </div>
        <div className="my-24">
            <p className="text-black text-xl font-semibold my-4">Share this article on social media:</p>
            <div className="flex">
            <Image src={assets.twitter_icon} alt='twt-icon' width={50}/>
            <Image src={assets.googleplus_icon} alt='g-icon' width={50}/>
            </div>
        </div>
      </div>
      <Footer/>
    </>
  ) : (
    <h1 className=" font-bold text-xl text-center py-[100px]">Loading...</h1>
  );
};

export default Page;
