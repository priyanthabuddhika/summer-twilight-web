"use client"

import React, { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SplitType from "split-type"

gsap.registerPlugin(ScrollTrigger)

const DemoComponent = () => {
  const main = useRef<HTMLDivElement>(null)
  const tl1 = useRef<gsap.core.Timeline>()
  const tl2 = useRef<gsap.core.Timeline>()

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const reelSectionTitle = new SplitType(".reel-section .title")

      let mm = gsap.matchMedia()

      mm.add("(min-width: 768px)", () => {
        tl1.current = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".reel-section",
              start: "top center",
              end: "20% 20%",
              scrub: 1,
            },
          })
          .from(reelSectionTitle.chars, {
            opacity: 0,
            stagger: 0.2,
            duration: 0.5,
          })
          .from(".reel-section .paragraph", {
            opacity: 0,
            stagger: 0.2,
            duration: 0.5,
          })

        gsap.set(".reel-section .right ", {
          yPercent: -35,
        })

        tl2.current = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".reel-section",
              start: "0% 0%",
              end: "275%",
              scrub: 1,
              pin: true,
            },
          })
          .addLabel("b")
          .to(".reel-section .left", { yPercent: -50 }, ".b")
          .to(".reel-section .right", { yPercent: 0 }, ".b")

        return () => {
          tl1.current?.clear()
          tl2.current?.clear()
        }
      })
    }, main) // <- Scope!
    return () => ctx.revert() // <- Cleanup!
  }, [])

  return (
    <div ref={main}>
      <section
        className="reel-section md:h-[100vh] overflow-hidden md:p-5 p-1"
        data-theme="white"
      >
        <div className="container mx-auto flex max-lg:gap-2">
          <div className="flex-1 max-h-[100vh] flex flex-col justify-center">
            <h2 className="title text-[10vw] md:text-[5vw] font-semibold leading-[0.9em] mb-8">
              Make your special day memorable.
              <br />
            </h2>
            <p className="paragraph text-sm lg:text-base mb-10 leading-5 md:leading-6 ">
              Create<span className="font-bold"> timeless memories</span> with
              our vivid snaps. Discover the art of photography on our website,
              where each image captures moments that last a lifetime. Explore
              the world through our lens and experience the beauty of vivid,
              timeless snaps. Join us for a visual journey like no other.
            </p>
          </div>

          <div className=" md:flex md:flex-1 hidden lg:gap-5 md:gap-2 ">
            <figure className="bg"></figure>
            <div className="reel left">
              <ul className="reel-list flex flex-col gap-1 ">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <li className="reel-item mb-5" key={index}>
                    <img
                      src={"/images/home/gallery/" + index + "l.png"}
                      alt={`Image ${index}`}
                      className="w-full h-[250px] lg:h-[375px] rounded-2xl "
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="right hidden lg:block overflow-hidden">
              <ul className="reel-list flex flex-col gap-1">
                {[6, 5, 4, 3, 2, 1, 4].map((index) => (
                  <li className="reel-item mb-5" key={index}>
                    <img
                      src={"/images/home/gallery/" + index + "l.png"}
                      className="w-full h-[250px] lg:h-[375px] rounded-2xl "
                      alt={`Image ${index}`}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DemoComponent
