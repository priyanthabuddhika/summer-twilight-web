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
]

const Albums = () => {
  return (
    <div>
      <div className="container space-y-8 text-center">
        <h1 className="scroll-m-20 text-4xl font-normal tracking-tight md:text-left lg:text-5xl">
          Recent Albums
        </h1>
        <p className="text-base font-normal leading-7 md:text-left">
          Going shopping for your wedding gown can be as intimidating as it is
          exciting. After all, you are spending way more than you normally would
          on a dress.
        </p>
        <div className="max-md:space-y-5 md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {albumData.map((data, index) => {
            return (
              <div key={index} className="relative overflow-hidden">
                <img
                  className="cursor-pointer rounded-md transition duration-500 hover:scale-110"
                  src={data.img}
                  alt={data.title}
                  loading="lazy"
                />
                <p className="absolute bottom-0 z-10 p-3 text-sm text-[#CFC8BD] shadow transition-transform duration-300 ease-in-out hover:translate-y-[-10px]">
                  {data.title}
                </p>
                <div className="absolute bottom-0 left-0 h-1/3 w-full rounded-b-md bg-gradient-to-t from-neutral-900 from-10% to-transparent"></div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Albums
