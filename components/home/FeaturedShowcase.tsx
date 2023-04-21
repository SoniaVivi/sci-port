import styles from "@/styles/components/home/FeaturedShowcase.module.scss";
import Image, { StaticImageData } from "next/image";
import mikoImage from "@/public/projects/mikoReader.png";
import vividImage from "@/public/projects/vividImageOrganizer.png";
import svivnImage from "@/public/projects/svivn.png";
import rommTea from "@/public/projects/rommTea.png";
import { ReactNode, useRef, useState } from "react";
import useObserver from "../hooks/useObserver";
import Modal from "../Modal";
import { createPortal } from "react-dom";
import MikoReaderText from "@/text/featured/mikoReader.mdx";
import RommTeaText from "@/text/featured/rommTea.mdx";
import VividText from "@/text/featured/vivid.mdx";
import SvivnText from "@/text/featured/svivn.mdx";
import LinksContainer from "../LinksContainer";

const FeaturedContainer = ({
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
  const [hide, setHide] = useState(true);
  const containerRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  useObserver({
    callback: () => setHide(false),
    elemRef: containerRef,
    threshold: 0.25,
  });

  return (
    <article
      className={`cutoff-corners ${styles.featuredContainer} ${
        hide ? styles.hide : ""
      }`}
      ref={containerRef}
    >
      <div
        className={`image-wrapper ${styles.imageWrapper}`}
        onClick={() => setShowModal(true)}
      >
        <Image width="300" height="260" src={imageLink} alt={alt} />
        {showModal
          ? createPortal(
              <Modal onClose={() => setShowModal(false)}>
                <Image width="960" src={imageLink} alt={alt} />
              </Modal>,
              document.querySelector("#modal-container") as Element
            )
          : null}
      </div>
      <div className={styles.body}>
        {children}
        <LinksContainer links={links} />
      </div>
    </article>
  );
};

const FeaturedShowcase = () => {
  return (
    <>
      <FeaturedContainer
        imageLink={mikoImage}
        alt="Screenshot of Miko Reader, a manga reading webapp"
        links={{
          github: "https://github.com/SoniaVivi/miko-reader",
          liveView: "https://miko-reader.herokuapp.com/",
        }}
      >
        <MikoReaderText />
      </FeaturedContainer>
      <FeaturedContainer
        imageLink={vividImage}
        alt="Screenshot of Vivid Image Organizer"
        links={{ github: "https://github.com/SoniaVivi/Image-Organizer" }}
      >
        <VividText />
      </FeaturedContainer>
      <FeaturedContainer
        imageLink={rommTea}
        alt="Screenshot of Romm Tea, a webapp to keep track of tea infusions"
        links={{ github: "https://github.com/SoniaVivi/romm-tea" }}
      >
        <RommTeaText />
      </FeaturedContainer>
      <FeaturedContainer
        imageLink={svivnImage}
        alt="SVivn's Personal Website"
        links={{ github: "https://github.com/SoniaVivi/sci-port" }}
      >
        <SvivnText />
      </FeaturedContainer>
    </>
  );
};

export default FeaturedShowcase;
