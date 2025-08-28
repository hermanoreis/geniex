"use client"

import { createContext, useContext, type ReactNode } from "react"

interface User {
  name: string
  studentClass: string
  image?: string
}

interface UserContextType {
  user: User
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const user: User = {
    name: "Hermano Reis",
    studentClass: "3ª Série B",
    image: undefined,
  }

  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}
