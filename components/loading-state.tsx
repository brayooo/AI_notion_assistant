import { Card, CardContent } from "@/components/ui/card"
import { Loader2, Bot } from "lucide-react"

interface LoadingStateProps {
  isLoading: boolean
}

export function LoadingState({ isLoading }: LoadingStateProps) {
  if (!isLoading) return null

  return (
    <Card className="shadow-lg border-purple-200">
      <CardContent className="flex items-center justify-center py-12">
        <div className="text-center space-y-4">
          <div className="relative">
            <Bot className="h-8 w-8 text-purple-600 mx-auto" />
            <Loader2 className="h-4 w-4 animate-spin text-purple-400 absolute -top-1 -right-1" />
          </div>
          <p className="text-gray-600">Analyzing your requirements with Hugging Face AI...</p>
          <p className="text-sm text-gray-500">This may take a moment as we process your request</p>
        </div>
      </CardContent>
    </Card>
  )
}
