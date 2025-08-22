"use client"
import { 
  MessageSquare01, 
  LayoutLeft, 
  SearchLg, 
  Bell01, 
  HelpCircle 
} from "@untitledui/icons"

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
          <div className="relative">
            <SearchLg size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Pesquisar"
              className="bg-accent border border-border rounded-lg pl-10 pr-16 py-1.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary w-80 h-9"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground text-xs">
              ⌘ K
            </span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <span className="text-lg">🔥</span>
            <span className="text-muted-foreground text-sm font-medium">0</span>
          </div>

          <button className="text-muted-foreground hover:text-foreground relative transition-colors">
            <MessageSquare01 size={20} />
          </button>

          <button className="text-muted-foreground hover:text-foreground relative transition-colors">
            <Bell01 size={20} />
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
