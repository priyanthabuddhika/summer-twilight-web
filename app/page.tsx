import Link from "next/link"

import { cn } from "@/lib/utils"
import Carousel from "@/components/carousel"
import { Icons } from "@/components/icons"

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

export default function IndexPage() {
  return (
    <>
      <section id="carousel">
        <Carousel />
      </section>
      <section id="abstract" className="py-8 md:py-12 lg:py-24">
        <div className="container space-y-8 text-center">
          <h1 className="scroll-m-20 font-normal tracking-tight text-4xl lg:text-5xl">
            Summer Twilight
          </h1>
          <p className="text-center text-base font-normal leading-7 ">
            We're not just photographers, we're memory makers. Our passion is to
            create timeless images that capture the essence of your love and the
            beauty of your relationship. We're committed to creating beautiful,
            high-quality photos that showcase the true magic of your special
            day. Let us help you tell your love story and create memories that
            will last a lifetime.
          </p>
          <Link
            href={"/about-us"}
            className="inline-block text-primary text-base border-b hover:border-b-2 border-primary font-normal leading-none tracking-widest pb-2 cursor-pointer"
          >
            More About Us
          </Link>
        </div>
      </section>
      <section
        id="services"
        className="w-full h-full bg-[url('/images/home/services/bg.png')] bg-fixed bg-center"
      >
        <div className="bg-secondary py-8 md:py-12 lg:py-24 ">
          <div className="container space-y-8 text-center">
            <h1 className="scroll-m-20 font-normal tracking-tight text-4xl lg:text-5xl">
              Our Services
            </h1>
            <div className="flex justify-center">
              <p className="text-center text-base font-normal leading-7 w-4/5 md:w-2/3 lg:w-1/2">
                Tuxedo photo booth photographer limousine cake dessert guitar
                acoustic bass Will overpriced florist seat covers mother veil
                sparkles.
              </p>
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-5">
              {homeServices.map((item, index) => {
                return (
                  <div
                    key={item.title}
                    className={cn(
                      "py-24 px-8 space-y-6 w-full md:w-1/2 lg:w-1/3 ",
                      index === 2
                        ? "bg-primary text-primary-foreground"
                        : "bg-background"
                    )}
                  >
                    <img
                      className="m-auto w-1/4"
                      src={item.img}
                      alt={item.title}
                    />
                    <h2
                      className={cn(
                        "text-3xl leading-9 font-normal",
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
              className="inline-block text-primary text-base border-b hover:border-b-2 border-primary font-normal leading-none tracking-widest pb-2 cursor-pointer"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <section id="work" className="py-8 md:py-12 lg:py-24">
        <div className="container space-y-8 text-center">
          <h1 className="scroll-m-20 font-normal tracking-tight text-4xl lg:text-5xl lg:text-left">
            Our Work
          </h1>
          <div className="lg:flex lg:justify-between lg:items-center">
            <p className="lg:text-left text-base font-normal leading-7 lg:w-1/2">
              Going shopping for your wedding gown can be as intimidating as it
              is exciting. After all, you are spending way more than you
              normally would on a dress.
            </p>
            <div className="flex gap-5 sm:gap-10 sm:justify-center max-lg:mt-8 justify-between">
              <p className="border-b-2 border-primary cursor-pointer">
                Weddings
              </p>
              <p className="cursor-pointer hover:border-b-2 hover:border-primary">
                Engagements
              </p>
              <p className="cursor-pointer hover:border-b-2 hover:border-primary">
                Casual Shots
              </p>
            </div>
          </div>
          <div className="md:grid md:gap-5 md:grid-cols-3 max-md:space-y-5">
            <img className="rounded" src="/images/home/work/1.jpg" alt="" />
            <img className="rounded" src="/images/home/work/2.jpg" alt="" />
            <img className="rounded" src="/images/home/work/3.jpg" alt="" />
          </div>
          <Link
            href={"/portfolio"}
            className="inline-block text-primary text-base border-b hover:border-b-2 border-primary font-normal leading-none tracking-widest pb-2 cursor-pointer"
          >
            Check Our Portfolio
          </Link>
        </div>
      </section>
      <section id="testimonials" className="py-8 md:py-12 lg:py-24">
        <div className="space-y-8 text-center">
          <h1 className="mb-16 lg:mb-24 scroll-m-20 font-normal tracking-tight text-4xl lg:text-5xl">
            Testimonials
          </h1>
          <div className="w-full h-full bg-[url('/images/home/testimonials/bg.png')] bg-fixed bg-center">
            <div className="bg-secondary">
              <div className="container md:flex">
                <div className="md:w-1/2">
                  <img
                    className="-translate-y-12 mx-auto w-3/4 md:w-9/12 rounded "
                    src="/images/home/testimonials/1.png"
                    alt=""
                  />
                </div>
                <div className="md:w-1/2 h-full my-auto space-y-8 max-md:pb-16">
                  <img
                    className="mx-auto"
                    src="/images/home/testimonials/quotes.svg"
                    alt=""
                  />
                  <h2 className={cn("text-3xl leading-9 font-normal")}>
                    Mewni & Sanjay
                  </h2>
                  <p className="font-dmserif italic font-normal text-lg">
                    I couldn’t have dreamt of a more beautiful place to host our
                    wedding. Not only are the views breathtaking but the entire
                    ranch looks like something out of a movie.
                  </p>
                  <div className="flex gap-12 justify-center">
                    <Icons.moveLeft
                      strokeWidth={1}
                      color="#1C1B1F"
                      className="cursor-pointer rotate-0 scale-100 transition-all"
                    />
                    <Icons.moveRight
                      strokeWidth={1}
                      color="#1C1B1F"
                      className="cursor-pointer rotate-0 scale-100 transition-all"
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
          <h1 className="scroll-m-20 font-normal tracking-tight text-4xl lg:text-5xl md:text-left">
            Recent Albums
          </h1>
          <p className="md:text-left text-base font-normal leading-7">
            Going shopping for your wedding gown can be as intimidating as it is
            exciting. After all, you are spending way more than you normally
            would on a dress.
          </p>
          <div className="md:grid lg:grid-cols-4 md:grid-cols-2 md:gap-5 max-md:space-y-5">
            <div className="relative">
              <img className="rounded" src="/images/home/albums/1.png" alt="" />
              <p className="absolute bottom-0 p-3 text-sm z-10 text-[#CFC8BD] shadow">
                Mewni & Sanjay
              </p>
              <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-neutral-900 from-10% to-transparent rounded-bl rounded-br"></div>
            </div>
            <div className="relative">
              <img className="rounded" src="/images/home/albums/2.png" alt="" />
              <p className="absolute bottom-0 p-3 text-sm z-10 text-[#CFC8BD] shadow">
                Primashi & Naveen
              </p>
              <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-neutral-900 from-10% to-transparent rounded-bl rounded-br"></div>
            </div>
            <div className="relative">
              <img className="rounded" src="/images/home/albums/3.png" alt="" />
              <p className="absolute bottom-0 p-3 text-sm z-10 text-[#CFC8BD] shadow">
                Nimesha & Mithun
              </p>
              <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-neutral-900 from-10% to-transparent rounded-bl rounded-br"></div>
            </div>
            <div className="relative">
              <img className="rounded" src="/images/home/albums/4.png" alt="" />
              <p className="absolute bottom-0 p-3 text-sm z-10 text-[#CFC8BD] shadow">
                Ishara & Praneed
              </p>
              <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-neutral-900 from-10% to-transparent rounded-bl rounded-br"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
