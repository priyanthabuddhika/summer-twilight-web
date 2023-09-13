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

  const w = 874
  const h = 1240

  const generateImageSrc = (index: number) => {
    return `https://source.unsplash.com/random/${w}x${h}?sig=${index}`
  }

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const reelSectionTitle = new SplitType(".reel-section .title")

      let mm = gsap.matchMedia()

      mm.add("(min-width: 768px)", () => {
        tl1.current = gsap
          .timeline({
            scrollTrigger: {
              trigger: ".reel-section",
              start: "0% 0%",
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
        className="reel-section overflow-hidden p-1 md:h-[100vh] md:p-5"
        data-theme="white"
      >
        <div className="container mx-auto flex max-lg:gap-2">
          <div className="flex max-h-[100vh] flex-1 flex-col justify-center">
            <h2 className="title mb-8 text-[14vw] font-semibold leading-[0.9em] md:text-[7vw]">
              Vivid
              <br /> Timeless Snaps
            </h2>
            <p className="paragraph mb-10 text-sm leading-5 md:leading-6 lg:text-base ">
              Create<span className="font-bold"> timeless memories</span> with
              our vivid snaps. Discover the art of photography on our website,
              where each image captures moments that last a lifetime. Explore
              the world through our lens and experience the beauty of vivid,
              timeless snaps. Join us for a visual journey like no other.
            </p>
          </div>

          <div className=" hidden md:flex md:flex-1 md:gap-2 lg:gap-5 ">
            <figure className="bg"></figure>
            <div className="reel left">
              <ul className="reel-list flex flex-col gap-1 ">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <li className="reel-item mb-5" key={index}>
                    <img
                      src={generateImageSrc(index)}
                      alt={`Image ${index}`}
                      className="h-[250px] w-full rounded-2xl lg:h-[375px] "
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="right hidden overflow-hidden lg:block">
              <ul className="reel-list flex flex-col gap-1">
                {[3, 4, 5, 6, 7, 8].map((index) => (
                  <li className="reel-item mb-5" key={index}>
                    <img
                      src={generateImageSrc(index)}
                      className="h-[250px] w-full rounded-2xl lg:h-[375px] "
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
