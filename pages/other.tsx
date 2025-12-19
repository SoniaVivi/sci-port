import useObserver from "@/components/hooks/useObserver";
import styles from "@/styles/Portfolio.module.scss";
import Image, { StaticImageData } from "next/image";
import { ReactNode, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Modal from "@/components/Modal";
// WebApps
import fakeditImage from "@/public/projects/fakedit.png";
import FakeditText from "@/text/portfolio/fakedit.mdx";
import mockTweeterImage from "@/public/projects/mockTweeter.png";
import MockTweeterText from "@/text/portfolio/mockTweeter.mdx";
import yuriaImage from "@/public/projects/yuriaMPGen.png";
import YuriaText from "@/text/portfolio/yuria.mdx";
import jpTitleFinderImage from "@/public/projects/enJPTitleFinder.png";
import JpTitleFinderText from "@/text/portfolio/enJpTitleConverter.mdx";
// Browser Extensions
import skyFishImage from "@/public/projects/skyFish.png";
import SkyFishText from "@/text/portfolio/skyFish.mdx";
import tweetIguanaImage from "@/public/projects/tweetIguana.png";
import TweetIguanaText from "@/text/portfolio/tweetIguana.mdx";
// Useful Tools
import timeLoggerImage from "@/public/projects/timeLogger.png";
import TimeLoggerText from "@/text/portfolio/timeLogger.mdx";
import redditDeletionScriptImage from "@/public/projects/redditDeletionScript.png";
import RedditDeletionScriptText from "@/text/portfolio/redditDeletionScript.mdx";
// Games
import battleshipImage from "@/public/projects/battleship.png";
import BattleshipText from "@/text/portfolio/battleship.mdx";
import snakeImage from "@/public/projects/snake.png";
import SnakeText from "@/text/portfolio/snake.mdx";
import LinksContainer from "@/components/LinksContainer";

const Project = ({
  imageLink,
  alt,
  children,
  links,
}: {
  imageLink: StaticImageData;
  alt: string;
  children: ReactNode;
  links?: { [key: string]: string | number };
}) => {
  const [hiddenText, setHiddenText] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const containerRef = useRef(null);
  useObserver({ callback: () => setHiddenText(false), elemRef: containerRef });

  return (
    <article
      className={`container-lg notched-corners ${styles.projectContainer}`}
      ref={containerRef}
    >
      <div
        className={`image-wrapper ${styles.imageWrapper} ${
          hiddenText ? styles.inactive : ""
        }`}
        onClick={() => setShowModal(true)}
      >
        <Image
          width="480"
          height="300"
          src={imageLink}
          alt={alt}
          placeholder="blur"
        ></Image>
        {showModal
          ? createPortal(
              <Modal onClose={() => setShowModal(false)}>
                <Image width="960" src={imageLink} alt={alt}></Image>
              </Modal>,
              document.querySelector("#modal-container") as Element
            )
          : null}
      </div>
      <div className={styles.textBody}>
        {children}
        <LinksContainer links={links} />
      </div>
    </article>
  );
};

export default function Portfolio() {
  return (
    <>
      <h1>Other Projects</h1>
      <div className="container-lg column">
        <div className="divider"></div>
      </div>
      <h2 className={styles.heading}>Web Applications</h2>
      <div className={`container-lg column ${styles.container}`}>
        <Project
          imageLink={fakeditImage}
          alt="Fakedit, a Reddit clone"
          links={{ github: "https://github.com/SoniaVivi/odin-reddit" }}
        >
          <FakeditText />
        </Project>
        <Project
          imageLink={yuriaImage}
          alt="Movie poster generator webapp"
          links={{ github: "https://github.com/SoniaVivi/yuria-mp-gen/" }}
        >
          <YuriaText />
        </Project>
        <Project
          imageLink={jpTitleFinderImage}
          alt="English to Japanese Title Finder webapp"
          links={{ github: "https://github.com/SoniaVivi/en-jp-title-finder" }}
        >
          <JpTitleFinderText />
        </Project>
        <Project
          imageLink={mockTweeterImage}
          alt="Mock tweeter"
          links={{ github: "https://github.com/SoniaVivi/mock-tweeter" }}
        >
          <MockTweeterText />
        </Project>
      </div>
      <h2>Browser Extensions</h2>
      <div className={`container-lg column ${styles.container}`}>
        <Project
          imageLink={skyFishImage}
          alt="Manga finder browser extension"
          links={{ github: "https://github.com/SoniaVivi/sky-fish" }}
        >
          <SkyFishText />
        </Project>
        <Project
          imageLink={tweetIguanaImage}
          alt="Browser extension to download tweet attachments"
          links={{ github: "https://github.com/SoniaVivi/tweet-iguana" }}
        >
          <TweetIguanaText />
        </Project>
      </div>
      <h2>Useful Tools</h2>
      <div className={`container-lg column ${styles.container}`}>
        <Project
          imageLink={timeLoggerImage}
          alt="Command Line Interface Time Logger"
          links={{ github: "https://github.com/SoniaVivi/time_logger" }}
        >
          <TimeLoggerText />
        </Project>
        <Project
          imageLink={redditDeletionScriptImage}
          alt="Code of the Reddit Deletion Script"
          links={{
            github: "https://github.com/SoniaVivi/reddit-deletion-script",
          }}
        >
          <RedditDeletionScriptText />
        </Project>
      </div>
      <h2>Games</h2>
      <div className={`container-lg column ${styles.container}`}>
        <Project
          imageLink={snakeImage}
          alt="The game snake"
          links={{ github: "https://github.com/SoniaVivi/snake" }}
        >
          <SnakeText />
        </Project>
        <Project
          imageLink={battleshipImage}
          alt="The game battleship"
          links={{ github: "https://github.com/SoniaVivi/battleship" }}
        >
          <BattleshipText />
        </Project>
      </div>
    </>
  );
}
