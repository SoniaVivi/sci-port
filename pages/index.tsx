import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1 className={styles.heading}>
        The quick brown fox jumps over the lazy dog.
      </h1>
      <div className={styles.container}>
        <p>The quick brown fox jumps over the lazy dog.</p>
      </div>
      <h1 className={styles.para}>
        The quick brown fox jumps over the lazy dog.
      </h1>
    </>
  );
}
