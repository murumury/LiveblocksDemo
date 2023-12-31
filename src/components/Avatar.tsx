import { useState, useEffect } from "react";
import styles from "./Avatar.module.css";
import { faker } from '@faker-js/faker';
type Props = {
  color?: string;
};

export default function Avatar({ color }: Props) {
  const [randomAvatar, setRandomAvatar] = useState<string | null>(null);

  useEffect(() => {
    setRandomAvatar(faker.image.avatar());
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.9998 6C14.8899 6 15.7599 6.26392 16.4999 6.75839C17.2399 7.25285 17.8167 7.95566 18.1573 8.77792C18.4979 9.60019 18.587 10.505 18.4134 11.3779C18.2397 12.2508 17.8112 13.0526 17.1818 13.682C16.5525 14.3113 15.7507 14.7399 14.8777 14.9135C14.0048 15.0872 13.1 14.9981 12.2778 14.6575C11.4555 14.3169 10.7527 13.7401 10.2582 13.0001C9.76376 12.26 9.49984 11.39 9.49984 10.5C9.49984 9.30653 9.97394 8.16193 10.8179 7.31802C11.6618 6.47411 12.8064 6 13.9998 6ZM6.00684 22.93C6.02418 21.617 6.55778 20.3636 7.49219 19.4409C8.42661 18.5183 9.68669 18.0007 10.9998 18H16.9998C18.313 18.0007 19.5731 18.5183 20.5075 19.4409C21.4419 20.3636 21.9755 21.617 21.9928 22.93C19.7997 24.9063 16.9521 26.0001 13.9998 26.0001C11.0476 26.0001 8.19999 24.9063 6.00684 22.93Z"
            style={{ fill: `var(--light-gray)` }}
          />
        </svg>
        {randomAvatar && <img src={randomAvatar} alt="Avatar"></img>}
      </div>
      <div
        className={styles.color}
        style={{ border: `2px solid rgb(${color})` }}
      />
    </div>
  );
}
