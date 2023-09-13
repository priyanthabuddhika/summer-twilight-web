"use client"

import Link from "next/link"

import MaterialIcon from "@/components/material-icon"

const blogData = [
  {
    img: "/images/home/Blog/1.webp",
    title: "Tips for Makeup",
    description:
      "Going shopping for your wedding gown can be as intimidating as it is exciting. After all, you are spending way more than you normally would on a dress.",
  },
  {
    img: "/images/home/Blog/2.webp",
    title: "Color Choice",
    description:
      "Going shopping for your wedding gown can be as intimidating as it is exciting. After all, you are spending way more than you normally would on a dress.",
  },
]
const Blogs = () => {
  return (
    <div id="blogs" className="container space-y-8 text-center">
      <h1 className="scroll-m-20 text-4xl font-normal tracking-tight md:text-center lg:text-5xl">
        Blog
      </h1>
      <p className="text-base font-normal leading-7 md:text-center">
        Our insights and inputs for your special day
      </p>
      <div className="max-md:space-y-5 md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-2  ">
        {blogData.map((data, index) => {
          return (
            <div className="bg-[#F6F6F6] rounded-xl">
              <div key={index} className="blog-img relative overflow-hidden ">
                <img
                  className="cursor-pointer object-cover rounded-md max-h-[300px] w-full transition duration-500 hover:scale-110"
                  src={data.img}
                  alt={data.title}
                  loading="lazy"
                />
                <div className="p-5 text-left">
                  <h4 className="text-2xl font-dmserif text-[#60526B] text-left mb-1">
                    {data.title}
                  </h4>
                  <p className="text-sm text-[#7C7C7C] text-left">
                    {data.description}
                  </p>
                  <div className="flex  mt-5">
                    <Link
                      href={""}
                      className="inline-block cursor-pointer text-base font-normal leading-none tracking-widest text-primary hover:border-b-2 mt-1 mr-2"
                    >
                      Read More
                    </Link>
                    <MaterialIcon
                      icon="east"
                      color="#1C1B1F"
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Blogs