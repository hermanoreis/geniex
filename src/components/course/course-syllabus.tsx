"use client"

interface Lesson {
  id: string
  title: string
  isCompleted?: boolean
  isNext?: boolean
}

interface Unit {
  id: string
  title: string
  description: string
  lessons: Lesson[]
  hasTest?: boolean
  testUnlocked?: boolean
}

interface CourseSyllabusProps {
  totalLessons: number
  totalUnits: number
  units: Unit[]
  onLessonClick: (lessonId: string) => void
  onStartUnit: (unitId: string) => void
}

export default function CourseSyllabus({
  totalLessons,
  totalUnits,
  units,
  onLessonClick,
  onStartUnit,
}: CourseSyllabusProps) {
  // Find the next available lesson across all units
  const findNextAvailableLesson = () => {
    for (const unit of units) {
      for (const lesson of unit.lessons) {
        const isCompleted = lesson.isCompleted || lesson.title === "Introdução ao DNA"
        if (!isCompleted) {
          return lesson.id
        }
      }
    }
    return null
  }

  const nextLessonId = findNextAvailableLesson()

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-foreground mb-4">Programa de Estudos</h2>
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          <span className="text-sm text-muted-foreground">{totalLessons} lições</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          <span className="text-sm text-muted-foreground">{totalUnits} unidades</span>
        </div>
      </div>

      {/* Units */}
      <div className="space-y-8">
        {units.map((unit, unitIndex) => (
          <div key={unit.id} className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-primary mb-1">UNIDADE {unitIndex + 1}</h3>
              <h4 className="text-lg font-semibold text-foreground mb-2">{unit.title}</h4>
              <p className="text-sm text-muted-foreground">{unit.description}</p>
            </div>

            {/* Lessons */}
            <div className="space-y-3 ml-0">
              {unit.lessons.map((lesson) => {
                const isCompleted = lesson.isCompleted || lesson.title === "Introdução ao DNA"
                const isNext = lesson.id === nextLessonId && !isCompleted
                
                return (
                  <div
                    key={lesson.id}
                    className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        isCompleted 
                          ? "bg-green-100 dark:bg-green-900/30" 
                          : isNext 
                          ? "bg-primary/10" 
                          : "bg-muted"
                      }`}>
                        {isCompleted ? (
                          <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          <svg className={`w-4 h-4 ${isNext ? "text-primary" : "text-muted-foreground"}`} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        )}
                      </div>
                      <span className="text-foreground font-medium">{lesson.title}</span>
                    </div>
                    <button
                      onClick={() => onLessonClick(lesson.id)}
                      className={`font-medium text-sm transition-all duration-200 ${
                        isCompleted
                          ? "border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary px-3 py-1 rounded-md"
                          : isNext
                          ? "bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-1 rounded-md"
                          : "border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary px-3 py-1 rounded-md"
                      }`}
                    >
                      {isCompleted ? "Revisar" : "Iniciar"}
                    </button>
                  </div>
                )
              })}

              {/* Unit Test */}
              {unit.hasTest && (
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg border border-border/50 transition-colors opacity-60">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="text-muted-foreground font-medium">Teste da Unidade {unitIndex + 1}</span>
                      {!unit.testUnlocked && (
                        <p className="text-xs text-muted-foreground">
                          Faltam {unit.lessons.length} lições para desbloquear o teste da unidade.
                        </p>
                      )}
                    </div>
                  </div>
                  <button className="border border-border/50 text-muted-foreground hover:bg-accent px-3 py-1 rounded-md font-medium text-sm cursor-not-allowed" disabled>
                    Iniciar
                  </button>
                </div>
              )}
            </div>

            <button className="text-primary hover:text-primary/80 font-medium text-sm">
              Ocultar detalhes da unidade ↑
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}