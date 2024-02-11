"use client"

import { ChangeEvent, FormEvent, useState } from "react"
import { signIn } from "next-auth/react"

import styles from "./login.module.css"

const Login = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await signIn("credentials", {
      username: formValues.username,
      password: formValues.password,
      callbackUrl: "/",
    })
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <label>
        {"Username:"}
        <input type="text" name="username" onChange={handleChange} />
      </label>
      <label>
        {"Password:"}
        <input type="password" name="password" onChange={handleChange} />
      </label>
      <button type="submit">{"Submit"}</button>
    </form>
  )
}

export default Login
