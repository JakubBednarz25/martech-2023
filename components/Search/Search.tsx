import styles from "./Search.module.scss";

import Items, { ShopItem } from "../../utils/items";
import { useEffect, useState } from "react";
import Link from "next/link";

import {useRouter} from 'next/router';

const Search = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<ShopItem[]>([]);
  const dynamicRoute = useRouter().asPath;

  useEffect(() => {
    setQuery("");
  }, [dynamicRoute]);

  useEffect(() => {
    if (query){
      setResults(
        Items.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
    else{
      setResults([]);
    }
  }, [query]);

  return (
    <div className={styles.search}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27.582"
        height="27.587"
        viewBox="0 0 27.582 27.587"
      >
        <path
          id="Path_8"
          data-name="Path 8"
          d="M22.411,11.206a11.178,11.178,0,0,1-2.155,6.61l6.82,6.826a1.726,1.726,0,0,1-2.44,2.44l-6.82-6.826a11.207,11.207,0,1,1,4.6-9.051ZM11.206,18.963a7.758,7.758,0,1,0-7.758-7.758A7.76,7.76,0,0,0,11.206,18.963Z"
          fill="gray"
        />
      </svg>
      <input
        type="search"
        placeholder="Search for items"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      {results.length !== 0 && (
        <ul className={styles.results}>
          {results.map((result) => (
            <li>
              <Link href={`/item/${result.id}`}>{result.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
