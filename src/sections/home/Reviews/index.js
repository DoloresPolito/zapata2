"use client";
import styles from "./style.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import Carousel from "react-elastic-carousel";
import stars from "../../../../public/assets/home/stars.png"
import Image from "next/image";

export default function Reviews() {
  const items = [
    {
      id: 1,
      name: "Josefina Cervio",
      iniciales:"JC",
      time: "hace 2 años",
      stars: "5 estrellas",
      text: "“Auriculoplastia en ambas orejas. El Dr. Zapata es un genio, y todo el equipo es excelente. Me sentí súper acompañada, tanto antes de la cirugía como después. Genial el post operatorio, siempre estuvieron disponibles para cualquier consulta o inquietud...”",
    },
    {
      id: 2,
      name: "Josefina Cervio",
      iniciales:"JC",
      time: "hace 2 años",
      stars: "5 estrellas",
      text: "“Auriculoplastia en ambas orejas. El Dr. Zapata es un genio, y todo el equipo es excelente. Me sentí súper acompañada, tanto antes de la cirugía como después. Genial el post operatorio, siempre estuvieron disponibles para cualquier consulta o inquietud...”",
    },
    {
      id: 3,
      name: "Josefina Cervio",
      iniciales:"JC",
      time: "hace 2 años",
      stars: "5 estrellas",
      text: "“Auriculoplastia en ambas orejas. El Dr. Zapata es un genio, y todo el equipo es excelente. Me sentí súper acompañada, tanto antes de la cirugía como después. Genial el post operatorio, siempre estuvieron disponibles para cualquier consulta o inquietud...”",
    },
    {
      id: 4,
      name: "Josefina Cervio",
      iniciales:"JC",
      time: "hace 2 años",
      stars: "5 estrellas",
      text: "“Auriculoplastia en ambas orejas. El Dr. Zapata es un genio, y todo el equipo es excelente. Me sentí súper acompañada, tanto antes de la cirugía como después. Genial el post operatorio, siempre estuvieron disponibles para cualquier consulta o inquietud...”",
    },
  ];


  return (
    <div className={styles.testimonios}>
      <div className={styles.carouselcontainer}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={styles.itemWrapperStyles}>
                <div className={styles.circle}>
                  {item.iniciales}
                </div>
                <h3 className={styles.itemName}>
                  {item.name} - {item.time}
                </h3>
                <h3 className={styles.itemStars}>{item.stars}</h3>
                <Image src={stars} alt="stars"/>
                <p className={styles.itemText}>{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
