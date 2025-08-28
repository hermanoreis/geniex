"use client"

import { useState } from "react"
import { Mic, BookOpen, FileText, HelpCircle, Lightbulb, Send } from "lucide-react"
import { useUser } from "../../../components/user-provider"
import Image from "next/image"

export default function GenieContent() {
  const [message, setMessage] = useState("")
  const { user } = useUser()

  const firstName = user.name.split(" ")[0]

  const suggestions = [
    { text: "Explique sobre", icon: BookOpen },
    { text: "Criar resumo", icon: FileText },
    { text: "Gerar questão", icon: HelpCircle },
    { text: "Dicas de estudo", icon: Lightbulb },
  ]

  const handleSuggestionClick = (suggestion: string) => {
    setMessage(suggestion)
  }

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Sending message:", message)
      // Here you would typically send the message to your chat API
      setMessage("")
    }
  }

  const handleMicClick = () => {
    console.log("Mic button clicked - voice recording functionality would go here")
  }

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
              className="w-full bg-card border border-border rounded-xl px-6 py-4 pr-14 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            />
            <button
              onClick={message.trim() ? handleSendMessage : handleMicClick}
              className="absolute right-4 bottom-4 w-8 h-8 bg-primary hover:bg-primary/90 rounded-lg flex items-center justify-center transition-colors"
            >
              {message.trim() ? (
                <Send size={16} className="text-primary-foreground" />
              ) : (
                <Mic size={16} className="text-primary-foreground" />
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
                  onClick={() => handleSuggestionClick(suggestion.text)}
                  className="bg-card hover:bg-card/80 border border-border rounded-xl py-2 px-4 flex items-center justify-center gap-3 text-center transition-colors group"
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
