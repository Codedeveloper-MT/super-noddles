import Image from "next/image";
import styles from "./about.module.css"
import food1 from "@/public/images/noddles1.jpg";
import food2 from "@/public/images/noddles2.jpg";
import food3 from "@/public/images/noddles3.jpg";
import food4 from "@/public/images/noddles4.jpg";
export default function AboutPage() {
    return(
<div>
    <header className={styles.header}>
    <h1>Our Noddles Odyssey:Slurping Through Flavorful Journeys</h1>
    <h4>Our Way to Super Noddles</h4>
    </header>
    <body>  
     <div className={styles.about_text}>   
    <p>Welcome to Super Noddles, your ultimate destination for all things noodles! We are passionate about bringing you the best noodle recipes, tips, and inspiration to elevate your culinary experience. Whether you're a seasoned chef or a noodle enthusiast, our platform is designed to cater to your cravings and culinary curiosity.</p>
    <p>At Super Noddles, we believe that noodles are more than just a meal; they are a journey of flavors and textures. Our team of food enthusiasts and culinary experts work tirelessly to curate a diverse collection of noodle recipes from around the world. From classic Italian pasta dishes to exotic Asian noodle creations, we have something for every palate.</p>
    <p>Join our vibrant community of noodle lovers and embark on a flavorful adventure with us. Explore our recipe library, share your own creations, and connect with fellow food enthusiasts who share your passion for noodles. Together, let's celebrate the art of noodle-making and discover new ways to enjoy this beloved culinary staple.</p>
     </div>
    <div className={styles.image_gallery}>
    <Image src={food1} alt="Noddles" width={400} height={300} />
    <Image src={food2} alt="Noddles" width={400} height={300} />
    <Image src={food3} alt="Noddles" width={400} height={300} />
    <Image src={food4} alt="Noddles" width={400} height={300} />
    </div>
    <div className={styles.mission}>
        <h2>Our Mission</h2>
        <p>Our mission is to inspire and empower noodle enthusiasts to create delicious meals that bring joy and satisfaction. We strive to provide a platform where food lovers can explore, learn, and share their passion for noodles. Through our content, we aim to foster a sense of community and connection among noodle enthusiasts worldwide.</p>
        <p>Whether you're looking for quick and easy weeknight dinners or gourmet noodle creations, Super Noddles is here to guide you on your culinary journey. We are committed to delivering high-quality content that is both informative and engaging, ensuring that every visit to our platform leaves you inspired and ready to create your own noodle masterpieces.</p>
    </div>
    </body>
   
    </div>
    )
}
