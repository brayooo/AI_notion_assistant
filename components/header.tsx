import { Bot } from "lucide-react"

export function Header() {
  return (
    <div className="text-center space-y-4 pt-8">
      <div className="flex items-center justify-center gap-2">
        <Bot className="h-8 w-8 text-purple-600" />
        <h1 className="text-4xl font-bold text-gray-900">Notion Setup Generator</h1>
      </div>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Describe what you want to organize in Notion using natural language, and get detailed setup instructions.
      </p>
      <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
        <Bot className="h-4 w-4" />
        <span>Powered by Hugging Face AI Models</span>
      </div>
    </div>
  )
}
