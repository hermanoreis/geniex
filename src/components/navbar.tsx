"use client"
import { Search, Bell, MessageCircle, HelpCircle, Menu, ChevronLeft } from "lucide-react"

interface NavbarProps {
  sidebarCollapsed: boolean
  setSidebarCollapsed: (collapsed: boolean) => void
}

export default function Navbar({ sidebarCollapsed, setSidebarCollapsed }: NavbarProps) {
  return (
    <header className="bg-background border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left Side - Toggle Button */}
        <div className="flex items-center">
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {sidebarCollapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        {/* Center - Search */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Pesquisar"
              className="bg-accent border border-border rounded-lg pl-10 pr-16 py-2 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary w-80"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground text-xs">
              ⌘ K
            </span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1">
            <span className="text-lg">🔥</span>
            <span className="text-muted-foreground text-sm font-medium">0</span>
          </div>

          <button className="text-muted-foreground hover:text-foreground relative transition-colors">
            <MessageCircle size={20} />
          </button>

          <button className="text-muted-foreground hover:text-foreground relative transition-colors">
            <Bell size={20} />
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-destructive rounded-full flex items-center justify-center text-[10px] text-destructive-foreground font-medium">
              2
            </span>
          </button>

          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <HelpCircle size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
