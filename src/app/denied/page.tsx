import Link from "next/link"
import styles from "../page.module.css"

export default async function DeniedPage() {
  return (
    <section className={styles.container}>
      <h2>Access Denied!</h2>
      <h4>
        You are logged in but you do not hace access permission to view this
        page
      </h4>
      <Link href={"/"}>Back to home</Link>
    </section>
  )
}
