"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ProductCard from "./card-sites";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface TownItem {
  id: string;
  image: string;
  name: string;
  price: string;
  alt?: string;
  href?: string;
}

const recentTowns: TownItem[] = [
  {
    id: "1",
    image: "/assets/carousel/gorro-one.jpg",
    name: "Gorro One",
    price: "$ 4.935,00",
    alt: "Gorro azul marino",
    href: "/product/gorro-one",
  },
  {
    id: "2",
    image: "/assets/carousel/remera-basica.jpg",
    name: "Remera Básica",
    price: "$ 10.815,00",
    alt: "Remera básica azul marino",
    href: "/product/remera-basica",
  },
  {
    id: "3",
    image: "/assets/carousel/gorro-one.jpg",
    name: "Gorro Deluxe",
    price: "$ 5.935,00",
    alt: "Gorro deluxe",
    href: "/product/gorro-deluxe",
  },
  {
    id: "4",
    image: "/assets/carousel/remera-basica.jpg",
    name: "Remera Premium",
    price: "$ 12.815,00",
    alt: "Remera premium",
    href: "/product/remera-premium",
  },
  {
    id: "5",
    image: "/assets/carousel/remera-basica.jpg",
    name: "Remera Premium",
    price: "$ 12.815,00",
    alt: "Remera premium",
    href: "/product/remera-premium",
  },
  {
    id: "6",
    image: "/assets/carousel/remera-basica.jpg",
    name: "Remera Premium",
    price: "$ 12.815,00",
    alt: "Remera premium",
    href: "/product/remera-premium",
  },
];

export default function RecentTownsCarousel() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="w-full  bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Pueblos</h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="product-carousel"
        >
          {recentTowns.map((town) => (
            <SwiperSlide key={town.id} className="pb-10">
              <ProductCard
                id={town.id}
                image={town.image}
                name={town.name}
                price={town.price}
                alt={town.alt}
                href={town.href}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
