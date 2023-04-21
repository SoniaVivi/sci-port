import { useEffect } from "react";

const useObserver = ({
  callback,
  elemRef,
  threshold,
}: {
  callback: () => void;
  elemRef: { current: HTMLElement | null };
  threshold?: number;
}) => {
  useEffect(() => {
    if (elemRef.current === null) return;
    const targetElem = elemRef.current;
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: threshold ?? 0.5,
    };
    const observer = new IntersectionObserver(
      (data) =>
        data.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
            observer.unobserve(targetElem);
          }
        }),
      options
    );
    observer.observe(targetElem);

    return () => {
      if (targetElem !== null) {
        observer.unobserve(targetElem);
      }
    };
  }, [elemRef, callback, threshold]);
};

export default useObserver;
