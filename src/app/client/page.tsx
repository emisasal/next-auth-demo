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

  // Optional message if no access
  // if (session?.user.role !== "admin"
  //     && session?.user.role !== "manager") {
  //     return <h1 className="text-5xl">Access Denied</h1>
  // }

  if (!session?.user) return

  return (
    <section className={styles.container}>
      <h2>User {session?.user?.name} in Client page</h2>
      <h4>Only manager and admin can access</h4>
    </section>
  )
}

// Get session using useSession for client components
// If user not logged redirects to Login
// After login is redirected by callback back to Client page
