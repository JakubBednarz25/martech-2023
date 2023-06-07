import { useState, useEffect } from "react";

import styles from "./Header.module.scss";
import Image from "next/image";

import Button from "../Button/Button";
import Search from "../Search/Search";
import Link from "next/link";

import { useRouter } from "next/router";

const navigationLinks = [
  {
    text: "Shop",
    link: "shop",
  },
  {
    text: "Installation",
    link: "installation",
  },
  {
    text: "Gallery",
    link: "gallery",
  },
  {
    text: "Partners",
    link: "partners",
  }
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dynamicRoute = useRouter().asPath;

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [dynamicRoute]);
  return (
    <header className={styles.header}>
      <aside>
        <ul>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19.303"
              height="25.671"
              viewBox="0 0 19.303 25.671"
            >
              <path
                id="Path_2"
                data-name="Path 2"
                d="M10.843,25.095c2.579-3.227,8.46-11.049,8.46-15.443a9.652,9.652,0,1,0-19.3,0c0,4.394,5.882,12.215,8.46,15.443A1.519,1.519,0,0,0,10.843,25.095ZM9.652,12.869a3.217,3.217,0,1,1,3.217-3.217A3.22,3.22,0,0,1,9.652,12.869Z"
                fill="#990407"
              />
            </svg>
            <label>Unit C10, Boston Trade Park, Boston, Lincs</label>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21.929"
              height="21.929"
              viewBox="0 0 21.929 21.929"
            >
              <path
                id="Path_3"
                data-name="Path 3"
                d="M7.062,1.032A1.708,1.708,0,0,0,5.032.038L1.263,1.066A1.718,1.718,0,0,0,0,2.719,19.188,19.188,0,0,0,19.187,21.906a1.718,1.718,0,0,0,1.653-1.263l1.028-3.769a1.708,1.708,0,0,0-.994-2.03l-4.111-1.713a1.708,1.708,0,0,0-1.983.5l-1.73,2.111A14.475,14.475,0,0,1,6.167,8.857L8.279,7.131a1.709,1.709,0,0,0,.5-1.983L7.062,1.036Z"
                transform="translate(0 0.023)"
                fill="#990407"
              />
            </svg>
            <label>07715129997</label>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21.009"
              height="21.009"
              viewBox="0 0 21.009 21.009"
            >
              <path
                id="Path_4"
                data-name="Path 4"
                d="M10.5,21.009a10.5,10.5,0,1,1,10.5-10.5A10.5,10.5,0,0,1,10.5,21.009ZM9.52,4.924V10.5a.989.989,0,0,0,.439.821L13.9,13.951a.986.986,0,0,0,1.091-1.641l-3.5-2.331V4.924a.985.985,0,1,0-1.97,0Z"
                fill="#990407"
              />
            </svg>
            <label>Mon - Fri/9:00 AM - 5:00 PM</label>
          </li>
        </ul>
        <Search />
      </aside>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src={"/logo.png"}
              layout={"fill"}
              objectFit={"contain"}
              alt="Martech logo"
            />
          </Link>
        </div>
        <nav>
          {!mobileMenuOpen ? (
            <svg
              onClick={() => {
                setMobileMenuOpen(true);
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          ) : (
            <svg
              onClick={() => {
                setMobileMenuOpen(false);
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
            </svg>
          )}
          <ul data-visible={mobileMenuOpen}>
            {navigationLinks.map((link) => (
              <li key={link.text}>
                <Link href={`/${link.link}`}>{link.text}</Link>
              </li>
            ))}
            <li>
              <Button background={true}>
                <Link href="/cart">Cart</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
