"use client"

import type React from "react"
import { useState } from "react"
import Sidebar from "./sidebar"
import Navbar from "./navbar"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [activeItem, setActiveItem] = useState("Cursos")
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="flex h-screen bg-secondary">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} sidebarCollapsed={sidebarCollapsed} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar sidebarCollapsed={sidebarCollapsed} setSidebarCollapsed={setSidebarCollapsed} />

        {/* Page Content */}
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
