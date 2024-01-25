import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { options } from "../api/auth/[...nextauth]/options"
import styles from "../page.module.css"

export default async function ServerPage() {
  const session = await getServerSession(options)

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server")
  }

  return (
    <h2 className={styles.container}>
      User {session?.user?.name} in Server page
    </h2>
  )
}

// Get session using getServerSession
// If user not logged is redirected to Login
// After login is redirected by callback back to Server page
