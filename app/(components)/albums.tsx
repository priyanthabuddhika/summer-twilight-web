"use client"

import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const albumData = [
  {
    img: "/images/home/albums/1.webp",
    title: "Mewni & Sanjay",
  },
  {
    img: "/images/home/albums/2.webp",
    title: "Primashi & Naveen",
  },
  {
    img: "/images/home/albums/3.webp",
    title: "Nimesha & Mithun",
  },
  {
    img: "/images/home/albums/4.webp",
    title: "Ishara & Praneed",
  },
]

const Albums = () => {
  const main = useRef<HTMLDivElement>(null)
  const tl1 = useRef<gsap.core.Timeline>()

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      tl1.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: "#albums",
            start: "top bottom",
            end: "top center",
            toggleActions: "play none none reverse",
          },
        })
        .from(".album-img", {
          scale: 0.1,
          y: 60,
          ease: "power1.inOut",
          stagger: 0.2,
          duration: 0.6,
        })

      return () => {
        tl1.current?.kill()
      }
    }, main) // <- Scope!
    return () => ctx.revert() // <- Cleanup!
  }, [])

  return (
    <div ref={main}>
      <div id="albums" className="container space-y-8 text-center">
        <h1 className="scroll-m-20 text-4xl font-normal tracking-tight md:text-left lg:text-5xl">
          Recent Albums
        </h1>
        <p className="text-base font-normal leading-7 md:text-left">
          Going shopping for your wedding gown can be as intimidating as it is
          exciting. After all, you are spending way more than you normally would
          on a dress.
        </p>
        <div className="max-md:space-y-5 md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {albumData.map((data, index) => {
            return (
              <div key={index} className="album-img relative overflow-hidden">
                <img
                  className="cursor-pointer rounded-md transition duration-500 hover:scale-110"
                  src={data.img}
                  alt={data.title}
                  loading="lazy"
                />
                <p className="absolute bottom-0 z-10 p-3 text-sm text-[#CFC8BD] shadow transition-transform duration-300 ease-in-out hover:translate-y-[-10px]">
                  {data.title}
                </p>
                <div className="absolute bottom-0 left-0 h-1/3 w-full rounded-b-md bg-gradient-to-t from-neutral-900 from-10% to-transparent"></div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Albums
