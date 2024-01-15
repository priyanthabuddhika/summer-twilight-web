import ImageHeader from "@/components/img-header"

export default function AboutUsPage() {
  return (
    <div>
      <ImageHeader
        img="images/about-us/about-us.webp"
        title="About Us"
        subtitle="Feel free to contact us for any inquiries."
      />
      <div className="container gap-10 py-8 md:py-12 lg:flex lg:py-24">
        <div className="space-y-8 lg:w-2/3">
          <h1 className="scroll-m-20 text-4xl font-normal tracking-tight ">
            Our Story
          </h1>
          <p className="text-base font-normal leading-7">
            Summer Twilight was founded in 2019 by two passionate photographers,
            [Your Name] and partner. We met while studying
            photography at the University of Colombo, and we quickly bonded over
            our shared love of weddings. We believe that every wedding is a
            unique story that deserves to be told in a beautiful and timeless
            way. We are committed to capturing the essence of your wedding day,
            from the smallest details to the most important moments. We want to
            help you create memories that you will cherish for a lifetime.
          </p>
          <p>
            What sets Summer Twilight apart from other wedding photography
            studios in Colombo is our focus on personalized service. We believe
            that every couple is different, and we want to create a photo shoot
            that reflects your unique style and personality. We will work with
            you every step of the way to make sure that your wedding photos are
            exactly what you want.
          </p>
          <p>
            We have photographed weddings all over Sri Lanka, and we have a deep
            understanding of the local culture and customs. We know where to
            find the most beautiful locations, and we can help you plan a photo
            shoot that is both meaningful and memorable. We are honored to have
            been chosen by so many couples to capture their wedding day.
          </p>
        </div>
        <div className="lg:w-1/3">
          <img
            id="t-img"
            className="mx-auto  "
            src="/images/home/testimonials/1.webp"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}
