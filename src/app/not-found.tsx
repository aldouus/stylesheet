'use client';
import useMousePosition from "./utils/useMousePosition";
import Link from "next/link";
import { motion } from 'framer-motion';
import styles from "./page.module.scss";
import { useState } from "react";
import { abort } from "process";

export default function notFound() {

  const { x, y } = useMousePosition();
  const [arrowIsHovered, setArrowIsHovered] = useState(false);
  const size = arrowIsHovered ? 0 : 50;
  const scale = arrowIsHovered ? 3 : 2;

  return (
    <main className={styles.main}>
      <h1>404 not found</h1>
      <motion.div
        className={styles.cursor}
        animate={{
          x: x - size / 2,
          y: y - size / 2,
          height: `${size}px`,
        }}
      >
      <Link className={styles.centered} href="/">
        <span className={styles['link-text']}>Back</span>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0V0z" fill="none"/>
          <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z"/>
        </svg>
      </Link>
      </motion.div>
    </main>
  )
}