import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import MaterialIcon from "@/components/material-icon"

gsap.registerPlugin(ScrollTrigger)

export function Footer() {
  const main = useRef<HTMLDivElement>(null)
  const tl1 = useRef<gsap.core.Timeline>()

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      tl1.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: "#footer",
            start: "top bottom",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
          },
        })
        .from("#footer-content", {
          y: 60,
          ease: "power1.inOut",
          duration: 0.6,
          delay: 0.2,
        })
      // md:transition-transform md:duration-300 md:ease-in-out md:hover:translate-y-[-25px]
      return () => {
        tl1.current?.kill()
      }
    }, main) // <- Scope!
    return () => ctx.revert() // <- Cleanup!
  }, [])

  return (
    <div ref={main}>
      <section
        id="footer"
        className="h-full w-full bg-[url('/images/footer/bg.webp')] bg-center"
      >
        <div className="inset-0 py-12  backdrop-blur-sm bg-footer lg:py-20">
          <div
            id="footer-content"
            className="container justify-between gap-6 text-center text-primary-foreground md:flex"
          >
            <div className="space-y-4 max-md:px-12 md:w-1/3 ">
              <img
                className="max-md:mx-auto"
                src="/images/footer/logo.svg"
                alt="logo"
              />
              <p className="font-normal text-white md:text-left">
                If you would like to say hello or ask a general question, please
                get in touch.
              </p>
            </div>
            <div className="gap-6 max-md:mt-8 max-sm:space-y-8 sm:flex sm:justify-between md:w-2/3 md:justify-end lg:gap-20">
              <div className="space-y-4 sm:w-1/2">
                <h2 className="font-dmserif text-3xl font-normal text-primary-foreground sm:text-left">
                  Contacts
                </h2>
                <div className="flex cursor-pointer gap-2 max-sm:justify-center">
                  <MaterialIcon
                    className="mt-0.5 flex-none"
                    icon={"mail"}
                    fill
                  />
                  <a
                    className="text-white"
                    href="mailto:info@summertwilight.lk"
                  >
                    info@summertwilight.lk
                  </a>
                </div>
                <div className="flex gap-2 max-sm:justify-center">
                  <MaterialIcon
                    className="mt-0.5 flex-none"
                    icon={"call"}
                    fill
                  />
                  <a className="text-white" href="tel:+94714372763">
                    0714372763
                  </a>
                </div>
                <div className="flex gap-2 max-sm:items-center max-sm:justify-center sm:items-start">
                  <MaterialIcon
                    className="mt-0.5 flex-none"
                    icon={"location_on"}
                    fill
                  />
                  <p className="text-white sm:text-left">
                    44/5 Pitawella Road, Malani Bulathsinghala Mawatha,
                    Boralesgamuwa 10290 Colombo, Sri Lanka
                  </p>
                </div>
              </div>
              <div>
                <div className="space-y-4">
                  <h2 className="font-dmserif text-3xl font-normal text-primary-foreground sm:text-right ">
                    Working Hours
                  </h2>
                  <div className="flex justify-center gap-2 sm:justify-end">
                    <MaterialIcon
                      className="flex-none"
                      icon={"schedule"}
                      fill
                    />
                    <p className="text-white">Always open</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h2 className="mt-12 font-dmserif text-3xl font-normal text-primary-foreground sm:text-right ">
                    Social Media
                  </h2>
                  <div className="flex justify-center gap-3.5 sm:justify-end">
                    <img src="/images/footer/facebook.svg" alt="" />
                    <img src="/images/footer/instagram.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
