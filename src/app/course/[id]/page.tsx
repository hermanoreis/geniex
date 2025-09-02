"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import CourseOverview from "@/components/course/course-overview"
import CourseDetails from "@/components/course/course-details"
import CourseSyllabus from "@/components/course/course-syllabus"
import DashboardLayout from "@/components/layouts/dashboard-layout"

export default function CoursePage({ params }: { params: { id: string } }) {
  const router = useRouter()

  const course = {
    id: params.id,
    title: "Explorando o DNA",
    description:
      "Compreender a estrutura, função e aplicações do DNA na biologia moderna. Ideal para estudantes que estão se preparando para o ENEM ou querem aprofundar seus conhecimentos em genética.",
    duration: "6 horas",
    difficulty: "Difícil",
    subject: "Biologia",
    totalLessons: 17,
    totalUnits: 3,
    image: "/exploring-dna.png",
  }

  // Sample units data for the syllabus
  const units = [
    {
      id: "unit-1",
      title: "Estrutura do DNA",
      description: "Aprenda sobre a estrutura básica do DNA e seus componentes fundamentais.",
      lessons: [
        { id: "lesson-1-1", title: "Introdução ao DNA", isCompleted: false },
        { id: "lesson-1-2", title: "Nucleotídeos e Bases Nitrogenadas", isCompleted: false },
        { id: "lesson-1-3", title: "A Dupla Hélice", isCompleted: false },
        { id: "lesson-1-4", title: "Cromossomos e Genes", isCompleted: false },
        { id: "lesson-1-5", title: "DNA vs RNA", isCompleted: false },
      ],
      hasTest: true,
      testUnlocked: false,
    },
    {
      id: "unit-2",
      title: "Replicação do DNA",
      description: "Entenda como o DNA se replica e os mecanismos envolvidos nesse processo.",
      lessons: [
        { id: "lesson-2-1", title: "Processo de Replicação", isCompleted: false },
        { id: "lesson-2-2", title: "Enzimas Envolvidas", isCompleted: false },
        { id: "lesson-2-3", title: "Direção da Replicação", isCompleted: false },
        { id: "lesson-2-4", title: "Correção de Erros", isCompleted: false },
        { id: "lesson-2-5", title: "Telômeros", isCompleted: false },
        { id: "lesson-2-6", title: "Mutações", isCompleted: false },
      ],
      hasTest: true,
      testUnlocked: false,
    },
    {
      id: "unit-3",
      title: "Aplicações do DNA",
      description: "Explore as aplicações práticas do conhecimento sobre DNA na medicina e biotecnologia.",
      lessons: [
        { id: "lesson-3-1", title: "DNA Forense", isCompleted: false },
        { id: "lesson-3-2", title: "Terapia Gênica", isCompleted: false },
        { id: "lesson-3-3", title: "Clonagem", isCompleted: false },
        { id: "lesson-3-4", title: "Organismos Geneticamente Modificados", isCompleted: false },
        { id: "lesson-3-5", title: "Sequenciamento do Genoma", isCompleted: false },
        { id: "lesson-3-6", title: "CRISPR e Edição Genética", isCompleted: false },
      ],
      hasTest: true,
      testUnlocked: false,
    },
  ]

  const handleBackToCourses = () => {
    router.push("/courselist")
  }

  const handleEnroll = () => {
    console.log("Enrolling in course:", course.id)
    // TODO: Implement enrollment logic
  }

  const handleLessonClick = (lessonId: string) => {
    console.log("Starting lesson:", lessonId)
    router.push(`/lesson/${lessonId}`)
  }

  const handleStartUnit = (unitId: string) => {
    console.log("Starting unit:", unitId)
    // TODO: Navigate to first lesson of the unit
  }

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={handleBackToCourses}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para Cursos
          </button>

          <CourseOverview
            title={course.title}
            description={course.description}
            duration={course.duration}
            difficulty={course.difficulty}
            subject={course.subject}
            imageUrl={course.image}
            onEnroll={handleEnroll}
          />
          <CourseDetails />
          <CourseSyllabus
            totalLessons={course.totalLessons}
            totalUnits={course.totalUnits}
            units={units}
            onLessonClick={handleLessonClick}
            onStartUnit={handleStartUnit}
          />
        </div>
      </div>
    </DashboardLayout>
  )
}
