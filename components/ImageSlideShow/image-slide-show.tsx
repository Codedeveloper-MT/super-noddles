"use client";
import Image from "next/image";
import styles from "./image-slide-show.module.css";
import { useEffect, useState } from "react";

import noddles2 from "@/public/images/images2.jpg";
import noddles3 from "@/public/images/images3.jpg";
import noddles4 from "@/public/images/images4.jpg";
import noddles5 from "@/public/images/images5.jpg";
import noddles6 from "@/public/images/images6.jpg";
import noddles7 from "@/public/images/images7.jpg";
import noddles8 from "@/public/images/images8.jpg";
import noddles9 from "@/public/images/images9.jpg";
import noddles10 from "@/public/images/images10.jpg";
import noddles11 from "@/public/images/images11.jpg";

const images = [
  { image: noddles2, alt: "Delicious stir-fried noodles tossed with fresh vegetables" },
  { image: noddles3, alt: "A tasty bowl of noodles served with colourful vegetables" },
  { image: noddles4, alt: "Asian-style noodles prepared with a rich savoury sauce" },
  { image: noddles5, alt: "Freshly cooked noodles with a delicious blend of spices" },
  { image: noddles6, alt: "Hot and flavourful noodles ready to enjoy" },
  { image: noddles7, alt: "A comforting noodle dish topped with fresh ingredients" },
  { image: noddles8, alt: "Golden stir-fried noodles with a mouthwatering texture" },
  { image: noddles9, alt: "A delicious noodle meal served with a tasty combination of ingredients" },
  { image: noddles10, alt: "A hearty bowl of seasoned noodles for a satisfying meal" },
  { image: noddles11, alt: "Freshly prepared noodles with vibrant colours and rich flavours" }
];

export default function ImageSlideShow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

 return (
  <div className={styles.container}>
    {images.map((item, index) => (
      <Image
        key={index}
        src={item.image}
        alt={item.alt}
        priority={index === 0}
        className={`${styles.slide} ${
          index === currentImageIndex ? styles.active : ""
        }`}
      />
    ))}

    <div className={styles.overlay} />

    <div className={styles.text}>
      <h2 className={styles.title}>Super Noddles</h2>
      <p className={styles.tagline}>Every craving. Every kitchen.</p>
    </div>

    <div className={styles.dots}>
      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentImageIndex(index)}
          aria-label={`Show image ${index + 1}`}
          className={`${styles.dot} ${
            index === currentImageIndex ? styles.dotActive : ""
          }`}
        />
      ))}
    </div>
  </div>
);
}