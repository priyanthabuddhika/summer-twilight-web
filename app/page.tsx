import Carousel from "@/components/carousel"

import HomeGallery from "./(components)/gallery"
import Overview from "./(components)/overview"
import Services from "./(components)/sevice"
import OurWork from "./(components)/work"
import Testimonials from "./(components)/testimonials"

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
        <Testimonials />
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
