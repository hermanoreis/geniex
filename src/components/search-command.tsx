"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command"
import {
  BookOpen,
  Home,
  Settings,
  User,
  Calculator,
  Calendar,
} from "lucide-react"

export function SearchCommand() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="relative w-80 h-9 bg-accent border border-border rounded-lg pl-10 pr-16 text-sm text-muted-foreground hover:border-primary transition-colors"
      >
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </span>
        <span className="absolute left-10 top-1/2 transform -translate-y-1/2">
          Pesquisar...
        </span>
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs">
          ⌘ K
        </span>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Digite um comando ou pesquise..." />
        <CommandList>
          <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
          
          <CommandGroup heading="Navegação">
            <CommandItem
              onSelect={() => runCommand(() => router.push("/"))}
            >
              <Home className="mr-2 h-4 w-4" />
              <span>Início</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/courselist"))}
            >
              <BookOpen className="mr-2 h-4 w-4" />
              <span>Cursos</span>
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="Configurações">
            <CommandItem
              onSelect={() => runCommand(() => router.push("/profile"))}
            >
              <User className="mr-2 h-4 w-4" />
              <span>Perfil</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/settings"))}
            >
              <Settings className="mr-2 h-4 w-4" />
              <span>Configurações</span>
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="Ferramentas">
            <CommandItem
              onSelect={() => runCommand(() => {
                // Open calculator functionality
                console.log("Calculadora aberta")
              })}
            >
              <Calculator className="mr-2 h-4 w-4" />
              <span>Calculadora</span>
              <CommandShortcut>⌘C</CommandShortcut>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => {
                // Open calendar functionality
                console.log("Calendário aberto")
              })}
            >
              <Calendar className="mr-2 h-4 w-4" />
              <span>Calendário</span>
              <CommandShortcut>⌘D</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
