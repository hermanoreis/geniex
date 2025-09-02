"use client"

import type React from "react"

import { ArrowLeft, MessageSquare01, Flag01, DotsHorizontal, AlarmClock, LayersThree01 } from "@untitledui/icons"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface LessonLayoutProps {
  children: React.ReactNode
  lessonTitle: string
  progress: number
  currentStep?: number
  totalSteps?: number
  onBack: () => void
  onChatbot: () => void
  onReportError: () => void
  onSettings: () => void
  onClock: () => void
  onLayers: () => void
}

export default function LessonLayout({
  children,
  lessonTitle,
  progress,
  currentStep,
  totalSteps,
  onBack,
  onChatbot,
  onReportError,
  onSettings,
  onClock,
  onLayers,
}: LessonLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-slate-800 text-white px-4 py-3 relative">
        <div className="flex items-center justify-between">
          {/* Left side - Back button and percentage pill */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={onBack} className="text-white hover:bg-slate-700 px-2">
              <ArrowLeft size={18} />
            </Button>
            <span className="text-xs font-medium text-slate-200 bg-slate-700 px-3 py-1 rounded-full">
              {Math.round(progress)}%
            </span>
          </div>

          {/* Center - Lesson title */}
          <h1 className="text-base font-medium text-center flex-1 mx-4">{lessonTitle}</h1>

          {/* Right side - Action buttons in specified order */}
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" onClick={onClock} className="text-white hover:bg-slate-700 px-2">
              <AlarmClock size={18} />
            </Button>
            <Button variant="ghost" size="sm" onClick={onLayers} className="text-white hover:bg-slate-700 px-2">
              <LayersThree01 size={18} />
            </Button>
            <Button variant="ghost" size="sm" onClick={onChatbot} className="text-white hover:bg-slate-700 px-2">
              <MessageSquare01 size={18} />
            </Button>
            <Button variant="ghost" size="sm" onClick={onReportError} className="text-white hover:bg-slate-700 px-2">
              <Flag01 size={18} />
            </Button>
            <Button variant="ghost" size="sm" onClick={onSettings} className="text-white hover:bg-slate-700 px-2">
              <DotsHorizontal size={18} />
            </Button>
          </div>
        </div>
        
        {/* Subtle progress bar - thin line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-700">
          <div 
            className="h-full bg-blue-400 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>
    </div>
  )
}
