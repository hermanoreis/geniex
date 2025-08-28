import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import DashboardLayout from "@/components/dashboard-layout"
import {
  Trophy,
  Medal,
  Star,
  Flame,
  BookOpen,
  Target,
  Zap,
  Car,
  Shield,
  Heart,
  Leaf,
  AlertTriangle,
} from "lucide-react"

export default function AchievementsPage() {
  // Mock data for achievements
  const achievements = [
    {
      id: 1,
      title: "Sequência de Fogo",
      description: "Mantenha sua sequência de estudos por 7 dias consecutivos",
      category: "Sequência",
      level: "Bronze",
      icon: Flame,
      unlocked: true,
      progress: 100,
      unlockedDate: "2025-08-15",
    },
    {
      id: 2,
      title: "Mestre em Matemática",
      description: "Complete 50 questões de matemática com 80% de acerto",
      category: "Domínio de Matéria",
      level: "Prata",
      icon: Target,
      unlocked: true,
      progress: 100,
      unlockedDate: "2025-08-20",
    },
    {
      id: 3,
      title: "Explorador de Ciências",
      description: "Domine 3 tópicos diferentes em Ciências Naturais",
      category: "Domínio de Área",
      level: "Bronze",
      icon: BookOpen,
      unlocked: false,
      progress: 67,
      unlockedDate: null,
    },
    {
      id: 4,
      title: "Maratonista dos Estudos",
      description: "Estude por 30 dias consecutivos",
      category: "Sequência",
      level: "Ouro",
      icon: Flame,
      unlocked: false,
      progress: 43,
      unlockedDate: null,
    },
    {
      id: 5,
      title: "Simulado Campeão",
      description: "Complete 10 simulados com nota média acima de 85%",
      category: "Por Atividade",
      level: "Prata",
      icon: Zap,
      unlocked: false,
      progress: 20,
      unlockedDate: null,
    },
    {
      id: 6,
      title: "Evento Especial - Dezembro",
      description: "Participe do desafio de fim de ano",
      category: "Eventos Especiais",
      level: "Platina",
      icon: Star,
      unlocked: true,
      progress: 100,
      unlockedDate: "2024-12-31",
    },
    // CNH Course Achievements
    {
      id: 7,
      title: "Especialista em Legislação",
      description: "Complete todas as lições de Legislação de Trânsito com 90% de acerto",
      category: "CNH - Legislação",
      level: "Ouro",
      icon: BookOpen,
      unlocked: true,
      progress: 100,
      unlockedDate: "2025-08-25",
    },
    {
      id: 8,
      title: "Condutor Defensivo",
      description: "Domine todos os conceitos de Direção Defensiva",
      category: "CNH - Direção Defensiva",
      level: "Prata",
      icon: Shield,
      unlocked: true,
      progress: 100,
      unlockedDate: "2025-08-28",
    },
    {
      id: 9,
      title: "Socorrista Preparado",
      description: "Complete o módulo de Primeiros Socorros com nota máxima",
      category: "CNH - Primeiros Socorros",
      level: "Bronze",
      icon: Heart,
      unlocked: false,
      progress: 75,
      unlockedDate: null,
    },
    {
      id: 10,
      title: "Guardião do Meio Ambiente",
      description: "Finalize as lições sobre sustentabilidade e cidadania no trânsito",
      category: "CNH - Meio Ambiente",
      level: "Bronze",
      icon: Leaf,
      unlocked: false,
      progress: 60,
      unlockedDate: null,
    },
    {
      id: 11,
      title: "Mestre da Sinalização",
      description: "Identifique corretamente 100 placas de trânsito consecutivas",
      category: "CNH - Sinalização",
      level: "Ouro",
      icon: AlertTriangle,
      unlocked: false,
      progress: 45,
      unlockedDate: null,
    },
    {
      id: 12,
      title: "Mecânico Iniciante",
      description: "Aprenda sobre componentes básicos do veículo e manutenção",
      category: "CNH - Mecânica",
      level: "Bronze",
      icon: Car,
      unlocked: false,
      progress: 30,
      unlockedDate: null,
    },
    {
      id: 13,
      title: "Futuro Motorista",
      description: "Complete o simulado final da prova teórica com 95% de acerto",
      category: "CNH - Simulado",
      level: "Platina",
      icon: Trophy,
      unlocked: false,
      progress: 0,
      unlockedDate: null,
    },
    {
      id: 14,
      title: "Conhecedor das Infrações",
      description: "Memorize todas as categorias de infrações e suas penalidades",
      category: "CNH - Legislação",
      level: "Prata",
      icon: AlertTriangle,
      unlocked: false,
      progress: 85,
      unlockedDate: null,
    },
    {
      id: 15,
      title: "Especialista em Segurança",
      description: "Complete todos os módulos sobre fatores de risco na direção",
      category: "CNH - Direção Defensiva",
      level: "Ouro",
      icon: Shield,
      unlocked: false,
      progress: 55,
      unlockedDate: null,
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Bronze":
        return "bg-amber-600"
      case "Prata":
        return "bg-gray-400"
      case "Ouro":
        return "bg-yellow-500"
      case "Platina":
        return "bg-purple-500"
      default:
        return "bg-gray-400"
    }
  }



  const unlockedAchievements = achievements.filter((a) => a.unlocked)
  const inProgressAchievements = achievements.filter((a) => !a.unlocked)

  return (
    <DashboardLayout>
      <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          
          <h1 className="text-3xl font-bold text-foreground">Conquistas</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Acompanhe seu progresso e desbloqueie emblemas especiais conforme você avança em sua jornada de aprendizado.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{unlockedAchievements.length}</p>
                <p className="text-sm text-muted-foreground">Conquistas Desbloqueadas</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-100 rounded-lg">
                <Medal className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{unlockedAchievements.filter((a) => a.level === "Bronze").length}</p>
                <p className="text-sm text-muted-foreground">Medalhas Bronze</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Medal className="h-6 w-6 text-gray-400" />
              </div>
              <div>
                <p className="text-2xl font-bold">{unlockedAchievements.filter((a) => a.level === "Prata").length}</p>
                <p className="text-sm text-muted-foreground">Medalhas Prata</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Medal className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">{unlockedAchievements.filter((a) => a.level === "Ouro").length}</p>
                <p className="text-sm text-muted-foreground">Medalhas Ouro</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Unlocked Achievements */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Trophy className="h-6 w-6 text-primary" />
          Conquistas Desbloqueadas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {unlockedAchievements.map((achievement) => {
            const IconComponent = achievement.icon
            return (
              <Card
                key={achievement.id}
                className="relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{achievement.title}</CardTitle>
                        <Badge className={`${getLevelColor(achievement.level)} text-white text-xs`}>
                          {achievement.level}
                        </Badge>
                      </div>
                    </div>
                    <Trophy className="h-5 w-5 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Categoria: {achievement.category}</span>
                    <span className="text-primary font-medium">
                      Desbloqueado em {new Date(achievement.unlockedDate!).toLocaleDateString("pt-BR")}
                    </span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* In Progress Achievements */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Target className="h-6 w-6 text-muted-foreground" />
          Em Progresso
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inProgressAchievements.map((achievement) => {
            const IconComponent = achievement.icon
            return (
              <Card key={achievement.id} className="relative overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-muted rounded-lg">
                        <IconComponent className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-muted-foreground">{achievement.title}</CardTitle>
                        <Badge variant="outline" className="text-xs">
                          {achievement.level}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{achievement.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Progresso</span>
                      <span className="font-medium">{achievement.progress}%</span>
                    </div>
                    <Progress value={achievement.progress} className="h-2" />
                  </div>
                  <div className="mt-3 text-xs text-muted-foreground">Categoria: {achievement.category}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
      </div>
    </DashboardLayout>
  )
}
