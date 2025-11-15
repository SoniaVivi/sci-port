import FeaturedContainer from "@/components/FeaturedContainer";
import Image from "next/image";
import FirstPost from "@/text/plastic/firstPost.mdx";
import SecondPost from "@/text/plastic/secondPost.mdx";
import styles from "@/styles/Plastic.module.scss";
import redPlasticImage from "@/public/plastic/redPlastic.png";
import plasticBottleImage from "@/public/plastic/plasticBottle.png";

export default function Home() {
  return (
    <div className={`container-lg column ${styles.mainContent}`}>
      <h1 className={`${styles.heading} ${styles.typewriter}`}>
        Life is Plastic!
      </h1>
      <h2 className={`${styles.heading} ${styles.typewriter}`}>Embrace It!</h2>
      <FeaturedContainer
        imageLink={redPlasticImage}
        alt="Red Plastic"
        links={{ studyLink: "https://pubmed.ncbi.nlm.nih.gov/34185251/</div>" }}
      >
        <FirstPost />
      </FeaturedContainer>
      <FeaturedContainer
        imageLink={plasticBottleImage}
        alt="Plastic"
        links={{
          babyBottlesArticle:
            "https://www.theguardian.com/environment/2020/oct/19/bottle-fed-babies-swallow-millions-microplastics-day-study",
          tiresArticle:
            "https://www.forbes.com/sites/lauriewinkless/2024/12/18/tires-shed-millions-of-tonnes-of-microplastics-into-the-environment/",
          airborneMicroPlasticsStudy:
            "https://pubmed.ncbi.nlm.nih.gov/31650348/",
        }}
      >
        <SecondPost />
      </FeaturedContainer>
    </div>
  );
}
