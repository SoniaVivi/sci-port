import FeaturedContainer from "../FeaturedContainer";
import mikoImage from "@/public/projects/mikoReader.png";
import vividImage from "@/public/projects/vividImageOrganizer.png";
import svivnImage from "@/public/projects/svivn.png";
import koiKoiImage from "@/public/projects/koiKoi.png";
import rommTeaImage from "@/public/projects/rommTea.png";
import MikoReaderText from "@/text/featured/mikoReader.mdx";
import RommTeaText from "@/text/featured/rommTea.mdx";
import VividText from "@/text/featured/vivid.mdx";
import SvivnText from "@/text/featured/svivn.mdx";
import KoiKoiText from "@/text/featured/koiKoi.mdx";

const FeaturedShowcase = () => {
  return (
    <>
      <FeaturedContainer
        imageLink={mikoImage}
        alt="Screenshot of Miko Reader, a manga reading webapp"
        links={{
          github: "https://github.com/SoniaVivi/miko-reader",
        }}
      >
        <MikoReaderText />
      </FeaturedContainer>
      <FeaturedContainer
        imageLink={koiKoiImage}
        alt="Screenshot of Koi Koi, a recreation of the tradional japanese card game"
        links={{
          github: "https://github.com/SoniaVivi/koi-koi",
          liveView: "https://koikoisvivn.onrender.com/",
        }}
      >
        <KoiKoiText />
      </FeaturedContainer>
      <FeaturedContainer
        imageLink={rommTeaImage}
        alt="Screenshot of Romm Tea, a webapp to keep track of tea infusions"
        links={{
          github: "https://github.com/SoniaVivi/romm-tea",
        }}
      >
        <RommTeaText />
      </FeaturedContainer>
      <FeaturedContainer
        imageLink={vividImage}
        alt="Screenshot of Vivid Image Organizer"
        links={{ github: "https://github.com/SoniaVivi/Image-Organizer" }}
      >
        <VividText />
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
