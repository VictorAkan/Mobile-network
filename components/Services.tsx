'use client';

import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/swiper-bundle.css';

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/free-mode"
import { ServiceData } from "@/constants";

import { FreeMode, Pagination } from "swiper/modules"

import { RxArrowTopRight } from "react-icons/rx"

const Services = () => {
  return (
    <section>

      <div className="md:px-32">
        <div className="mb-5">
          <h5 className="uppercase text-center font-bold text-blue-600">services we provide</h5>
        </div>
        <div>
          <h1 className="bold-20 text-center text-gray-700 text-4xl lg:text-xs lg:font-light font-bold lg:bold-40">We create & design award winning Digital products</h1>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col h-screen">
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 15
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 15
            }
          }}
          freeMode={true}
          pagination={{
            clickable: true
          }}
          modules={[FreeMode, Pagination]}
          className="max-w-[90%] lg:max-w-[80%]"
        >
          {ServiceData.map((item: any) => (
            <SwiperSlide key={item.title}>
              <div className="flex flex-col gap-6 group relative shadow-lg bg-white rounded-xl px-6 py-8 h-[250px] w-[215px]
              lg:h-[400px] lg:w-[350px]">
                <div className="bg-blue-700 rounded-full p-4">
                  <item.icon className="text-white" />
                </div>
                <div>
                  <h1 className="text-xl lg:text-2xl bold-18">{item.title}</h1>
                </div>
                <div>
                  <p className="lg:text-[10px] regular-14">{item.content}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Services
