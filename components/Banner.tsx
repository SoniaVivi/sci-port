import Image from "next/image";
import bannerImage from "@/public/banner.png";
import styles from "@/styles/components/Banner.module.scss";

const Banner = () => {
  return (
    <div className={`container-full ${styles.container}`}>
      <Image
        height="300"
        width="1024"
        alt="Futuristic Cyberpunk cityscape"
        src={bannerImage}
        className={styles.bannerImage}
      />
    </div>
  );
};

export default Banner;
