import { blog_data } from "@/Assets/assets";
import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import axios from "axios";
import Link from "next/link";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const fetchblogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response?.data?.blogs);
    console.log(response?.data?.blogs);
  };

  useEffect(() => {
    fetchblogs();
  }, []);

  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All" ? "bg-black text-white py-1 px-4 rounded-md" : ""
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("Technology")}
          className={
            menu === "Technology"
              ? "bg-black text-white py-1 px-4 rounded-md"
              : ""
          }
        >
          Technology
        </button>
        <button
          onClick={() => setMenu("Startup")}
          className={
            menu === "Startup" ? "bg-black text-white py-1 px-4 rounded-md" : ""
          }
        >
          StartUp
        </button>
        <button
          onClick={() => setMenu("Lifestyle")}
          className={
            menu === "Lifestyle"
              ? "bg-black text-white py-1 px-4 rounded-md"
              : ""
          }
        >
          LifeStyle
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blogs.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-700 text-md">No blogs available.</p>
            <Link href= '/admin/addProduct'>
              <button className="mt-4 font-medium bg-blue-500 text-white py-2 px-4 rounded-md">
                Add Blogs
              </button>
            </Link>
          </div>
        ) : (
          blogs
            .filter((item) => (menu === "All" ? true : item.category === menu))
            .map((item) => {
              return (
                <BlogItem
                  key={item._id}
                  id={item._id}
                  title={item.title}
                  image={item.image}
                  description={item.description}
                  category={item.category}
                />
              );
            })
        )}
      </div>
    </div>
  );
};

export default BlogList;
