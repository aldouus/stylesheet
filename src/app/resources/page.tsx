'use client';
import styles from './page.module.scss';
import Card from '@/components/card';
import Link from 'next/link';
import Magnetic from '@/components/Magnetic';
import { motion } from 'framer-motion';
import { useState } from "react";
import useMousePosition from '../utils/useMousePosition';

export default function Resources() {

  const [arrowIsHovered, setArrowIsHovered] = useState(false)
  const [cardIsHovered, setCardIsHovered] = useState(false)
  const { x, y } = useMousePosition();
  const size = cardIsHovered ? 150 : arrowIsHovered ? 0 : 50;
  const scale = arrowIsHovered ? 3 : 2;
  const color = cardIsHovered ? '#191919' : '#fff';
  const filter = cardIsHovered ? 'blur(25px)' : 'blur(0)';

  return(
    <main className={styles.main}>
      <Link
        href="/"
        className={styles['back-link']}
        onMouseEnter={() => {setArrowIsHovered(true)}}
        onMouseLeave={() => {setArrowIsHovered(false)}}
      >
        <span className={styles['link-text']}>Back</span>
        <Magnetic>
          <motion.svg animate={{scale: scale}} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 20 20" height="20" viewBox="0 0 20 20" width="20"><g><rect fill="none" height="20" width="20"/></g><g><path d="M2,10c0,4.42,3.58,8,8,8s8-3.58,8-8s-3.58-8-8-8S2,5.58,2,10z M10,9.25l3,0v1.5l-3,0L10,13l-3-3l3-3L10,9.25z"/></g>
          </motion.svg>
        </Magnetic>
      </Link>
      <motion.div
        className={styles.cursor}
        animate={{
          x: x - size / 2,
          y: y - size / 2,
          height: `${size}px`,
          background: `${color}`,
          filter: `${filter}`
        }}
      >
      </motion.div>
      <div className={styles.container}>
        <motion.div
          onMouseEnter={() => setCardIsHovered(true)}
          onMouseLeave={() => setCardIsHovered(false)}
          whileHover={{scale: 1.05}}
          transition={{type: 'spring', duration: 0.5}}>
          <Card
            href='https://developer.mozilla.org/'
            title='MDN Web Docs'
            paragraph='One of the best documentations for HTML, CSS and JS'
            src='/images/mdn.png'
            alt='MDN web docs website icon'
          />
        </motion.div>
        <motion.div
          onMouseEnter={() => setCardIsHovered(true)}
          onMouseLeave={() => setCardIsHovered(false)}
          whileHover={{scale: 1.05}}
          transition={{type: 'spring', duration: 0.5}}>
          <Card
            href='https://cubic-bezier.com/'
            title='Cubic Bezier'
            paragraph='A simple tool for creating cubic bezier easing curves'
            src='/images/cubic-bezier.png'
            alt='Cubic Bezier website icon'
          />
        </motion.div>
        <motion.div
          onMouseEnter={() => setCardIsHovered(true)}
          onMouseLeave={() => setCardIsHovered(false)}
          whileHover={{scale: 1.05}}
          transition={{type: 'spring', duration: 0.5}}>
          <Card
            href='https://bennettfeely.com/clippy/'
            title='Clippy'
            paragraph='An easy tool for creating cusom clip paths'
            src='/images/clippy.png'
            alt='Clippy website icon'
          />
        </motion.div>
        <motion.div
          onMouseEnter={() => setCardIsHovered(true)}
          onMouseLeave={() => setCardIsHovered(false)}
          whileHover={{scale: 1.05}}
          transition={{type: 'spring', duration: 0.5}}>
          <Card
            href='https://animate.style/'
            title='Animate'
            paragraph='A comprehensive library of premade CSS animations'
            src='/images/animate.png'
            alt='Animate website icon'
          />
        </motion.div>
        <motion.div
          onMouseEnter={() => setCardIsHovered(true)}
          onMouseLeave={() => setCardIsHovered(false)}
          whileHover={{scale: 1.05}}
          transition={{type: 'spring', duration: 0.5}}>
          <Card
            href='https://css-tricks.com/'
            title='CSS Tricks'
            paragraph='Some of the best articles for learning new CSS tricks (hence the name)'
            src='/images/css-tricks.png'
            alt='CSS Tricks website icon'
          />
        </motion.div>
        <motion.div
          onMouseEnter={() => setCardIsHovered(true)}
          onMouseLeave={() => setCardIsHovered(false)}
          whileHover={{scale: 1.05}}
          transition={{type: 'spring', duration: 0.5}}>
          <Card
            href='https://css.glass/'
            title='CSS Glass'
            paragraph='A tool for creating the glassmorphism effect in CSS'
            src='/images/glassmorphism.png'
            alt='CSS Glass website icon'
          />
        </motion.div>
        <motion.div
          onMouseEnter={() => setCardIsHovered(true)}
          onMouseLeave={() => setCardIsHovered(false)}
          whileHover={{scale: 1.05}}
          transition={{type: 'spring', duration: 0.5}}>
          <Card
            href='https://neumorphism.io'
            title='Neomorphism'
            paragraph='A tool for generating Soft-UI CSS code'
            src='/images/neomorphism.png'
            alt='Neomorphism.io website icon'
          />
        </motion.div>
        <motion.div
          onMouseEnter={() => setCardIsHovered(true)}
          onMouseLeave={() => setCardIsHovered(false)}
          whileHover={{scale: 1.05}}
          transition={{type: 'spring', duration: 0.5}}>
          <Card
            href='https://frontendmasters.com/'
            title='Frontend Masters'
            paragraph='Work on high quality projects with a community of other devs'
            src='/images/frontend-masters.png'
            alt='Neomorphism.io website icon'
          />
        </motion.div>
      </div>
    </main>
  )
}