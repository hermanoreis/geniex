import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ContinueStudying() {
  return (
    <Card className="p-6 relative">
      <div className="flex flex-col">
        {/* Image positioned at top-right with 8px distance */}
        <div className="absolute top-2 right-2 w-[116px] h-[116px]">
          <Image
            src="/traffic-warning-sign-icon.png"
            alt="Traffic warning sign"
            width={116}
            height={116}
            className="w-full h-full object-contain"
          />
        </div>
        
        <div className="mb-4 pr-[132px]"> {/* Add right padding to account for image */}
          <div>
            <h3 className="text-xs leading-normal uppercase text-muted-foreground mb-2">Continue de onde parou</h3>
            <p className="text-sm text-muted-foreground mb-1">Guia Certo: Preparatório para a CNH</p>
            <p className="text-sm text-muted-foreground">Unidade 2 – Sinalização de Trânsito</p>
          </div>
        </div>

        <div className="flex justify-between gap-4 flex-row items-end">
          <div className="flex-1 min-w-0">
            <h4 className="text-lg font-semibold text-foreground text-balance">
              Lição 2.3
              <br />
              Sinais de advertência – prevenção e atenção
            </h4>
          </div>
          <div className="flex-shrink-0">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Continue estudando</Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
