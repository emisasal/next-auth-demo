import Link from "next/link"
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.links}>
        <Link href={"/"} className={styles.link}>
          Home
        </Link>
        <Link href={"/api/auth/signin"} className={styles.link}>
          Login
        </Link>
        <Link href={"/api/auth/signout"} className={styles.link}>
          Logout
        </Link>
        <Link href={"/server"} className={styles.link}>
          Server
        </Link>
        <Link href={"/client"} className={styles.link}>
          Client
        </Link>
        <Link href={"/another"} className={styles.link}>
          Another
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
