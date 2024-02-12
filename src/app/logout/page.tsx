"use client"

import { signOut } from "next-auth/react"
import { useEffect } from "react"

export default function LogoutPage() {
  useEffect(() => {
    signOut({ callbackUrl: "/" })
  }, [])

  return
}

// The button for Logout redirects to /api/auth/signout route
// The page for logOut triggers the signOut method that removes the user cookies
// The calbackUrl redirects to home after logging out
