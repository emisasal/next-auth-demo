"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import styles from "../page.module.css"

export default function ClientPage() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/client")
    },
  })

  return <h2 className={styles.container}>Client page</h2>
}

// Get session using useSession
// If user not logged is redirected to Login
// After login is redirected by callback back to Client page
