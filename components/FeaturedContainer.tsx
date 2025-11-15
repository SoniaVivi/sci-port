import styles from "@/styles/components/home/FeaturedShowcase.module.scss";
import Image, { StaticImageData } from "next/image";
import { ReactNode, useRef, useState } from "react";
import useObserver from "./hooks/useObserver";
import Modal from "./Modal";
import { createPortal } from "react-dom";
import LinksContainer from "./LinksContainer";

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
        <Image
          width="300"
          height="260"
          src={imageLink}
          alt={alt}
          placeholder="blur"
        />
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

export default FeaturedContainer;
