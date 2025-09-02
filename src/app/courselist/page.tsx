import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, ChevronDown } from "lucide-react"
import DashboardLayout from "@/components/layouts/dashboard-layout"
import Image from "next/image"
import Link from "next/link"

export default function CoursesPage() {
  const allCategories = [
    { name: "All Courses", active: true },
    { name: "Autoconhecimento", active: false },
    { name: "Biologia", active: false },
    { name: "Educação Financeira", active: false },
    { name: "Empreendedorismo", active: false },
    { name: "Espanhol", active: false },
    { name: "Filosofia", active: false },
    { name: "Física", active: false },
    { name: "Geografia", active: false },
    { name: "História", active: false },
    { name: "Inglês", active: false },
    { name: "Inteligência Emocional", active: false },
    { name: "Literatura", active: false },
    { name: "Matemática", active: false },
    { name: "Português", active: false },
  ]

  const courses = [
    {
      id: 1,
      category: "TRÂNSITO",
      title: "Guia Certo: Preparatório para a CNH",
      description: "Prepare-se completamente para os exames teórico e prático da CNH. Aprenda as regras de trânsito, sinalizações, direção defensiva e tudo que você precisa para conquistar sua habilitação com segurança e confiança.",
      image: "/traffic-warning-sign-icon.png",
    },
    {
      id: 2,
      category: "BIOLOGIA",
      title: "Explorando o DNA",
      description:
        "Compreender a estrutura, função e aplicações do DNA na biologia moderna. Ideal para estudantes que estão se preparando para o ENEM ou querem aprofundar seus conhecimentos em genética.",
      image: "/exploring-dna.png",
    },
    {
      id: 3,
      category: "AUTOCONHECIMENTO",
      title: "Valores e Propósitos",
      description: "Explore a fundo o que te move. Neste curso, você descobrirá seus valores fundamentais.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl leading-normal font-bold text-foreground">Cursos</h1>
          </div>

          {/* Header description */}
          <div className="mb-8">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Explore cursos feitos para se adaptar ao seu ritmo de estudo. Acompanhe seu progresso, descubra novos
              conteúdos e mergulhe em jornadas personalizadas de aprendizado.
            </p>
          </div>

          {/* Search bar */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Buscar por curso, tema ou trilha..."
                className="pl-12 py-4 text-base rounded-lg"
              />
            </div>
          </div>

          {/* Category filters */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3 mb-4">
              {allCategories.map((category) => (
                <Button
                  key={category.name}
                  variant={category.active ? "default" : "secondary"}
                  size="default"
                  className={
                    !category.active 
                      ? "border border-border bg-muted hover:bg-muted/80 text-foreground" 
                      : ""
                  }
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Ver mais button */}
            <Button
              variant="ghost"
              className="text-primary hover:text-primary/80 p-0 h-auto font-normal"
            >
              Ver mais
              <ChevronDown className="ml-1 w-4 h-4" />
            </Button>
          </div>

 

          {/* Course cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Link key={course.id} href={`/course/${course.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="aspect-video bg-muted flex items-center justify-center p-4">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      width={400}
                      height={225}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-3">
                      <span className="text-muted-foreground text-xs font-medium tracking-wider">{course.category}</span>
                    </div>
                    <h3 className="text-foreground text-xl font-semibold mb-3">{course.title}</h3>
                    <div className="relative group">
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {course.description}
                      </p>
                      {/* Tooltip with full description */}
                      <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 transform translate-y-2 group-hover:translate-y-0">
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {course.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
