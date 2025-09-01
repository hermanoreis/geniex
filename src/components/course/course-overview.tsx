"use client"

import Image from "next/image"

interface CourseOverviewProps {
  title: string
  description: string
  duration: string
  difficulty: string
  subject: string
  imageUrl: string
  onEnroll: () => void
}

export default function CourseOverview({
  title,
  description,
  duration,
  difficulty,
  subject,
  imageUrl,
  onEnroll,
}: CourseOverviewProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
      <div className="lg:col-span-2">
        <h1 className="text-3xl font-bold text-foreground mb-4">{title}</h1>
        <p className="text-muted-foreground text-lg mb-6">{description}</p>

        <div className="flex items-center gap-6 mb-6">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm text-muted-foreground">{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19l-7-7 7-7" />
            </svg>
            <span className="text-sm text-muted-foreground">{difficulty}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <span className="text-sm text-muted-foreground">{subject}</span>
          </div>
        </div>

        <button
          onClick={onEnroll}
          className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          Inscrever-se
        </button>
      </div>

      <div className="lg:col-span-1">
        <div className="bg-card rounded-lg border border-border">
          <div className="aspect-video bg-muted flex items-center justify-center p-4 rounded-lg">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={`${title} Illustration`}
              width={400}
              height={225}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}