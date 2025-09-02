"use client"

import { useState, KeyboardEvent } from "react"
import { Send01 as Send, Microphone01 as Mic } from "@untitledui/icons"
import { Button } from "@/components/ui/button"

interface ChatInputProps {
  onSendMessage: (message: string) => void
  disabled?: boolean
  placeholder?: string
}

export default function ChatInput({ 
  onSendMessage, 
  disabled = false, 
  placeholder = "Pergunte qualquer coisa..." 
}: ChatInputProps) {
  const [message, setMessage] = useState("")

  const handleSendMessage = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message.trim())
      setMessage("")
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleMicClick = () => {
    console.log("Mic button clicked - voice recording functionality would go here")
  }

  return (
    <div className="border-t border-border bg-background/80 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={disabled}
            rows={1}
            className="w-full bg-card border border-border rounded-2xl px-4 py-3 pr-14 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none min-h-[48px] max-h-32 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              fieldSizing: "content"
            }}
          />
          
          <div className="absolute right-2 bottom-2 flex items-center gap-1">
            {/* Mic button - only show when no text */}
            {!message.trim() && (
              <Button
                type="button"
                size="icon"
                variant="ghost"
                onClick={handleMicClick}
                disabled={disabled}
                className="h-8 w-8 hover:bg-muted disabled:opacity-50"
                title="Gravar áudio"
              >
                <Mic className="w-4 h-4" />
              </Button>
            )}
            
            {/* Send button - only show when there's text */}
            {message.trim() && (
              <Button
                type="button"
                size="icon"
                onClick={handleSendMessage}
                disabled={disabled || !message.trim()}
                className="h-8 w-8 bg-primary hover:bg-primary/90 disabled:opacity-50"
                title="Enviar mensagem"
              >
                <Send className="w-4 h-4 text-primary-foreground" />
              </Button>
            )}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-3">
          <p className="text-muted-foreground text-xs">
            Inteligência Artificial Generativa pode cometer erros. Considere verificar informações importantes.
          </p>
        </div>
      </div>
    </div>
  )
}

