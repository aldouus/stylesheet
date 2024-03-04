'use client';
import useMousePosition from "./utils/useMousePosition";
import { motion } from 'framer-motion';
import styles from "./page.module.scss";
import Magnetic from "@/components/Magnetic";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [arrowIsHovered, setArrowIsHovered] = useState(false);
  const [cogIsHovered, setCogIsHovered] = useState(false);
  const [twitterIsHovered, setTwitterIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = arrowIsHovered || cogIsHovered || twitterIsHovered ? 0 : 50;
  const scale = arrowIsHovered ? 3 : 2;
  const twitterColor = twitterIsHovered ? "#1DA1F2" : "#191919";

  return (
    <main className={styles.main}>
        <motion.div
          className={styles.cursor}
          animate={{
            x: x - size / 2,
            y: y - size / 2,
            height: `${size}px`,
          }}
        >
        </motion.div>
      <div className={styles.container}>
        <motion.div
          className={styles.cog}
          onMouseEnter={() => {setCogIsHovered(true)}}
          onMouseLeave={() => {setCogIsHovered(false)}}
          >
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64z"/>
          </svg>
        </motion.div>
        <div className={styles['title-wrapper']} >
          <h1 className={styles.title}>
            Something's in the works here
          </h1>
        </div>
        <div className={styles['subtitle-wrapper']}>
          <h2 className={styles.subtitle}>
            For now, check out these resources
          </h2>
          <Magnetic>
            <Link
              href="./resources"
              className={styles.arrow}
              onMouseEnter={() => {setArrowIsHovered(true)}}
              onMouseLeave={() => {setArrowIsHovered(false)}}
            >
              <motion.svg
                animate={{scale: scale}}
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 20 20"
                height="20"
                viewBox="0 0 20 20"
                width="20">
                  <g>
                    <rect
                      fill="none"
                      height="20"
                      width="20"/></g>
                      <g>
                        <path d="M18,10c0-4.42-3.58-8-8-8s-8,3.58-8,8s3.58,8,8,8S18,14.42,18,10z M10,10.75H7v-1.5h3V7l3,3l-3,3V10.75z"/>
                  </g>
              </motion.svg>
            </Link>
          </Magnetic>
        </div>
      </div>
      <Link
        onMouseEnter={() => setTwitterIsHovered(true)}
        onMouseLeave={() => setTwitterIsHovered(false)}
        href="https://www.twitter.com/aldicodes"
        className={styles.twitter}>
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            animate={{fill: twitterColor}}
            d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"/>
        </svg>
      </Link>
    </main>
  );
}