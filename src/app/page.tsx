import DashboardLayout from "@/components/layouts/dashboard-layout"
import ContinueStudying from "@/components/continue-studying"
import StudyStreak from "@/components/study-streak"
import MyTasks from "@/components/my-tasks"
import ReviewContent from "@/components/review-content"
import MyXray from "@/components/my-xray"

export default function HomePage() {
  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left column - spans ~66% width (8/12 columns equivalent) */}
            <div className="flex-1 lg:flex-[2] flex flex-col gap-6">
              <ContinueStudying />
              <MyTasks />
            </div>

            {/* Right column - spans ~33% width (4/12 columns equivalent) */}
            <div className="lg:flex-1 flex flex-col gap-6">
              <StudyStreak />
              <ReviewContent />
              <MyXray />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}