"use client"

import { useState } from "react"
import ChatSidebar from "./chat-sidebar"

interface ChatLayoutProps {
  children: React.ReactNode
}

export default function ChatLayout({ children }: ChatLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true)

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  return (
    <div className="h-full flex">
      {/* Main Chat Content */}
      <div className="flex-1 flex flex-col">
        {children}
      </div>

      {/* Chat Sidebar */}
      <ChatSidebar 
        isCollapsed={sidebarCollapsed}
        onToggle={toggleSidebar}
      />
    </div>
  )
}
