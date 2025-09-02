import DashboardLayout from "@/components/layouts/dashboard-layout"
import ChatbotContent from "./components/chatbot-content"
import ChatLayout from "./components/chat-layout"

export default function ChatPage() {
  return (
    <DashboardLayout>
      <ChatLayout>
        <ChatbotContent />
      </ChatLayout>
    </DashboardLayout>
  )
}
