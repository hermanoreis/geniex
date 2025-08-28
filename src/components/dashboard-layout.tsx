"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Sidebar from "./sidebar"
import Navbar from "./navbar"
import { UserProvider } from "./user-provider"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  const [activeItem, setActiveItem] = useState("Página Inicial")
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Set active item based on current pathname
  useEffect(() => {
    switch (pathname) {
      case "/":
        setActiveItem("Página Inicial")
        break
      case "/courses":
        setActiveItem("Cursos")
        break
      case "/genie-bot":
        setActiveItem("Genie Bot")
        break
      case "/achievements":
        setActiveItem("Conquistas")
        break
      default:
        // Default to homepage if unknown route
        setActiveItem("Página Inicial")
    }
  }, [pathname])

  // Check if screen is mobile size
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1280
      setIsMobile(mobile)
      
      // Auto-collapse sidebar on mobile
      if (mobile) {
        setSidebarCollapsed(true)
        setSidebarOpen(false)
      }
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const toggleSidebar = () => {
    if (isMobile) {
      setSidebarOpen(!sidebarOpen)
    } else {
      setSidebarCollapsed(!sidebarCollapsed)
    }
  }

  const closeMobileSidebar = () => {
    if (isMobile) {
      setSidebarOpen(false)
    }
  }

  return (
    <UserProvider>
      <div className="flex h-screen bg-background">
        {/* Mobile Overlay */}
        {isMobile && sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={closeMobileSidebar}
          />
        )}

        {/* Sidebar */}
        <div
          className={`${
            isMobile
              ? `fixed left-0 top-0 h-full z-50 transform transition-transform duration-300 ${
                  sidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`
              : "relative"
          }`}
        >
          <Sidebar 
            activeItem={activeItem} 
            setActiveItem={setActiveItem} 
            sidebarCollapsed={isMobile ? false : sidebarCollapsed}
            isMobile={isMobile}
            onItemClick={closeMobileSidebar}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <Navbar 
            sidebarCollapsed={sidebarCollapsed} 
            setSidebarCollapsed={toggleSidebar}
            isMobile={isMobile}
            sidebarOpen={sidebarOpen}
          />

          {/* Page Content */}
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </div>
    </UserProvider>
  )
}
