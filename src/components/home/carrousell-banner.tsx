"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  description: string;
  alt: string;
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    image: "/assets/first-post.png",
    title: "Descubre nuevos destinos",
    description: "Explora los mejores lugares turísticos con nosotros",
    alt: "Destino turístico 1",
  },
  {
    id: 2,
    image: "/assets/second-post.png",
    title: "Experiencias inolvidables",
    description: "Crea recuerdos que durarán toda la vida",
    alt: "Destino turístico 2",
  },
  {
    id: 3,
    image: "/hero-section.svg",
    title: "Viaja con seguridad",
    description: "Tu bienestar es nuestra prioridad en cada destino",
    alt: "Destino turístico 3",
  },
];

export default function CarrouselBanner() {
  const [mounted, setMounted] = useState(false);

  // Prevent hydration errors with Swiper
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full h-[500px] relative">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full"
      >
        {carouselItems.map((item) => (
          <SwiperSlide key={item.id} className="relative w-full h-full">
            <div className="absolute inset-0 bg-black/50 z-10" />
            <Image
              src={item.image}
              alt={item.alt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute z-20 bottom-0 left-0 right-0 p-8 text-white">
              <div className="container mx-auto">
                <h2 className="text-4xl font-bold mb-2">{item.title}</h2>
                <p className="text-xl">{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom navigation buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 z-30 swiper-button-prev w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-colors text-white cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-4 z-30 swiper-button-next w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-colors text-white cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>

        {/* Custom pagination */}
        <div className="swiper-pagination absolute bottom-5 left-0 right-0 z-30 flex justify-center gap-2"></div>
      </Swiper>
    </div>
  );
}
