"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Task } from "@/types/task"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "name",
    header: "Tarefa",
    cell: ({ row }) => {
      const task = row.original
      return (
        <div className="flex flex-col">
          <span className={`font-medium ${task.isCompleted ? 'line-through text-muted-foreground' : ''}`}>
            {task.name}
          </span>
          <span className="text-xs text-muted-foreground capitalize">
            {task.type}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "deadline",
    header: "Prazo",
    cell: ({ row }) => {
      const deadlineValue = row.getValue("deadline") as string
      
      // Se não há prazo definido, mostrar "-"
      if (!deadlineValue || deadlineValue === "") {
        return (
          <div className="text-sm text-muted-foreground">
            -
          </div>
        )
      }
      
      const deadline = new Date(deadlineValue)
      const today = new Date()
      const isOverdue = deadline < today && !row.original.isCompleted
      const isToday = deadline.toDateString() === today.toDateString()
      
      return (
        <div className={`text-sm ${
          isOverdue ? 'text-red-600 font-medium' : 
          isToday ? 'text-orange-600 font-medium' : 
          'text-foreground'
        }`}>
          {format(deadline, "dd/MM/yyyy", { locale: ptBR })}
          {isOverdue && <span className="ml-1 text-xs">(Atrasado)</span>}
          {isToday && <span className="ml-1 text-xs">(Hoje)</span>}
        </div>
      )
    },
  },
  {
    accessorKey: "createdBy",
    header: "Criada por",
    cell: ({ row }) => {
      const creator = row.getValue("createdBy") as Task["createdBy"]
      
      const getCreatorDisplay = () => {
        switch (creator.type) {
          case "student":
            return "Você"
          case "platform":
          case "ai":
            return "GenieX"
          default:
            return creator.name
        }
      }
      
      const getCreatorStyle = () => {
        switch (creator.type) {
          case "ai":
          case "platform":
            return "text-blue-600"
          case "student":
            return "text-purple-600"
          default:
            return "text-foreground"
        }
      }
      
      return (
        <span className={`text-sm ${getCreatorStyle()}`}>
          {getCreatorDisplay()}
        </span>
      )
    },
  },
  {
    id: "actions",
    header: "Ação",
    cell: ({ row }) => {
      const task = row.original
      
      const getButtonText = () => {
        switch (task.type) {
          case "licao":
            return "Estudar"
          case "leitura":
            return "Ler"
          case "videoaula":
            return "Assistir"
          case "projeto":
            return "Ver Projeto"
          case "atividade":
            return "Fazer Atividade"
          default:
            return "Ver Tarefa"
        }
      }
      
      return (
        <Button 
          variant={task.isCompleted ? "ghost" : "outline"}
          size="sm"
          onClick={() => {
            // Here you would navigate to the task content
            console.log(`Navigate to task ${task.id}`)
          }}
          disabled={task.isCompleted}
        >
          {task.isCompleted ? "Concluído" : getButtonText()}
        </Button>
      )
    },
    enableSorting: false,
  },
]
