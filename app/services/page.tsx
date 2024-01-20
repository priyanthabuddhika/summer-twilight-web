import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import ImageHeader from "@/components/img-header"
import MaterialIcon from "@/components/material-icon"

const data = [
  {
    name: "Basic",
    price: "150,000 LKR",
    items: [
      "Up to 10 hours exclusive coverage",
      "Main Photo Sessions & Wedding Reception",
      "Two Professional Photographers",
      "200 Retouched Images Covering the Main Photo Session & Reception",
      "High Resolution Image Gallery (Close to 1500 Images)",
    ],
  },
  {
    name: "Opal",
    price: "180,000 LKR",
    items: [
      "Up to 10 hours exclusive coverage",
      "Bride’s Whilst Getting Dressed",
      "Groom’s Whilst Getting Dressed",
      "Main Photo Sessions & Wedding Reception",
      "Two Professional Photographers",
      "12x24 Page 60 (30 Spreads) Fine Art Wedding Album",
      "16x24 Framed Enlargement of Your Choice",
      "Thank You Cards - 100",
      "200 Retouched Images Covering the Main Photo Session & Reception",
      "High Resolution Image Gallery (Close to 2000 Images)",
    ],
  },
  {
    name: "Emerald",
    price: "250,000 LKR",
    items: [
      "Up to 12 hours exclusive coverage",
      "Bride’s Whilst Getting Dressed",
      "Groom’s Whilst Getting Dressed",
      "Main Photo Sessions & Wedding Reception",
      "Two Professional Photographers",
      "12x30 Page 60 (30 Spreads) Fine Art Wedding Album",
      "16x24 Framed Enlargement of Your Choice - 2",
      "Thank You Cards - 100",
      "200 Retouched Images Covering the Main Photo Session & Reception",
      "High Resolution Image Gallery (Close to 3000 Images)",
    ],
  },
  {
    name: "Jadeite",
    price: "350,000 LKR",
    items: [
      "Up to 12 hours exclusive coverage",
      "Bride’s Whilst Getting Dressed",
      "Groom’s Whilst Getting Dressed",
      "Main Photo Sessions & Wedding Reception",
      "Two Professional Photographers",
      "12x30 Page 60 (30 Spreads) Fine Art Wedding Album",
      "16x24 Framed Enlargement of Your Choice - 2",
      "Thank You Cards - 100",
      "200 Retouched Images Covering the Main Photo Session & Reception",
      "High Resolution Image Gallery (Close to 3000 Images)",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="text-center">
      <ImageHeader
        img="images/services/services.webp"
        title="Our Services"
        subtitle="With an artistic eye for compelling scenes, our team creates images that vividly capture the memorable moments of your special event."
      />
      <div className="container space-y-8 py-8 md:py-12 lg:py-24">
        <img
          className="t-right mx-auto"
          src="/images/services/weddings.svg"
          alt=""
          loading="lazy"
        />
        <h1 className="scroll-m-20 text-4xl font-normal tracking-tight ">
          Weddings
        </h1>
        <p className="text-base font-normal leading-7">
          No two love stories are the same, and each one deserves to be
          celebrated in a way that is uniquely special to the couple. At Summer
          Twilight, we are committed to helping you create a wedding day that is
          as unique as your love.
        </p>
        <p className="text-base font-semibold leading-7">Wedding Packages</p>
        <div className="grid max-lg:space-y-8 lg:grid-cols-2">
          {data.map((item, index) => (
            <div
              key={item.name}
              className={cn(
                "mb-16 space-y-4 py-10 text-left md:p-10 lg:py-0",
                index % 2 > 0
                  ? "border-gray-100 max-lg:border-y-2 lg:border-s-2 "
                  : ""
              )}
            >
              <h1 className=" text-2xl ">{item.name}</h1>
              <h1 className=" text-3xl font-bold">{item.price}</h1>
              {/* <Button className="w-full px-14 py-4">Reserve</Button> */}
              <div>
                <ul className="mt-14 space-y-4">
                  {item.items.map((li) => (
                    <li key={li} className="flex gap-x-2">
                      <MaterialIcon
                        icon="check"
                        className="mb-auto text-primary"
                      />
                      <p> {li} </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
