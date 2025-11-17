import FeaturedContainer from "@/components/FeaturedContainer";
import Image from "next/image";
import FirstPost from "@/text/plastic/firstPost.mdx";
import SecondPost from "@/text/plastic/secondPost.mdx";
import koiKoiImage from "@/public/projects/koiKoi.png";
import tireIcon from "@/public/icons/tire.png";
import shirtIcon from "@/public/icons/shirt.png";
import styles from "@/styles/Plastic.module.scss";

export default function Home() {
  return (
    <div className={`container-lg column ${styles.mainContent}`}>
      <h1 className={`${styles.heading} ${styles.typewriter}`}>
        Life is Plastic!
      </h1>
      <h2 className={`${styles.heading} ${styles.typewriter}`}>Embrace It!</h2>
      <div className={`${styles.iconContainer} flex center`}>
        <Image
          className="clickable"
          width="50"
          height="50"
          src={tireIcon}
          alt={"Tire"}
          placeholder="blur"
        />
        <Image
          className="clickable"
          width="50"
          height="50"
          src={shirtIcon}
          alt={"Shirt"}
          placeholder="blur"
        />
      </div>
      <FeaturedContainer imageLink={koiKoiImage} alt="Plastic">
        <FirstPost />
      </FeaturedContainer>
      <FeaturedContainer imageLink={koiKoiImage} alt="Plastic">
        <SecondPost />
      </FeaturedContainer>
    </div>
  );
}
