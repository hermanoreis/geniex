"use client"

import type React from "react"
import { useState } from "react"


interface CourseDetailsProps {
  aboutContent?: React.ReactNode
  detailsContent?: React.ReactNode
  skillsContent?: React.ReactNode
  prerequisitesContent?: React.ReactNode
}

export default function CourseDetails({
  aboutContent,
  detailsContent,
  skillsContent,
  prerequisitesContent,
}: CourseDetailsProps) {
  const [activeTab, setActiveTab] = useState("Sobre o curso")

  const tabs = [
    { id: "Sobre o curso", label: "Sobre o curso", content: aboutContent },
    { id: "Detalhes", label: "Detalhes", content: detailsContent },
    { id: "Habilidades", label: "Habilidades", content: skillsContent },
    { id: "Pré-requisitos", label: "Pré-requisitos", content: prerequisitesContent },
  ]

  return (
    <div className="mb-8">
      {/* Course Tabs */}
      <div className="mb-8">
        <div className="bg-muted rounded-lg overflow-hidden w-full flex">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              className={`px-4 py-3 font-medium w-full flex items-center justify-center border-0 transition-colors cursor-pointer outline-none focus:outline-none ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted"
              } ${
                index === 0 ? "rounded-l-lg rounded-r-none" : ""
              } ${
                index === tabs.length - 1 ? "rounded-r-lg rounded-l-none" : ""
              } ${
                index > 0 && index < tabs.length - 1 ? "rounded-none" : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="rounded-lg border border-border p-6 bg-card mt-4">
        {tabs.find((tab) => tab.id === activeTab)?.content || (
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">{activeTab}</h2>
            <p className="text-muted-foreground">Conteúdo da aba {activeTab} será adicionado aqui.</p>
          </div>
        )}
      </div>
    </div>
  )
}
