import styles from "@/styles/About.module.scss";
import Image from "next/image";
import portrait from "@/public/about/portfolioPortrait.png";
import PortraitText from "@/text/about/siona.mdx";
import LinksContainer from "@/components/LinksContainer";

export default function About() {
  return (
    <>
      <h1>About</h1>
      <div className="container-lg">
        <div className="divider"></div>
      </div>
      <div
        className={`container-lg cutoff-corners notched-left ${styles.portraitContainer}`}
      >
        {/* <div className={styles.portraitWrapper}>
          <Image width="320" src={portrait} alt="Siona Vivian" />
        </div> */}
        <div className={styles.textBody}>
          <PortraitText />
          <LinksContainer
            links={{
              github: "https://github.com/SoniaVivi",
              codewars: "https://www.codewars.com/users/SVivn",
              leetcode: "https://leetcode.com/SVivn/",
            }}
          />
        </div>
      </div>
    </>
  );
}
