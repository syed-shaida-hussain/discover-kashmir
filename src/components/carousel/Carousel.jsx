"use client";

import styles from "./carousel.module.css";
import Image from "next/image";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  const getNextSlide = () => {
    setSlide((s) => (s === slides.length - 1 ? 0 : s + 1));
  };
  const getPreviousSlide = () => {
    setSlide((s) => (s === 0 ? slides.length - 1 : s - 1));
  };

  const fetchSlides = async () => {
    try {
      const res = await axios.get("/api/carousel");
      setSlides(res?.data?.carouselPosts || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSlides();
  }, []);

if (loading) {
  return (
    <div className={styles.carousel}>
      <div className={styles.skeletonSlide}>
        <div className={styles.skeletonImage}></div>
        <div className={styles.skeletonText}></div>
        <div className={styles.skeletonButton}></div>
      </div>
    </div>
  );
}


  return (
    <div className={styles.carousel}>
      <BsArrowLeftCircleFill
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={getPreviousSlide}
      />
      {slides?.map(({ title, _id, image }, index) => (
        <div
          key={index}
          className={slide === index ? styles.slide : `${styles.slide} ${styles.hidden}`}
        >
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.imgContainer}>
            <Image
              src={`/${image.split("/")[2]}`}
              alt={title}
              fill
              className={styles.carouselImage}
              quality={100}
            />
          </div>
          <Link href={`/blogs/${_id}`} className={styles.btn}>
            Know more
          </Link>
        </div>
      ))}
      <BsArrowRightCircleFill
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={getNextSlide}
      />
      <span className={styles.indicators}>
        {slides?.map((_, index) => (
          <button
            key={index}
            className={slide === index ? styles.indicator : `${styles.indicator} ${styles.inactive}`}
            onClick={() => setSlide(index)}
          ></button>
        ))}
      </span>
    </div>
  );
};

export default Carousel;
