"use client"
import {
  Home,
  GraduationCap,
  CheckSquare,
  TrendingUp,
  BookOpen,
  Calendar,
  MessageCircle,
  FileText,
  PenTool,
} from "lucide-react"
import { NavUser } from "./nav-user" // Import NavUser component

interface SidebarProps {
  activeItem: string
  setActiveItem: (item: string) => void
  sidebarCollapsed: boolean
}

export default function Sidebar({ activeItem, setActiveItem, sidebarCollapsed }: SidebarProps) {
  const agendaItems = [
    { name: "Cursos", icon: GraduationCap },
    { name: "Tarefas", icon: CheckSquare }, // Added Tarefas button below Cursos with CheckSquare icon
    { name: "Trilhas", icon: TrendingUp },
    { name: "Biblioteca", icon: BookOpen },
    { name: "Cronograma", icon: Calendar },
    { name: "Genie Bot", icon: MessageCircle },
  ]

  const funcionalidadesItems = [
    { name: "Simulados", icon: FileText },
    { name: "Redação", icon: PenTool },
  ]

  const userData = {
    name: "Fernando Rodrigues",
    studentClass: "3ª Série B", // Changed from email to studentClass to represent student's class allocation
    image: undefined, // No image provided, will use initials
  }

  return (
    <div
      className={`${sidebarCollapsed ? "w-16" : "w-64"} bg-background border-r border-border flex flex-col transition-all duration-300`}
    >
      {/* Logo */}
      <div className={`${sidebarCollapsed ? "p-4" : "p-6"} pb-8`}>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-black font-bold text-sm">G</span>
          </div>
          {!sidebarCollapsed && <span className="text-foreground font-bold text-lg">GENIEX</span>}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 py-6">
        {/* Home Button */}
        <div className={`${sidebarCollapsed ? "px-2" : "px-6"} mb-6`}>
          <nav className="space-y-2">
            <button
              onClick={() => setActiveItem("Página Inicial")}
              className={`w-full flex items-center ${sidebarCollapsed ? "justify-center px-3" : "space-x-3 px-3"} py-2 rounded-lg text-left transition-colors ${
                activeItem === "Página Inicial"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
              title={sidebarCollapsed ? "Página Inicial" : undefined}
            >
              <Home size={18} />
              {!sidebarCollapsed && <span className="text-sm">Página Inicial</span>}
            </button>
          </nav>
        </div>

        {/* Agenda Section */}
        <div className={`${sidebarCollapsed ? "px-2" : "px-6"} mb-6`}>
          {!sidebarCollapsed && <h3 className="text-muted-foreground text-sm font-medium mb-4">Aprenda</h3>}
          <nav className="space-y-2">
            {agendaItems.map((item) => {
              const Icon = item.icon
              const isActive = activeItem === item.name
              return (
                <button
                  key={item.name}
                  onClick={() => setActiveItem(item.name)}
                  className={`w-full flex items-center ${sidebarCollapsed ? "justify-center px-3" : "space-x-3 px-3"} py-2 rounded-lg text-left transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
                  title={sidebarCollapsed ? item.name : undefined}
                >
                  <Icon size={18} />
                  {!sidebarCollapsed && <span className="text-sm">{item.name}</span>}
                </button>
              )
            })}
          </nav>
        </div>

        {/* Funcionalidades Section */}
        <div className={`${sidebarCollapsed ? "px-2" : "px-6"}`}>
          {!sidebarCollapsed && <h3 className="text-muted-foreground text-sm font-medium mb-4">Funcionalidades</h3>}
          <nav className="space-y-2">
            {funcionalidadesItems.map((item) => {
              const Icon = item.icon
              const isActive = activeItem === item.name
              return (
                <button
                  key={item.name}
                  onClick={() => setActiveItem(item.name)}
                  className={`w-full flex items-center ${sidebarCollapsed ? "justify-center px-3" : "space-x-3 px-3"} py-2 rounded-lg text-left transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
                  title={sidebarCollapsed ? item.name : undefined}
                >
                  <Icon size={18} />
                  {!sidebarCollapsed && <span className="text-sm">{item.name}</span>}
                </button>
              )
            })}
          </nav>
        </div>
      </div>

      {/* User Profile - Replaced with NavUser component */}
      <div className={`${sidebarCollapsed ? "p-4" : "p-6"} pt-8`}>
        <NavUser user={userData} collapsed={sidebarCollapsed} />
      </div>
    </div>
  )
}
