import Link from "next/link"

import { cn } from "@/lib/utils"
import Carousel from "@/components/carousel"
import MaterialIcon from "@/components/material-icon"

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
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
            Summer Twilight
          </h1>
          <p className="text-center text-base font-normal leading-7 ">
            We&apos;re not just photographers, we&apos;re memory makers. Our passion is to
            create timeless images that capture the essence of your love and the
            beauty of your relationship. We&apos;re committed to creating beautiful,
            high-quality photos that showcase the true magic of your special
            day. Let us help you tell your love story and create memories that
            will last a lifetime.
          </p>
          <Link
            href={"/about-us"}
            className="inline-block cursor-pointer border-b border-primary pb-2 text-base font-normal leading-none tracking-widest text-primary hover:border-b-2"
          >
            More About Us
          </Link>
        </div>
      </section>
      <section
        id="services"
        className="h-full w-full bg-[url('/images/home/services/bg.webp')] bg-fixed bg-center"
      >
        <div className="bg-secondary py-8 md:py-12 lg:py-24 ">
          <div className="container space-y-8 text-center">
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
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
                      "w-full space-y-6 px-8 py-24 md:w-1/2 lg:w-1/3 ",
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
                        "text-3xl font-semibold leading-9",
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
      <section id="work" className="py-8 md:py-12 lg:py-24">
        <div className="container space-y-8 text-center">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-left lg:text-5xl">
            Our Work
          </h1>
          <div className="lg:flex lg:items-center lg:justify-between">
            <p className="text-base font-normal leading-7 lg:w-1/2 lg:text-left">
              Going shopping for your wedding gown can be as intimidating as it
              is exciting. After all, you are spending way more than you
              normally would on a dress.
            </p>
            <div className="flex justify-between gap-5 max-lg:mt-8 sm:justify-center sm:gap-10">
              <p className="cursor-pointer border-b-2 border-primary">
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
          <div className="max-md:space-y-5 md:grid md:grid-cols-3 md:gap-5">
            <img className="rounded" src="/images/home/work/1.jpg" alt="" loading="lazy"/>
            <img className="rounded" src="/images/home/work/2.jpg" alt="" loading="lazy"/>
            <img className="rounded" src="/images/home/work/3.jpg" alt="" loading="lazy"/>
          </div>
          <Link
            href={"/portfolio"}
            className="inline-block cursor-pointer border-b border-primary pb-2 text-base font-normal leading-none tracking-widest text-primary hover:border-b-2"
          >
            Check Our Portfolio
          </Link>
        </div>
      </section>
      <section id="testimonials" className="py-8 md:py-12 lg:py-24">
        <div className="space-y-8 text-center">
          <h1 className="mb-16 scroll-m-20 text-4xl font-bold tracking-tight lg:mb-24 lg:text-5xl">
            Testimonials
          </h1>
          <div className="h-full w-full bg-[url('/images/home/testimonials/bg.webp')] bg-fixed bg-center">
            <div className="bg-secondary">
              <div className="container md:flex">
                <div className="md:w-1/2">
                  <img
                    className="mx-auto w-3/4 -translate-y-12 rounded md:w-9/12 "
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
                  <h2 className={cn("text-3xl font-semibold leading-9")}>
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
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight md:text-left lg:text-5xl">
            Recent Albums
          </h1>
          <p className="text-base font-normal leading-7 md:text-left">
            Going shopping for your wedding gown can be as intimidating as it is
            exciting. After all, you are spending way more than you normally
            would on a dress.
          </p>
          <div className="max-md:space-y-5 md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-4">
            <div className="relative">
              <img className="rounded" src="/images/home/albums/1.webp" alt="" loading="lazy"/>
              <p className="absolute bottom-0 z-10 p-3 text-sm text-[#CFC8BD] shadow">
                Mewni & Sanjay
              </p>
              <div className="absolute bottom-0 left-0 h-1/3 w-full rounded-b bg-gradient-to-t from-neutral-900 from-10% to-transparent"></div>
            </div>
            <div className="relative">
              <img className="rounded" src="/images/home/albums/2.webp" alt="" loading="lazy"/>
              <p className="absolute bottom-0 z-10 p-3 text-sm text-[#CFC8BD] shadow">
                Primashi & Naveen
              </p>
              <div className="absolute bottom-0 left-0 h-1/3 w-full rounded-b bg-gradient-to-t from-neutral-900 from-10% to-transparent"></div>
            </div>
            <div className="relative">
              <img className="rounded" src="/images/home/albums/3.webp" alt="" loading="lazy" />
              <p className="absolute bottom-0 z-10 p-3 text-sm text-[#CFC8BD] shadow">
                Nimesha & Mithun
              </p>
              <div className="absolute bottom-0 left-0 h-1/3 w-full rounded-b bg-gradient-to-t from-neutral-900 from-10% to-transparent"></div>
            </div>
            <div className="relative">
              <img className="rounded" src="/images/home/albums/4.webp" alt="" loading="lazy" />
              <p className="absolute bottom-0 z-10 p-3 text-sm text-[#CFC8BD] shadow">
                Ishara & Praneed
              </p>
              <div className="absolute bottom-0 left-0 h-1/3 w-full rounded-b bg-gradient-to-t from-neutral-900 from-10% to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
