import styles from "@/styles/Home.module.scss";
import FeaturedShowcase from "@/components/home/FeaturedShowcase";

export default function Home() {
  return (
    <div className={`container-lg column ${styles.container}`}>
      <h1 className={`${styles.heading} ${styles.typewriter}`}>SVivn</h1>
      <h2 className={`${styles.heading} ${styles.typewriter}`}>
        Web Developer, Tea and Carnivorous Plant Enthusiast
      </h2>
      <div className="divider"></div>
      <h1 className={styles.heading}>Featured Projects</h1>
      <FeaturedShowcase />
    </div>
  );
}
