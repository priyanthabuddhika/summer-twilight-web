"use client"

import React, { useLayoutEffect, useRef, useState } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

const tabs = ["Weddings", "Engagements", "Casual Shots"]

const OurWork = () => {
  const main = useRef<HTMLDivElement>(null)
  const tl1 = useRef<gsap.core.Timeline>()

  const [selectedTab, setTab] = useState(tabs[0])

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      tl1.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".our-work",
            start: "top bottom",
            end: "center 40%",
            scrub: 1,
          },
        })
        .from(".work-img", {
          scale: 0.1,
          y: 60,
          ease: "power1.inOut",
          delay: 1,
          stagger: 0.2,
          duration: 2,
        })

      return () => {
        tl1.current?.clear()
      }
    }, main) // <- Scope!
    return () => ctx.revert() // <- Cleanup!
  }, [])

  return (
    <div ref={main}>
      <div className="our-work container space-y-8 text-center">
        <h1 className="scroll-m-20 text-4xl font-normal tracking-tight lg:text-left lg:text-5xl">
          Our Work
        </h1>
        <div className="lg:flex lg:items-center lg:justify-between">
          <p className="text-base font-normal leading-7 lg:w-1/2 lg:text-left">
            Going shopping for your wedding gown can be as intimidating as it is
            exciting. After all, you are spending way more than you normally
            would on a dress.
          </p>
          <div className="flex justify-between gap-5 max-lg:mt-8 sm:justify-center sm:gap-10">
            {tabs.map((tab) => {
              return (
                <p
                  key={tab}
                  onClick={() => {
                    setTab(tab)
                  }}
                  className={cn(
                    "cursor-pointer border-primary ",
                    selectedTab === tab ? " border-b-2" : "hover:border-b-2"
                  )}
                >
                  {tab}
                </p>
              )
            })}
          </div>
        </div>
        <div className="max-md:space-y-5 md:grid md:grid-cols-3 md:gap-5">
          {[1,2,3].map(item => {
            return (
              <img
              key={item}
              className="work-img rounded-xl"
              src={"/images/home/work/" + item +".jpg"}
              alt=""
              loading="lazy"
            />
            )
          })}
        </div>
        <Link
          href={"/portfolio"}
          className="inline-block cursor-pointer border-b border-primary pb-2 text-base font-normal leading-none tracking-widest text-primary hover:border-b-2"
        >
          Check Our Portfolio
        </Link>
      </div>
    </div>
  )
}

export default OurWork
