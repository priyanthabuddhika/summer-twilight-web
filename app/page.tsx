import Carousel from "@/components/carousel"

export default function IndexPage() {
  return (
    <>
      <section>
        <Carousel />
      </section>
      <section id="features" className="py-8 md:py-12 lg:py-24">
        <div className="container space-y-6 text-center">
          <h1 className="scroll-m-20 text-primary font-bold tracking-tight text-4xl lg:text-5xl">
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
    </>
  )
}
