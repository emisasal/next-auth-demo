import styles from "../page.module.css"

export default function AnotherPage() {
  return (
    <section className={styles.container}>
      <h2>Another page</h2>
      <h4>Only manager and admin can access</h4>
    </section>
  )
}

// This page is protected by middleware
