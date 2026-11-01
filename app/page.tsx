import HomeBody from "@/components/HomeBody/HomeBody";
import ImageSlideShow from "@/components/ImageSlideShow/image-slide-show";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.row}>
      <div className={styles.textSide}>
        <HomeBody />
      </div>
      <div className={styles.noddles_slide_show}>
        <ImageSlideShow />
      </div>
    </div>
  );
}