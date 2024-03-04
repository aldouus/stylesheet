import styles from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  href: string
  src: string
  alt: string
  title: string
  paragraph?: string
}

export default function Card({href, src, alt, title, paragraph}: CardProps) {
  return(
    <Link href={href} className={styles.link} target='_blank'>
      <div className={styles.wrapper}>
          <Image
            className={styles.icon}
            src={src}
            alt={alt}
            width={50}
            height={50}
            objectFit='contain'
          />
          <h3 className={styles.title}>
            {title}
          </h3>
          <div className={styles.divider}></div>
          <p className={styles.p}>
            {paragraph}
          </p>
          <p className={styles['link-text']}>
            {href}
          </p>
      </div>
    </Link>
  )
}