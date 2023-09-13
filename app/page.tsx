import Carousel from "@/components/carousel"

import Albums from "./(components)/albums"
import Blogs from "./(components)/blogs"
import HomeGallery from "./(components)/gallery"
import Overview from "./(components)/overview"
import Services from "./(components)/sevice"
import Testimonials from "./(components)/testimonials"
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
      <section id="home-gallery" className="py-8 md:py-12 lg:py-24">
        <HomeGallery />
      </section>
      <Services />
      <section id="work" className="py-8 md:py-12 lg:py-24">
        <OurWork />
      </section>

      <Testimonials />
      <section id="blogs" className="py-8 md:py-12 lg:py-24">
        <Blogs />
      </section>
      <section id="albums" className="py-8 md:py-12 lg:py-24">
        <Albums />
      </section>
    </>
  )
}
