import Carousel from "@/components/carousel"

export default function IndexPage() {
  return (
    <>
      <section>
        <Carousel />
      </section>
      <section
        id="features"
        className=" relative z-10   dark:bg-transparent py-8 md:py-12 lg:py-24"
      >
        <div className="container mx-auto flex flex-col items-center space-y-4 text-center">
          <h6 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-4xl">
            Summer Twilight
          </h6>
          <p className="max-w-[90%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            We're not just photographers, we're memory makers. Our passion is to
            create timeless images that capture the essence of your love and the
            beauty of your relationship. We're committed to creating beautiful,
            high-quality photos that showcase the true magic of your special
            day. Let us help you tell your love story and create memories that
            will last a lifetime.
          </p>
        </div>
      </section>
    </>
  )
}
