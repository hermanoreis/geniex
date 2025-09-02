"use client"

import LessonLayout from "../../../components/layouts/lesson-layout"
import { useRouter } from "next/navigation"

interface LessonPageProps {
  params: {
    id: string
  }
}

export default function LessonPage({ params }: LessonPageProps) {
  const router = useRouter()

  // Mock lesson data - in a real app, this would come from an API or database
  const getLessonData = (lessonId: string) => {
    const lessons: Record<string, { title: string; content: { title: string; description: string; objectives: string[] } }> = {
      "lesson-1-1": {
        title: "Introdução ao DNA",
        content: {
          title: "O que é DNA?",
          description: "O DNA (Ácido Desoxirribonucleico) é uma molécula que contém as instruções genéticas usadas no desenvolvimento e funcionamento de todos os organismos vivos conhecidos.",
          objectives: [
            "Compreender a estrutura básica do DNA",
            "Identificar os componentes do DNA",
            "Explicar a função do DNA nos organismos",
            "Relacionar DNA com hereditariedade"
          ]
        }
      },
      "lesson-1-2": {
        title: "Nucleotídeos e Bases Nitrogenadas",
        content: {
          title: "Nucleotídeos e Bases Nitrogenadas",
          description: "Os nucleotídeos são as unidades básicas do DNA, compostos por uma base nitrogenada, um açúcar desoxirribose e um grupo fosfato.",
          objectives: [
            "Identificar os componentes de um nucleotídeo",
            "Compreender as diferentes bases nitrogenadas",
            "Explicar como os nucleotídeos se ligam",
            "Relacionar a sequência de bases com a informação genética"
          ]
        }
      },
      // Add more lessons as needed
    }
    
    return lessons[lessonId] || {
      title: "Lição não encontrada",
      content: {
        title: "Lição não encontrada",
        description: "Esta lição ainda não foi configurada.",
        objectives: []
      }
    }
  }

  const lessonData = {
    id: params.id,
    title: getLessonData(params.id).title,
    progress: 35, // 35% complete
    content: getLessonData(params.id).content
  }

  const handleBack = () => {
    // Navigate back to the course page
    // For now, we'll use a fixed course ID, but this should come from the lesson data
    router.push('/course/1')
  }

  const handleChatbot = () => {
    console.log("Opening chatbot...")
    // TODO: Implement chatbot functionality
  }

  const handleReportError = () => {
    console.log("Opening error report...")
    // TODO: Implement error reporting functionality
  }

  const handleSettings = () => {
    console.log("Opening settings...")
    // TODO: Implement settings functionality
  }

  return (
    <LessonLayout
      lessonTitle={lessonData.title}
      progress={lessonData.progress}
      onBack={handleBack}
      onChatbot={handleChatbot}
      onReportError={handleReportError}
      onSettings={handleSettings}
    >
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">{lessonData.content.title}</h2>

            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground mb-4">
                {lessonData.content.description}
              </p>

              <p className="text-muted-foreground mb-4">
                Esta lição irá abordar os conceitos fundamentais sobre o tópico, incluindo sua
                importância na biologia e aplicações práticas.
              </p>

              {lessonData.content.objectives.length > 0 && (
                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-6">
                  <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Objetivos da Lição</h3>
                  <ul className="text-blue-800 dark:text-blue-200 space-y-1">
                    {lessonData.content.objectives.map((objective, index) => (
                      <li key={index}>• {objective}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </LessonLayout>
  )
}
