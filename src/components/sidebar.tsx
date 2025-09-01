"use client"
import {
  HomeSmile,
  FileCheck02,
  GraduationHat02,
  Route,
  BookClosed,
  Calendar,
  MessageSquare01,
  List,
  Edit04,
  Trophy01,
} from "@untitledui/icons"
import { NavUser } from "./nav-user" // Import NavUser component
import { useRouter } from "next/navigation"
import { useUser } from "./user-provider"

interface SidebarProps {
  activeItem: string
  setActiveItem: (item: string) => void
  sidebarCollapsed: boolean
  isMobile?: boolean
  onItemClick?: () => void
}

export default function Sidebar({ activeItem, setActiveItem, sidebarCollapsed, isMobile = false, onItemClick }: SidebarProps) {
  const router = useRouter()
  const { user } = useUser()
  
  const agendaItems = [
    { name: "Cursos", icon: GraduationHat02, path: "/courselist" },
    { name: "Trilhas", icon: Route, path: "/" },
    { name: "Biblioteca", icon: BookClosed, path: "/" },
    { name: "Cronograma", icon: Calendar, path: "/" },
    { name: "Genie Bot", icon: MessageSquare01, path: "/genie-bot" },
  ]

  const funcionalidadesItems = [
    { name: "Simulados", icon: FileCheck02 },
    { name: "Redação", icon: Edit04 },
  ]

  const handleItemClick = (itemName: string, path?: string) => {
    setActiveItem(itemName)
    if (path) {
      router.push(path)
    }
    if (onItemClick) {
      onItemClick()
    }
  }

  return (
    <div
      className={`${
        isMobile ? "w-64" : sidebarCollapsed ? "w-16" : "w-64"
      } bg-background border-r border-border flex flex-col transition-all duration-300 h-full`}
    >
      {/* Logo */}
      <div className={`${(sidebarCollapsed && !isMobile) ? "p-4" : "p-6"} pb-8`}>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-black font-bold text-sm">G</span>
          </div>
          {(!sidebarCollapsed || isMobile) && <span className="text-foreground font-bold text-lg orbitron-logo">GENIEX</span>}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 py-6">
        {/* Home Button */}
        <div className={`${(sidebarCollapsed && !isMobile) ? "px-2" : "px-6"} mb-6`}>
          <nav className="space-y-2">
            <button
              onClick={() => handleItemClick("Página Inicial", "/")}
              className={`w-full flex items-center ${(sidebarCollapsed && !isMobile) ? "justify-center px-3" : "space-x-3 px-3"} py-2 rounded-lg text-left transition-colors ${
                activeItem === "Página Inicial"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
              title={(sidebarCollapsed && !isMobile) ? "Página Inicial" : undefined}
            >
              <HomeSmile size={18} />
              {(!sidebarCollapsed || isMobile) && <span className="text-sm">Página Inicial</span>}
            </button>
            <button
              onClick={() => handleItemClick("Tarefas", "/")}
              className={`w-full flex items-center ${(sidebarCollapsed && !isMobile) ? "justify-center px-3" : "space-x-3 px-3"} py-2 rounded-lg text-left transition-colors ${
                activeItem === "Tarefas"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
              title={(sidebarCollapsed && !isMobile) ? "Tarefas" : undefined}
            >
              <List size={18} />
              {(!sidebarCollapsed || isMobile) && <span className="text-sm">Tarefas</span>}
            </button>
            <button
              onClick={() => handleItemClick("Conquistas", "/achievements")}
              className={`w-full flex items-center ${(sidebarCollapsed && !isMobile) ? "justify-center px-3" : "space-x-3 px-3"} py-2 rounded-lg text-left transition-colors ${
                activeItem === "Conquistas"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
              title={(sidebarCollapsed && !isMobile) ? "Conquistas" : undefined}
            >
              <Trophy01 size={18} />
              {(!sidebarCollapsed || isMobile) && <span className="text-sm">Conquistas</span>}
            </button>
          </nav>
        </div>

        {/* Agenda Section */}
        <div className={`${(sidebarCollapsed && !isMobile) ? "px-2" : "px-6"} mb-6`}>
          {(!sidebarCollapsed || isMobile) && <h3 className="text-muted-foreground text-sm font-medium mb-4">Aprenda</h3>}
          <nav className="space-y-2">
            {agendaItems.map((item) => {
              const Icon = item.icon
              const isActive = activeItem === item.name
              return (
                <button
                  key={item.name}
                  onClick={() => handleItemClick(item.name, item.path)}
                  className={`w-full flex items-center ${(sidebarCollapsed && !isMobile) ? "justify-center px-3" : "space-x-3 px-3"} py-2 rounded-lg text-left transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
                  title={(sidebarCollapsed && !isMobile) ? item.name : undefined}
                >
                  <Icon size={18} />
                  {(!sidebarCollapsed || isMobile) && <span className="text-sm">{item.name}</span>}
                </button>
              )
            })}
          </nav>
        </div>

        {/* Funcionalidades Section */}
        <div className={`${(sidebarCollapsed && !isMobile) ? "px-2" : "px-6"}`}>
          {(!sidebarCollapsed || isMobile) && <h3 className="text-muted-foreground text-sm font-medium mb-4">Funcionalidades</h3>}
          <nav className="space-y-2">
            {funcionalidadesItems.map((item) => {
              const Icon = item.icon
              const isActive = activeItem === item.name
              return (
                <button
                  key={item.name}
                  onClick={() => handleItemClick(item.name)}
                  className={`w-full flex items-center ${(sidebarCollapsed && !isMobile) ? "justify-center px-3" : "space-x-3 px-3"} py-2 rounded-lg text-left transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
                  title={(sidebarCollapsed && !isMobile) ? item.name : undefined}
                >
                  <Icon size={18} />
                  {(!sidebarCollapsed || isMobile) && <span className="text-sm">{item.name}</span>}
                </button>
              )
            })}
          </nav>
        </div>
      </div>

      {/* User Profile - Replaced with NavUser component */}
      <div className={`${(sidebarCollapsed && !isMobile) ? "p-4" : "p-6"} pt-8`}>
        <NavUser user={user} collapsed={sidebarCollapsed && !isMobile} />
      </div>
    </div>
  )
}
