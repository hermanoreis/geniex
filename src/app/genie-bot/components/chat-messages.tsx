"use client"

import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Copy01 as Copy, ThumbsUp, ThumbsDown, RefreshCcw01 as RotateCcw } from "@untitledui/icons"
import { UIMessage } from "ai"

interface ChatMessagesProps {
  messages: UIMessage[]
}

export default function ChatMessages({ messages }: ChatMessagesProps) {
  const handleCopyMessage = (content: string) => {
    navigator.clipboard.writeText(content)
  }

  const formatTimestamp = (timestamp: Date) => {
    return timestamp.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    })
  }

  const getMessageContent = (message: UIMessage) => {
    // Extract text content from message parts
    return message.parts
      .filter(part => part.type === 'text')
      .map(part => part.text)
      .join('')
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-6 py-6 space-y-6">
        {messages.map((message) => {
          const content = getMessageContent(message)
          const timestamp = message.createdAt ? new Date(message.createdAt) : new Date()
          
          return (
            <div
              key={message.id}
              className={`flex gap-4 ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.role === "assistant" && (
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground text-sm font-semibold">G</span>
                  </div>
                </div>
              )}

              <div
                className={`flex flex-col max-w-[80%] ${
                  message.role === "user" ? "items-end" : "items-start"
                }`}
              >
                {/* Message bubble */}
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-foreground"
                  }`}
                >
                  <div className="whitespace-pre-wrap leading-relaxed">
                    {message.parts.map((part, index) => {
                      if (part.type === 'text') {
                        return <span key={index}>{part.text}</span>
                      }
                      // Handle other part types if needed (tool calls, etc.)
                      return null
                    })}
                  </div>
                </div>

                {/* Message actions and timestamp */}
                <div
                  className={`flex items-center gap-2 mt-2 ${
                    message.role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <span className="text-xs text-muted-foreground">
                    {formatTimestamp(timestamp)}
                  </span>

                  {message.role === "assistant" && (
                    <div className="flex items-center gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 hover:bg-muted"
                        onClick={() => handleCopyMessage(content)}
                        title="Copiar"
                      >
                        <Copy className="w-3 h-3" />
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 hover:bg-muted"
                        title="Gostei"
                      >
                        <ThumbsUp className="w-3 h-3" />
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 hover:bg-muted"
                        title="Não gostei"
                      >
                        <ThumbsDown className="w-3 h-3" />
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 hover:bg-muted"
                        title="Regenerar"
                      >
                        <RotateCcw className="w-3 h-3" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              {message.role === "user" && (
                <div className="flex-shrink-0">
                  <Avatar className="w-8 h-8">
                    <div className="w-full h-full bg-muted rounded-full flex items-center justify-center">
                      <span className="text-foreground text-sm font-medium">U</span>
                    </div>
                  </Avatar>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

