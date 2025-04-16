import { Card, CardContent } from "@/components/ui/card"
import type { ReactNode } from "react"

interface ProcessStepProps {
  day: string
  title: string
  description: string
  icon: ReactNode
}

export default function ProcessStep({ day, title, description, icon }: ProcessStepProps) {
  return (
    <Card className="transition-all hover:shadow-md">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-2">{icon}</div>
          <div className="bg-blue-100 text-[#2196F3] px-3 py-1 rounded-full text-sm font-medium mb-3">{day}</div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
