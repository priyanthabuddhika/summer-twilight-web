"use client"

import { Autoplay, Navigation, Pagination} from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function Carousel() {
  return (
    <Swiper
      className="max-h-[100vh] w-full "
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
      <SwiperSlide className="bg-cover bg-center">
        <img src="/images/slider-1.png" className=" w-full " />
      </SwiperSlide>
      <SwiperSlide className="bg-cover bg-center">
        <img src="/images/slider-2.png" className=" w-full " loading="lazy"/>
      </SwiperSlide>
      <SwiperSlide className="bg-cover bg-center">
        <img src="/images/slider-3.png" className=" w-full " loading="lazy" />
      </SwiperSlide>
    </Swiper>
  )
}
