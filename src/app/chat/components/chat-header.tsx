"use client"

import { ChevronDown, Tool02 } from "@untitledui/icons"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ChatHeaderProps {
  title: string
  onTitleClick?: () => void
}

export default function ChatHeader({ title, onTitleClick }: ChatHeaderProps) {
  return (
    <div className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="flex items-center justify-between px-6 py-2">
        {/* Left side - Topic title */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onTitleClick}
            className="flex items-center gap-2 text-foreground hover:bg-muted"
          >
            <span className="font-semibold text-base">{title}</span>
            <ChevronDown className="w-4 h-4" />
          </Button>
        </div>

        {/* Right side - Action button */}
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 hover:bg-muted"
            title="Ferramentas"
          >
            <Tool02 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

