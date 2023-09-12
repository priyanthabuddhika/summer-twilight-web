import { cn } from "@/lib/utils"
import MaterialIcon from "@/components/material-icon"

const Testimonials = () => {
  return (
    <div>
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
                    className="cursor-pointer transform hover:translate-x-[-10px] transition-transform duration-300 ease-in-out "
                  />
                  <MaterialIcon
                    icon="east"
                    color="#1C1B1F"
                    className="cursor-pointer transform hover:translate-x-[10px] transition-transform duration-300 ease-in-out "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
