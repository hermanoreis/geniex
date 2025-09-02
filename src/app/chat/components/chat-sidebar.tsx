"use client"

import { useState } from "react"
import { Plus, DotsHorizontal, ClockFastForward, AlignRight01 } from "@untitledui/icons"
import { Button } from "@/components/ui/button"

interface ChatHistory {
  id: string
  title: string
  timestamp: Date
}

interface ChatSidebarProps {
  isCollapsed: boolean
  onToggle: () => void
}

export default function ChatSidebar({ isCollapsed, onToggle }: ChatSidebarProps) {
  // Mock chat history data - replace with actual data from your backend
  const [chatHistory] = useState<ChatHistory[]>([
    { id: "1", title: "Ajuda com matemática", timestamp: new Date() },
    { id: "2", title: "Tarefas com a tabela periódica", timestamp: new Date(Date.now() - 86400000) },
    { id: "3", title: "Regras de verbos", timestamp: new Date(Date.now() - 172800000) },
    { id: "4", title: "História do Brasil em 1500", timestamp: new Date(Date.now() - 259200000) },
    { id: "5", title: "Ajuda com química orgânica", timestamp: new Date(Date.now() - 345600000) },
    { id: "6", title: "Física quântica", timestamp: new Date(Date.now() - 432000000) },
  ])

  const formatTimestamp = (timestamp: Date) => {
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - timestamp.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 24) {
      return "Hoje"
    } else if (diffInHours < 48) {
      return "Ontem"
    } else {
      const days = Math.floor(diffInHours / 24)
      return `${days} dias atrás`
    }
  }

  return (
    <div
      className={`${
        isCollapsed ? "w-12" : "w-64"
      } bg-card border-l border-border h-full flex flex-col transition-all duration-300 ease-in-out`}
    >
      {/* Header */}
      <div className={`flex items-center h-12 ${
        isCollapsed ? "justify-center px-2" : "justify-between px-4"
      }`}>
        {!isCollapsed && (
          <div className="flex items-center gap-3">
            <h2 className="font-semibold text-foreground">Chats recentes</h2>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="h-8 w-8 hover:bg-muted"
        >
          {isCollapsed ? (
            <ClockFastForward className="w-4 h-4" />
          ) : (
            <AlignRight01 className="w-4 h-4" />
          )}
        </Button>
      </div>

      {/* New Chat Button */}
      {!isCollapsed && (
        <div className="p-4">
          <Button className="w-full justify-start gap-2" variant="default">
            <Plus className="w-4 h-4" />
            Iniciar novo chat
          </Button>
        </div>
      )}

      {/* Collapsed state - show only plus icon */}
      {isCollapsed && (
        <div className="flex justify-center p-2">
          <Button
            size="icon"
            variant="default"
            className="w-10 h-10"
            title="Iniciar novo chat"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      )}

      {/* Chat History */}
      <div className="flex-1 overflow-y-auto">
        {!isCollapsed && (
          <div className="p-2">
            {chatHistory.map((chat) => (
              <div
                key={chat.id}
                className="group flex items-center gap-3 p-3 rounded-lg hover:bg-muted cursor-pointer transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {chat.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatTimestamp(chat.timestamp)}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <DotsHorizontal className="w-3 h-3" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
