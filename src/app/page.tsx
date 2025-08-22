import DashboardLayout from "@/components/dashboard-layout"

export default function HomePage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-foreground mb-6">Bem-vindo ao <span className="orbitron-title">GENIEX</span></h1>
          <div className="bg-card rounded-lg p-6 border border-border">
            <p className="text-muted-foreground">
              Esta é a página inicial do seu dashboard. O conteúdo das páginas será renderizado aqui.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
