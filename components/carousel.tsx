"use client"

import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function Carousel() {
  return (
    <Swiper
      className="w-full max-h-[105vh] "
      navigation={true}
      speed={1000}
      pagination={{
        clickable: true,
      }}
      centeredSlides={true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay, Navigation, Pagination]}
    >
      <SwiperSlide className="bg-center bg-cover">
        <img src="/images/slider-1.png" className=" w-full " />
      </SwiperSlide>
      <SwiperSlide className="bg-center bg-cover">
        <img src="/images/slider-2.png" className=" w-full " />
      </SwiperSlide>
      <SwiperSlide className="bg-center bg-cover">
        <img src="/images/slider-3.png" className=" w-full " />
      </SwiperSlide>
    </Swiper>
  )
}
