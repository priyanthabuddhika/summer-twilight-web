import ImageHeader from "@/components/img-header"

const albumData = [
  {
    img: "/images/home/albums/1.webp",
    title: "Mewni & Sanjay",
  },
  {
    img: "/images/home/albums/2.webp",
    title: "Primashi & Naveen",
  },
  {
    img: "/images/home/albums/3.webp",
    title: "Nimesha & Mithun",
  },
  {
    img: "/images/home/albums/4.webp",
    title: "Ishara & Praneed",
  },
  {
    img: "/images/home/albums/1.webp",
    title: "Mewni & Sanjay",
  },
  {
    img: "/images/home/albums/2.webp",
    title: "Primashi & Naveen",
  },
  {
    img: "/images/home/albums/3.webp",
    title: "Nimesha & Mithun",
  },
  {
    img: "/images/home/albums/4.webp",
    title: "Ishara & Praneed",
  },
  {
    img: "/images/home/albums/1.webp",
    title: "Mewni & Sanjay",
  }
]

export default function PortfolioPage() {
  return (
    <>
      <ImageHeader
        img="images/home/contact-us.webp"
        title="Portfolio"
        subtitle=" Feel free to contact us for any inquiries."
      />
      <section className="py-8 md:py-12 lg:py-16">
        <div className="container mb-11"></div>
      </section>
      <section className="bg-foreground py-8 md:py-12 lg:py-16">
        <div className="container grid grid-cols-3 gap-4">
          {albumData.map((data, index) => {
            return (
              <div key={index} className="album-img relative overflow-hidden">
                <img
                  className="cursor-pointer rounded-md transition duration-500 hover:scale-110"
                  src={data.img}
                  alt={data.title}
                  loading="lazy"
                />
                <div className="absolute bottom-0 z-10 w-full text-center">
                <h3 className="mx-auto p-3 text-lg font-bold text-white shadow ">
                  {data.title}
                </h3>
                </div>
                <div className="absolute bottom-0 left-0 h-1/3 w-full rounded-b-md bg-gradient-to-t from-primary from-25% to-transparent opacity-75"></div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
