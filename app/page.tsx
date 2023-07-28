import { cn } from "@/lib/utils"
import Carousel from "@/components/carousel"

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
    img: "/images/home/services/1.png",
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
      <section id="features" className="py-8 md:py-12 lg:py-24">
        <div className="container space-y-8 text-center">
          <h1 className="scroll-m-20 font-bold tracking-tight text-4xl lg:text-5xl">
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
          <p className="inline-block text-primary text-base border-b hover:border-b-2 border-primary font-normal leading-none tracking-widest pb-2 cursor-pointer">
            More About Us
          </p>
        </div>
      </section>
      <section
        id="services"
        className="w-full h-full bg-[url('/images/slider-2.png')] bg-center"
      >
        <div className="bg-secondary py-8 md:py-12 lg:py-24 ">
          <div className="container space-y-8 text-center">
            <h1 className="scroll-m-20 font-bold tracking-tight text-4xl lg:text-5xl">
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
                        "text-3xl leading-9 font-semibold",
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
            <p className="inline-block text-primary text-base border-b hover:border-b-2 border-primary font-normal leading-none tracking-widest pb-2 cursor-pointer">
              Learn More
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
