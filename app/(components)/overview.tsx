"use client"

import React, { useLayoutEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SplitType from "split-type"

gsap.registerPlugin(ScrollTrigger)

const Overview = () => {
  const main = useRef<HTMLDivElement>(null)
  const tl1 = useRef<gsap.core.Timeline>()

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const overviewTitle = new SplitType(".title")

      tl1.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".overview",
            start: "top bottom",
            end: "top 30%",
            scrub: 1,
          },
        })
        .set(overviewTitle.chars, {translateY: 115})
        .to(overviewTitle.chars, {
          y: 0,
          stagger: 0.05,
          delay: 0.2,
          duration: 0.2,
        })
        .from(".about", {
          opacity: 0,
          stagger: 0.2,
          duration: 0.4,
        })
        .from(".link", {
          opacity: 0,
          stagger: 0.2,
          duration: 0.3,
        })

      return () => {
        tl1.current?.clear()
      }
    }, main) // <- Scope!
    return () => ctx.revert() // <- Cleanup!
  }, [])

  return (
    <div ref={main}>
      <div className="overview container space-y-8 text-center">
        <h1 className="title scroll-m-20 text-4xl font-normal tracking-tight lg:text-5xl">
          Summer Twilight
        </h1>
        <p className="about text-center text-base font-normal leading-7 ">
          We&apos;re not just photographers, we&apos;re memory makers. Our
          passion is to create timeless images that capture the essence of your
          love and the beauty of your relationship. We&apos;re committed to
          creating beautiful, high-quality photos that showcase the true magic
          of your special day. Let us help you tell your love story and create
          memories that will last a lifetime.
        </p>
        <Link
          href={"/about-us"}
          className="link inline-block cursor-pointer border-b border-primary pb-2 text-base font-normal leading-none tracking-widest text-primary hover:border-b-2"
        >
          More About Us
        </Link>
      </div>
    </div>
  )
}

export default Overview
