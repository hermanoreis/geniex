import DashboardLayout from "@/components/layouts/dashboard-layout"
import GenieContent from "./components/genie-content"
import ChatLayout from "./components/chat-layout"

export default function GeniePage() {
  return (
    <DashboardLayout>
      <ChatLayout>
        <GenieContent />
      </ChatLayout>
    </DashboardLayout>
  )
}
