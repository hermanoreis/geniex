import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function MyXray() {
  return (
    <Card className="p-6 relative">
      {/* Image positioned at top-right with 8px distance */}
      <div className="absolute top-2 right-2 w-[58px] h-[58px]">
        <Image
          src="/xray-chart-analytics-icon.png"
          alt="Analytics X-ray icon"
          width={58}
          height={58}
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="pr-[74px]"> {/* Add right padding to account for image */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xs leading-normal uppercase text-muted-foreground">Meu raio-x</h3>
          <p className="text-sm text-muted-foreground">Informações sobre sua evolução nos estudos</p>
        </div>
      </div>
    </Card>
  )
}
