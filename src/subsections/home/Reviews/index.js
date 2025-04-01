"use client";
import styles from "./style.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import Carousel from "react-elastic-carousel";
import stars from "../../../../public/assets/home/stars.svg";
import Image from "next/image";
import arrowIcon from "../../../../public/assets/icons/flecha.svg";

export default function Reviews() {
  const items = [
    {
      id: 1,
      name: "Josefina Cervio",
      iniciales: "JC",
      time: "hace 2 años",
      stars: "5 estrellas",
      text: "“Auriculoplastia en ambas orejas. El Dr. Zapata es un genio, y todo el equipo es excelente. Me sentí súper acompañada, tanto antes de la cirugía como después. Genial el post operatorio, siempre estuvieron disponibles para cualquier consulta o inquietud...”",
    },
    {
      id: 2,
      name: "Josefina Cervio",
      iniciales: "JC",
      time: "hace 2 años",
      stars: "5 estrellas",
      text: "“Auriculoplastia en ambas orejas. El Dr. Zapata es un genio, y todo el equipo es excelente. Me sentí súper acompañada, tanto antes de la cirugía como después. Genial el post operatorio, siempre estuvieron disponibles para cualquier consulta o inquietud...”",
    },
    {
      id: 3,
      name: "Josefina Cervio",
      iniciales: "JC",
      time: "hace 2 años",
      stars: "5 estrellas",
      text: "“Auriculoplastia en ambas orejas. El Dr. Zapata es un genio, y todo el equipo es excelente. Me sentí súper acompañada, tanto antes de la cirugía como después. Genial el post operatorio, siempre estuvieron disponibles para cualquier consulta o inquietud...”",
    },
    {
      id: 4,
      name: "Josefina Cervio",
      iniciales: "JC",
      time: "hace 2 años",
      stars: "5 estrellas",
      text: "“Auriculoplastia en ambas orejas. El Dr. Zapata es un genio, y todo el equipo es excelente. Me sentí súper acompañada, tanto antes de la cirugía como después. Genial el post operatorio, siempre estuvieron disponibles para cualquier consulta o inquietud...”",
    },
  ];

  return (
    <div className={styles.testimonios}>
      <div className={styles.container}>
        <div className={styles.carouselcontainer}>
          <div className={styles.arrowscontainer}>

            <div className={styles.customprev}>
              <Image src={arrowIcon} alt="prev" className={styles.arrowIcon} />
            </div>
          </div>
          <div className={styles.carouselcontent}>
            <Swiper
              speed={600}
              parallax={true}
              navigation={{
                nextEl: `.${styles.customnext}`,
                prevEl: `.${styles.customprev}`,
              }}
              modules={[Parallax, Pagination, Navigation]}
              slidesPerView={1}
              slidesPerGroup={1}
              spaceBetween={10}
            >
              {items.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className={styles.itemWrapperStyles}>
                    <div className={styles.circle}>{item.iniciales}</div>
                    <h3 className={`typography-Ag-P-Small ${styles.itemName}`}>
                      <span> {item.name}</span> • {item.time}
                    </h3>
                    <h3 className={`typography-Ag-P-Small ${styles.itemStars}`}>
                      {item.stars}
                    </h3>
                    <Image src={stars} alt="stars" />
                    <p className={`typography-Ag-P ${styles.itemText}`}>
                      {item.text}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.arrowscontainer}>
            <div className={styles.customnext}>
              <Image src={arrowIcon} alt="next" className={styles.arrowIcon} />
            </div>
          </div>

          <div className={styles.arrowscontainermobile}>
            <div className={styles.customprev}>
              <Image src={arrowIcon} alt="prev" className={styles.arrowIcon} />
            </div>
            <div className={styles.customnext}>
              <Image src={arrowIcon} alt="next" className={styles.arrowIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
