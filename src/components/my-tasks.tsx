import { Card } from "@/components/ui/card"
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import Image from "next/image"
import { DataTable } from "@/components/tasks/data-table"
import { columns } from "@/components/tasks/columns"
import { mockTasks } from "@/types/task"

export default function MyTasks() {
  // Filter tasks based on the selected tab (for now showing all tasks)
  const tasks = mockTasks

  return (
    <Card className="p-6 h-full relative">
      {/* Image positioned at top-right with 8px distance */}
      <div className="absolute top-2 right-2 w-[58px] h-[58px]">
        <Image
          src="/task-checklist-clipboard-icon.png"
          alt="Tasks clipboard icon"
          width={58}
          height={58}
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="flex flex-col h-full">
        <div className="mb-4 pr-[74px]"> {/* Add right padding to account for image */}
          <div>
            <h3 className="text-xs leading-normal uppercase text-muted-foreground mb-3">Minha tarefas</h3>
            <Menubar className="w-fit">
              <MenubarMenu>
                <MenubarTrigger className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Tarefas de hoje
                </MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Importantes</MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Criadas por mim</MenubarTrigger>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>

        <div className="flex-1 flex flex-col min-h-0">
          <div className="flex-1 overflow-auto">
            <DataTable columns={columns} data={tasks} />
          </div>
        </div>
      </div>
    </Card>
  )
}
