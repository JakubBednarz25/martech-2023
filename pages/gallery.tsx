import SimpleReactLightBox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

import Image from "next/image";

import styles from "../styles/pages/Gallery.module.scss";

const Gallery = () => {
  return (
    <div className={styles.container}>
      <h1>Gallery</h1>
          <div className={styles.imagesWrapper}>
            {[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 21,
            ].map((n) => (
              <a key={n} href={`/gallery/${n}.jpg`}>
                <Image
                  src={`/gallery/${n}.jpg`}
                  alt={`${n}-image`}
                  width={300}
                  height={250}
                />
              </a>
            ))}
          </div>
    </div>
  );
};

export default Gallery;
