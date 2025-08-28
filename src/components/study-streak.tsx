import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function StudyStreak() {
  return (
    <Card className="p-6 relative">
      {/* Image positioned at top-right with 8px distance */}
      <div className="absolute top-2 right-2 w-[58px] h-[58px]">
        <Image 
          src="/fire-flame-streak-icon.png" 
          alt="Streak fire icon" 
          width={58}
          height={58}
          className="w-full h-full object-contain" 
        />
      </div>
      
      <div className="pr-[74px]"> {/* Add right padding to account for image */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xs leading-normal uppercase text-muted-foreground">Sequência de uso</h3>
          <p className="text-sm text-muted-foreground">Você está em uma sequência de</p>
          <h4 className="text-2xl font-bold text-foreground">6 dias</h4>
          <p className="text-sm text-muted-foreground font-medium">Continue assim!</p>
        </div>
      </div>
    </Card>
  )
}
