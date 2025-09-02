"use client"

import { useState } from "react"
import { Microphone01 as Mic, Send01 as Send } from "@untitledui/icons"
import { BookOpen, FileText, HelpCircle, Lightbulb } from "lucide-react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { useUser } from "../../../components/user-provider"
import Image from "next/image"
import ChatHeader from "./chat-header"
import ChatMessages from "./chat-messages"
import ChatInput from "./chat-input"

export default function ChatbotContent() {
  const [message, setMessage] = useState("")
  const [chatStarted, setChatStarted] = useState(false)
  const [currentTopic, setCurrentTopic] = useState("")
  const { user } = useUser()

  // Use the AI SDK useChat hook
  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
    onFinish: () => {
      // Chat has finished streaming
    },
    onError: (error) => {
      console.error('Chat error:', error)
    }
  })

  const firstName = user.name.split(" ")[0]

  const suggestions = [
    { text: "Explique sobre", icon: BookOpen },
    { text: "Criar resumo", icon: FileText },
    { text: "Gerar questão", icon: HelpCircle },
    { text: "Dicas de estudo", icon: Lightbulb },
  ]



  const handleSendMessage = (messageText: string = message) => {
    if (messageText.trim() && status === 'ready') {
      // Start chat if it's the first message
      if (!chatStarted) {
        setChatStarted(true)
        setCurrentTopic(messageText.trim().slice(0, 50) + (messageText.length > 50 ? "..." : ""))
      }
      
      // Send message using AI SDK
      sendMessage({ text: messageText.trim() })
      setMessage("")
    }
  }

  const handleMicClick = () => {
    console.log("Mic button clicked - voice recording functionality would go here")
  }

  // Show chat interface if chat has started or if there are messages
  if (chatStarted || messages.length > 0) {
    return (
      <div className="h-full bg-background flex flex-col">
        <ChatHeader 
          title={currentTopic || "Nova conversa"}
          onTitleClick={() => console.log("Topic selector clicked")}
        />
        <ChatMessages messages={messages} />
        <ChatInput 
          onSendMessage={handleSendMessage}
          placeholder="Pergunte qualquer coisa..."
          disabled={status !== 'ready'}
        />
        {error && (
          <div className="px-6 py-2 bg-red-50 border-t border-red-200">
            <p className="text-red-600 text-sm">
              Ocorreu um erro. Tente novamente.
            </p>
          </div>
        )}
      </div>
    )
  }

  // Show welcome screen
  return (
    <div className="h-full bg-background relative flex flex-col">
      {/* Main content */}
      <div className="flex flex-col items-center justify-center flex-1 p-6">
        <div className="w-full max-w-2xl mx-auto">
          {/* Chat icon */}
          <div className="text-center mb-6">
            <Image
              src="/chat-icon.png"
              alt="Chat Icon"
              width={150}
              height={150}
              className="mx-auto"
            />
          </div>
          
          <div className="text-center mb-4">
            <h1 className="text-3xl font-bold text-foreground">Olá, {firstName}</h1>
          </div>

          {/* Welcome text */}
          <div className="text-center mb-8">
            <p className="text-muted-foreground text-lg">
              Pergunte qualquer coisa ou escolha um exemplo abaixo para começar.
            </p>
          </div>

          {/* Input field */}
          <div className="relative mb-8">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Pergunte qualquer coisa"
              rows={3}
              disabled={status !== 'ready'}
              className="w-full bg-card border border-border rounded-xl px-6 py-4 pr-14 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
              onClick={message.trim() ? () => handleSendMessage() : handleMicClick}
              disabled={status !== 'ready'}
              className="absolute right-4 bottom-4 w-8 h-8 bg-primary hover:bg-primary/90 rounded-lg flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {message.trim() ? (
                <Send className="w-4 h-4 text-primary-foreground" />
              ) : (
                <Mic className="w-4 h-4 text-primary-foreground" />
              )}
            </button>
          </div>

          {/* Suggestion buttons */}
          <div className="grid grid-cols-2 gap-4">
            {suggestions.map((suggestion, index) => {
              const Icon = suggestion.icon
              return (
                <button
                  key={index}
                  onClick={() => handleSendMessage(suggestion.text)}
                  disabled={status !== 'ready'}
                  className="bg-card hover:bg-card/80 border border-border rounded-xl py-2 px-4 flex items-center justify-center gap-3 text-center transition-colors group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{suggestion.text}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Disclaimer - Fixed at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="text-center">
          <p className="text-muted-foreground text-xs">
            Inteligência Artificial Generativa pode cometer erros. Considere verificar informações importantes.
          </p>
        </div>
      </div>
    </div>
  )
}
