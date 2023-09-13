"use client"

import React, { useLayoutEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

const homeServices = [
  {
    img: "/images/home/services/1.png",
    title: "Weddings",
    description:
      "I am dedicated to celebrating your story; the one that is worth.",
  },
  {
    img: "/images/home/services/2.png",
    title: "Engagements",
    description:
      "I am dedicated to celebrating your story; the one that is worth.",
  },
  {
    img: "/images/home/services/3.svg",
    title: "Casual Shots",
    description:
      "I am dedicated to celebrating your story; the one that is worth.",
  },
]

const Services = () => {
  const main = useRef<HTMLDivElement>(null)
  const tl1 = useRef<gsap.core.Timeline>()
  const tl2 = useRef<gsap.core.Timeline>()

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      tl2.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: "#services",
            start: "top bottom",
            end: "top center",
            toggleActions: "play none none reverse",
          },
        })
        .from(".card", {
          scale: 0.1,
          y: 60,
          ease: "power1.inOut",
          stagger: 0.2,
          duration: 0.6,
          reversed: true,
        })

      tl1.current = gsap
        .timeline()
        .to(".services-img", {
          scale: 1.075,
          duration: 0.5,
          ease: "power2.inOut",
        }) // Bounce up
        .to(".services-img", { scale: 1, duration: 0.5, ease: "power2.inOut" }) // Bounce down

      tl1.current.repeat(-1)

      return () => {
        tl1.current?.kill()
      }
    }, main) // <- Scope!
    return () => ctx.revert() // <- Cleanup!
  }, [])

  return (
    <div ref={main}>
      <section
        id="services"
        className="h-full w-full bg-[url('/images/home/services/bg.webp')] bg-fixed bg-center"
      >
        <div className="bg-secondary py-8 md:py-12 lg:py-24 ">
          <div className="container space-y-8 text-center">
            <h1 className="scroll-m-20 text-4xl font-normal tracking-tight lg:text-5xl">
              Our Services
            </h1>
            <div className="flex justify-center">
              <p className="w-4/5 text-center text-base font-normal leading-7 md:w-2/3 lg:w-1/2">
                Tuxedo photo booth photographer limousine cake dessert guitar
                acoustic bass Will overpriced florist seat covers mother veil
                sparkles.
              </p>
            </div>
            <div className="flex flex-wrap gap-5 md:flex-nowrap">
              {homeServices.map((item, index) => {
                return (
                  <div
                    key={item.title}
                    className={cn(
                      "card w-full space-y-6 rounded-xl px-8 py-24 md:w-1/2 lg:w-1/3",
                      index === 2
                        ? "bg-primary text-primary-foreground"
                        : "bg-background"
                    )}
                  >
                    <img
                      className="services-img m-auto w-1/4"
                      src={item.img}
                      alt={item.title}
                    />
                    <h2
                      className={cn(
                        "text-3xl font-normal leading-9",
                        index === 2 ? "text-primary-foreground" : ""
                      )}
                    >
                      {item.title}
                    </h2>
                    <p className="mt-2">{item.description}</p>
                  </div>
                )
              })}
            </div>
            <Link
              href={"/services"}
              className="inline-block cursor-pointer border-b border-primary pb-2 text-base font-normal leading-none tracking-widest text-primary hover:border-b-2"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
