import FeaturedContainer from "@/components/FeaturedContainer";
import FirstPost from "@/text/plastic/firstPost.mdx";
import koiKoiImage from "@/public/projects/koiKoi.png";
import styles from "@/styles/Plastic.module.scss";

export default function Home() {
  return (
    <div className={`container-lg column ${styles.mainContent}`}>
      <h1 className={`${styles.heading} ${styles.typewriter}`}>
        Life is Plastic!
      </h1>
      <h2 className={`${styles.heading} ${styles.typewriter}`}>Embrace It!</h2>
      <FeaturedContainer imageLink={koiKoiImage} alt="Plastic">
        <FirstPost />
      </FeaturedContainer>
    </div>
  );
}
