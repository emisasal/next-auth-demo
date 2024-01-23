// Without defined matcher this line applies next-auth to the entire project
export { default } from "next-auth/middleware"

// Applies next-auth only to matcher routes (can be regex)
export const config = { matcher: ["/another", "/dashboard"] }
