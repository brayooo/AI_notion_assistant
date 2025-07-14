import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb } from "lucide-react"

interface InstructionsDisplayProps {
  instructions: string
}

export function InstructionsDisplay({ instructions }: InstructionsDisplayProps) {
  if (!instructions) return null

  return (
    <Card className="shadow-lg border-green-200">
      <CardHeader>
        <CardTitle className="text-green-700 flex items-center gap-2">
          <Lightbulb className="h-5 w-5" />
          Your Notion Setup Instructions
        </CardTitle>
        <CardDescription>Follow these step-by-step instructions to set up your Notion workspace.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="prose prose-sm max-w-none">
          <div className="whitespace-pre-wrap text-gray-800 leading-relaxed bg-green-50 p-4 rounded-lg border border-green-200">
            {instructions}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
