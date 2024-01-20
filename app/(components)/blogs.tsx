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
        {blogData.map((data) => {
          return (
            <div key={data.title} className="rounded-xl bg-[#F6F6F6]">
              <div className="blog-img relative overflow-hidden ">
                <img
                  className="max-h-[300px] w-full cursor-pointer rounded-md object-cover transition duration-500 hover:scale-110"
                  src={data.img}
                  alt={data.title}
                  loading="lazy"
                />
                <div className="p-5 text-left">
                  <h4 className="mb-1 text-left font-dmserif text-2xl text-[#60526B]">
                    {data.title}
                  </h4>
                  <p className="text-left text-sm text-[#7C7C7C]">
                    {data.description}
                  </p>
                  <div className="mt-5  flex transition-transform duration-300 ease-in-out hover:translate-x-[5px]">
                    <Link
                      href={""}
                      className="mr-2 mt-1 cursor-pointer text-base font-normal leading-none text-primary "
                    >
                      Read More
                    </Link>
                    <MaterialIcon
                      icon="east"
                      className="cursor-pointer text-primary "
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
