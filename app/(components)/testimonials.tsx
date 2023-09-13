"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"
import MaterialIcon from "@/components/material-icon"

const testimonials = [
  {
    img: "/images/home/testimonials/1.webp",
    bgImg: "/images/home/testimonials/1-bg.webp",
    title: "Mewni & Sanjay",
    description:
      "I couldn’t have dreamt of a more beautiful place to host our wedding. Not only are the views breathtaking but the entire ranch looks like something out of a movie.",
  },
  {
    img: "/images/home/testimonials/2.webp",
    bgImg: "/images/home/testimonials/2-bg.webp",
    title: "Primashi & Naveen",
    description:
      "I couldn't have imagined a better photographer to capture our special moments. Not only are the photos breathtaking, but the entire experience felt like a scene from a movie. Our memories were beautifully preserved, thanks to this exceptional photographer.",
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  return (
    <div>
      <div className="space-y-8 text-center">
        <h1 className="mb-16 scroll-m-20 text-4xl font-normal tracking-tight lg:mb-24 lg:text-5xl">
          Testimonials
        </h1>
        <div
          className={
            "h-full w-full bg-[url(" +
            testimonials[currentIndex].bgImg +
            ")] bg-fixed bg-center"
          }
        >
          <div className="bg-secondary">
            <div className="container md:flex">
              <div className="md:w-1/2">
                <img
                  className="mx-auto w-3/4 -translate-y-12 rounded-xl md:w-9/12  md:transition-transform md:duration-300 md:ease-in-out md:hover:translate-y-[-25px]"
                  src={testimonials[currentIndex].img}
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="my-auto h-full space-y-8 max-md:pb-16 md:w-1/2">
                <img
                  className="mx-auto"
                  src="/images/home/testimonials/quotes.svg"
                  alt=""
                  loading="lazy"
                />
                <h2 className={cn("text-3xl font-normal leading-9")}>
                  {testimonials[currentIndex].title}
                </h2>
                <p className="font-dmserif text-lg font-normal italic">
                  {testimonials[currentIndex].description}
                </p>
                <div className="flex justify-center gap-12">
                  <MaterialIcon
                    icon="west"
                    color="#1C1B1F"
                    className="cursor-pointer transition-transform duration-300 ease-in-out hover:translate-x-[-10px]"
                    onClick={() => {
                      if (currentIndex > 0) {
                        setCurrentIndex(currentIndex - 1)
                      } else {
                        setCurrentIndex(testimonials.length - 1)
                      }
                    }}
                  />
                  <MaterialIcon
                    icon="east"
                    color="#1C1B1F"
                    className="cursor-pointer transition-transform duration-300 ease-in-out hover:translate-x-[10px]"
                    onClick={() => {
                      if (currentIndex < testimonials.length - 1) {
                        setCurrentIndex(currentIndex + 1)
                      } else {
                        setCurrentIndex(0)
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
