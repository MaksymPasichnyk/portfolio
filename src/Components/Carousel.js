import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
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
		{icon: html, title: 'HTML5'}, 
		{icon: css, title: 'CSS'}, 
		{icon: javascript, title: 'Javascript'}, 
		{icon: react, title: 'React'}, 
		{icon: phaser, title: 'Phaser'}, 
		{icon: sass, title: 'Sass'}, 
		{icon: gulp, title: 'Gulp'}, 
		{icon: tailwind, title: 'Tailwind'}
	];

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
				slidesPerView={5}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
				autoplay={{
					delay: 2000,
					disableOnInteraction: false
				}}
			>
				{boxes}
			</Swiper>
		</div>
	)
}