import { getServerSession } from "next-auth"
import { options } from "./api/auth/[...nextauth]/options"
import styles from "./page.module.css"

export default async function Home() {
  const session = await getServerSession(options)

  return (
    <div className={styles.container}>
      <h2>Home Page</h2>
      <h4>Public access - no role required</h4>
    </div>
  )
}
