import DashboardLayout from "@/components/dashboard-layout"

export default function CursosPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-white mb-6">Cursos</h1>
          <div className="bg-[#171a27] rounded-lg p-6 border border-[#2a2f37]">
            <p className="text-[#a0a7b1]">Aqui você encontrará todos os seus cursos disponíveis.</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
