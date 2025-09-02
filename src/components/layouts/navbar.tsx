"use client"
import { 
  MessageSquare01, 
  LayoutLeft, 
  Bell01, 
  HelpCircle 
} from "@untitledui/icons"
import { SearchCommand } from "../search-command"

interface NavbarProps {
  sidebarCollapsed: boolean
  setSidebarCollapsed: () => void
  isMobile?: boolean
  sidebarOpen?: boolean
}

export default function Navbar({ sidebarCollapsed, setSidebarCollapsed, isMobile = false, sidebarOpen = false }: NavbarProps) {
  return (
    <header className="bg-background border-b border-border px-6 py-3 h-[58px]">
      <div className="flex items-center justify-between">
        {/* Left Side - Toggle Button */}
        <div className="flex items-center">
          <button
            onClick={setSidebarCollapsed}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label={isMobile ? (sidebarOpen ? "Fechar menu" : "Abrir menu") : (sidebarCollapsed ? "Expandir sidebar" : "Recolher sidebar")}
          >
            <LayoutLeft size={20} />
          </button>
        </div>

        {/* Center - Search */}
        <div className="flex-1 flex justify-center">
          <SearchCommand />
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <span className="text-lg">🔥</span>
            <span className="text-muted-foreground text-sm font-medium">6</span>
          </div>

          <button className="text-muted-foreground hover:text-foreground relative transition-colors">
            <MessageSquare01 size={20} />
          </button>

          <button className="text-muted-foreground hover:text-foreground relative transition-colors">
            <Bell01 size={20} />
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-destructive rounded-full flex items-center justify-center text-[10px] text-white font-medium">
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
