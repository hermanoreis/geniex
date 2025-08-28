export type TaskType = "licao" | "leitura" | "videoaula" | "projeto" | "atividade"

export type TaskCreator = {
  type: "platform" | "ai" | "student" | "teacher" | "coordinator"
  name: string
}

export type Task = {
  id: string
  name: string
  type: TaskType
  deadline: string
  createdBy: TaskCreator
  isCompleted: boolean
  content?: string
}

export const mockTasks: Task[] = [
  {
    id: "1",
    name: "Conceitos e Definições de Trânsito",
    type: "licao",
    deadline: "2025-08-25", // Atrasada (3 dias)
    createdBy: { type: "teacher", name: "Instrutor Carlos Silva" },
    isCompleted: false,
  },
  {
    id: "2", 
    name: "Leitura: Código de Trânsito Brasileiro - Capítulo III",
    type: "leitura",
    deadline: "", // Sem prazo - GenieX
    createdBy: { type: "platform", name: "GenieX" },
    isCompleted: false,
  },
  {
    id: "3",
    name: "Videoaula: Direção Defensiva - Princípios e Técnicas",
    type: "videoaula", 
    deadline: "", // Sem prazo - GenieX
    createdBy: { type: "ai", name: "GenieX" },
    isCompleted: true,
  },
  {
    id: "4",
    name: "Projeto: Simulado de Prova Teórica",
    type: "projeto",
    deadline: "2025-09-05", // Futura
    createdBy: { type: "coordinator", name: "Coord. Maria Santos" },
    isCompleted: false,
  },
  {
    id: "5",
    name: "Atividade: Identificação de Placas de Sinalização",
    type: "atividade",
    deadline: "2025-08-30", // Futura (2 dias)
    createdBy: { type: "student", name: "Você" },
    isCompleted: false,
  },
  {
    id: "6",
    name: "Normas de Circulação e Conduta",
    type: "licao",
    deadline: "2025-08-26", // Atrasada (2 dias)
    createdBy: { type: "teacher", name: "Instrutor Carlos Silva" },
    isCompleted: false,
  },
  {
    id: "7",
    name: "Leitura: Manual de Primeiros Socorros no Trânsito",
    type: "leitura",
    deadline: "", // Sem prazo - GenieX
    createdBy: { type: "platform", name: "GenieX" },
    isCompleted: false,
  },
  {
    id: "8",
    name: "Videoaula: Sinalização Luminosa e Gestos",
    type: "videoaula",
    deadline: "", // Sem prazo - GenieX
    createdBy: { type: "ai", name: "GenieX" },
    isCompleted: false,
  },
]
