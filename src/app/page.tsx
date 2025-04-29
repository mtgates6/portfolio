// src/app/page.tsx

import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to My Personal Website</h1>
      <p>Hi, I'm Matthew Gates, a Software Engineer.</p>
      <p>Feel free to explore my website and learn more about me and my work!</p>

      <div className={styles.grid}>
        <Link href="/about" className={styles.card}>About Me</Link>
        <Link href="/projects" className={styles.card}>Projects</Link>
        <Link href="/resume" className={styles.card}>Resume</Link>
        <Link href="/contact" className={styles.card}>Contact</Link>
      </div>
    </div>
  )
}
