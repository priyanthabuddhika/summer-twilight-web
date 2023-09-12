
import { cn } from "@/lib/utils"
import Carousel from "@/components/carousel"
import MaterialIcon from "@/components/material-icon"

import HomeGallery from "./(components)/gallery"
import Overview from "./(components)/overview"
import Services from "./(components)/sevice"
import OurWork from "./(components)/work"

export default function IndexPage() {
  return (
    <>
      <section id="carousel">
        <Carousel />
      </section>
      <section id="abstract" className="py-8 md:py-12 lg:py-24">
        <Overview />
      </section>
      <Services />
      <section id="home-gallery" className="py-8 md:py-12 lg:py-24">
        <HomeGallery />
      </section>
      <section id="work" className="py-8 md:py-12 lg:py-24">
        <OurWork />
      </section>
      <section id="testimonials" className="py-8 md:py-12 lg:py-24">
        <div className="space-y-8 text-center">
          <h1 className="mb-16 scroll-m-20 text-4xl font-normal tracking-tight lg:mb-24 lg:text-5xl">
            Testimonials
          </h1>
          <div className="h-full w-full bg-[url('/images/home/testimonials/bg.webp')] bg-fixed bg-center">
            <div className="bg-secondary">
              <div className="container md:flex">
                <div className="md:w-1/2">
                  <img
                    className="mx-auto w-3/4 -translate-y-12 rounded-xl md:w-9/12 "
                    src="/images/home/testimonials/1.webp"
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
                    Mewni & Sanjay
                  </h2>
                  <p className="font-dmserif text-lg font-normal italic">
                    I couldn’t have dreamt of a more beautiful place to host our
                    wedding. Not only are the views breathtaking but the entire
                    ranch looks like something out of a movie.
                  </p>
                  <div className="flex justify-center gap-12">
                    <MaterialIcon
                      icon="west"
                      color="#1C1B1F"
                      className="cursor-pointer"
                    />
                    <MaterialIcon
                      icon="east"
                      color="#1C1B1F"
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="albums" className="py-8 md:py-12 lg:py-24">
        <div className="container space-y-8 text-center">
          <h1 className="scroll-m-20 text-4xl font-normal tracking-tight md:text-left lg:text-5xl">
            Recent Albums
          </h1>
          <p className="text-base font-normal leading-7 md:text-left">
            Going shopping for your wedding gown can be as intimidating as it is
            exciting. After all, you are spending way more than you normally
            would on a dress.
          </p>
          <div className="max-md:space-y-5 md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-4">
            <div className="relative">
              <img
                className="rounded-md"
                src="/images/home/albums/1.webp"
                alt=""
                loading="lazy"
              />
              <p className="absolute bottom-0 z-10 p-3 text-sm text-[#CFC8BD] shadow">
                Mewni & Sanjay
              </p>
              <div className="absolute bottom-0 left-0 h-1/3 w-full rounded-b-md bg-gradient-to-t from-neutral-900 from-10% to-transparent"></div>
            </div>
            <div className="relative">
              <img
                className="rounded-md"
                src="/images/home/albums/2.webp"
                alt=""
                loading="lazy"
              />
              <p className="absolute bottom-0 z-10 p-3 text-sm text-[#CFC8BD] shadow">
                Primashi & Naveen
              </p>
              <div className="absolute bottom-0 left-0 h-1/3 w-full rounded-b-md bg-gradient-to-t from-neutral-900 from-10% to-transparent"></div>
            </div>
            <div className="relative">
              <img
                className="rounded-md"
                src="/images/home/albums/3.webp"
                alt=""
                loading="lazy"
              />
              <p className="absolute bottom-0 z-10 p-3 text-sm text-[#CFC8BD] shadow">
                Nimesha & Mithun
              </p>
              <div className="absolute bottom-0 left-0 h-1/3 w-full rounded-b-md bg-gradient-to-t from-neutral-900 from-10% to-transparent"></div>
            </div>
            <div className="relative">
              <img
                className="rounded-md"
                src="/images/home/albums/4.webp"
                alt=""
                loading="lazy"
              />
              <p className="absolute bottom-0 z-10 p-3 text-sm text-[#CFC8BD] shadow">
                Ishara & Praneed
              </p>
              <div className="absolute bottom-0 left-0 h-1/3 w-full rounded-b-md bg-gradient-to-t from-neutral-900 from-10% to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
