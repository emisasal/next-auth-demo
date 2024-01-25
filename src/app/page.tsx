import { getServerSession } from "next-auth"
import { options } from "./api/auth/[...nextauth]/options"
import styles from "./page.module.css"

export default async function Home() {
  const session = await getServerSession(options)

  console.log("session", session)

  return (
    <div className={styles.container}>
      {session ? (
        <h2>Hello {session?.user?.name}!</h2>
      ) : (
        <h2>Not authorized!</h2>
      )}
    </div>
  )
}
