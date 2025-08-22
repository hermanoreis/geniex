"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { LogOut, Settings, User, Sun, Moon } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

interface NavUserProps {
  user: {
    name: string
    studentClass: string
    image?: string
  }
  collapsed?: boolean
}

export function NavUser({ user, collapsed = false }: NavUserProps) {
  const { theme, setTheme } = useTheme()

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={`${collapsed ? "h-8 w-8 p-0" : "h-auto w-full justify-start p-2"} hover:bg-sidebar-accent`}
        >
          <Avatar className={`${collapsed ? "h-6 w-6" : "h-8 w-8"}`}>
            <AvatarImage src={user.image || "/placeholder.svg"} alt={user.name} />
            <AvatarFallback className="bg-[#555be7] text-white text-xs">{initials}</AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="ml-3 flex-1 text-left">
              <p className="text-sidebar-foreground text-sm font-medium">{user.name}</p>
              <p className="text-muted-foreground text-xs">{user.studentClass}</p>
            </div>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 bg-popover border-border text-popover-foreground"
        align={collapsed ? "center" : "end"}
        side={collapsed ? "right" : "top"}
      >
        <DropdownMenuLabel className="text-muted-foreground">Minha Conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:bg-accent focus:bg-accent">
          <User className="mr-2 h-4 w-4" />
          <span>Perfil</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-accent focus:bg-accent">
          <Settings className="mr-2 h-4 w-4" />
          <span>Configurações</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="hover:bg-accent focus:bg-accent"
          onClick={() => setTheme(theme === "navy" ? "light" : "navy")}
        >
          {theme === "navy" ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
          <span>{theme === "navy" ? "Modo Claro" : "Modo Navy"}</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:bg-accent focus:bg-accent text-destructive">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
