import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";

// icons
import css from "../assets/icons/css.png";
import gulp from "../assets/icons/gulp.png";
import javascript from "../assets/icons/javascript.png";
import phaser from "../assets/icons/phaser.png";
import react from "../assets/icons/react.png";
import sass from "../assets/icons/sass.png";
import html from "../assets/icons/html.png";
import tailwind from "../assets/icons/tailwind.svg";

export default function Carousel() {
  const skills = [
    { icon: html, title: "HTML5" },
    { icon: css, title: "CSS" },
    { icon: javascript, title: "Javascript" },
    { icon: react, title: "React" },
    { icon: phaser, title: "Phaser" },
    { icon: sass, title: "Sass" },
    { icon: gulp, title: "Gulp" },
    { icon: tailwind, title: "Tailwind" },
  ];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  function updateDimensions() {
    setWindowWidth(window.innerWidth);
  }

  function getSlidesPerView(windowWidth) {
    let slidesPerView;
    if (windowWidth > 1200) {
      slidesPerView = 5;
    } else if (windowWidth > 991) {
      slidesPerView = 4;
    } else if (windowWidth > 771) {
      slidesPerView = 3;
    } else if (windowWidth > 556) {
      slidesPerView = 2;
    } else if (windowWidth > 400) {
      slidesPerView = 1;
    }
    return slidesPerView;
  }

  const boxes = skills.map((skill, index) => (
    <SwiperSlide key={index}>
      <div className="stack-card">
        <img src={skill.icon} width={100} height={100} />
        <h5>{skill.title}</h5>
      </div>
    </SwiperSlide>
  ));

  return (
    <div className="slider">
      <Swiper
        loop={true}
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={getSlidesPerView(windowWidth)}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
      >
        {boxes}
      </Swiper>
    </div>
  );
}
