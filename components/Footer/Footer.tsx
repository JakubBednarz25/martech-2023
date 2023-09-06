import Image from "next/image";
import Search from "../Search/Search";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.column}>
          <div className={styles.logo}>
            <Image
              src={"/logo.png"}
              layout={"fill"}
              objectFit={"contain"}
              alt="Martech logo"
            />
          </div>
          <ul>
            <li>MAR-TECH LOGISTICS LTD</li>
            <li>Unit 4A</li>
            <li>Cowbridge Business Park</li>
            <li>Boston Road</li>
            <li>Boston</li>
            <li>Lincolnshire</li>
            <li>pe22 7dj</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Contact</h3>
          <ul>
            <li>07715129997</li>
            <li>martechuk85@gmail.com</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Social Media</h3>
          <div className={styles.socials}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46.828"
              height="46.818"
              viewBox="0 0 46.828 46.818"
            >
              <path
                id="Path_5"
                data-name="Path 5"
                d="M23.344,43.23a12,12,0,1,0,12,12A11.985,11.985,0,0,0,23.344,43.23Zm0,19.807a7.8,7.8,0,1,1,7.8-7.8,7.818,7.818,0,0,1-7.8,7.8Zm15.294-20.3a2.8,2.8,0,1,1-2.8-2.8A2.793,2.793,0,0,1,38.639,42.739Zm7.95,2.842c-.178-3.75-1.034-7.073-3.782-9.81S36.748,32.178,33,31.99c-3.865-.219-15.451-.219-19.316,0-3.74.178-7.062,1.034-9.81,3.771S.278,41.82.09,45.571C-.13,49.436-.13,61.022.09,64.887c.178,3.75,1.034,7.073,3.782,9.81s6.059,3.594,9.81,3.782c3.865.219,15.451.219,19.316,0,3.75-.178,7.073-1.034,9.81-3.782s3.594-6.059,3.782-9.81c.219-3.865.219-15.441,0-19.306ZM41.6,69.034a7.9,7.9,0,0,1-4.45,4.45c-3.082,1.222-10.395.94-13.8.94s-10.729.272-13.8-.94a7.9,7.9,0,0,1-4.45-4.45c-1.222-3.082-.94-10.395-.94-13.8s-.272-10.729.94-13.8a7.9,7.9,0,0,1,4.45-4.45c3.082-1.222,10.395-.94,13.8-.94s10.729-.272,13.8.94a7.9,7.9,0,0,1,4.45,4.45c1.222,3.082.94,10.395.94,13.8S42.818,65.963,41.6,69.034Z"
                transform="translate(0.075 -31.825)"
                fill="#660205"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44.845"
              height="44.574"
              viewBox="0 0 44.845 44.574"
            >
              <path
                id="Path_6"
                data-name="Path 6"
                d="M52.845,30.423A22.423,22.423,0,1,0,26.919,52.574V36.9h-5.7V30.423h5.7v-4.94c0-5.619,3.345-8.723,8.469-8.723a34.508,34.508,0,0,1,5.02.438v5.515H37.58c-2.785,0-3.654,1.729-3.654,3.5v4.209h6.219L39.15,36.9H33.926v15.67A22.431,22.431,0,0,0,52.845,30.423Z"
                transform="translate(-8 -8)"
                fill="#660205"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60.422"
              height="42.484"
              viewBox="0 0 60.422 42.484"
            >
              <path
                id="Path_7"
                data-name="Path 7"
                d="M74.092,70.647a7.592,7.592,0,0,0-5.342-5.377C64.038,64,45.144,64,45.144,64S26.25,64,21.537,65.271A7.592,7.592,0,0,0,16.2,70.647c-1.263,4.743-1.263,14.638-1.263,14.638s0,9.895,1.263,14.638a7.479,7.479,0,0,0,5.342,5.291c4.712,1.271,23.606,1.271,23.606,1.271s18.894,0,23.606-1.271a7.479,7.479,0,0,0,5.342-5.291c1.263-4.743,1.263-14.638,1.263-14.638S75.355,75.39,74.092,70.647ZM38.964,94.269V76.3l15.792,8.984Z"
                transform="translate(-14.933 -64)"
                fill="#660205"
              />
            </svg>
          </div>
        </div>
        <div className={styles.column}>
          <h3>Browse</h3>
          <p>Look through our inventory to find a kit that suits you</p>
          <Search />
        </div>
      </div>
      <div className={styles.bottom}>
        <p>Mar-tech Air Suspensions Limited © 2023</p>
        <p>Mon - Fri/9:00 AM - 5:00 PM</p>
      </div>
    </footer>
  );
};

export default Footer;
