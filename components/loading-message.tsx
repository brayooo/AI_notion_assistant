import { Loader2, Database } from "lucide-react"

export function LoadingMessage() {
  return (
    <div className="flex gap-3 p-4 justify-start">
      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
        <Database className="h-4 w-4 text-blue-600" />
      </div>
      <div className="max-w-[80%]">
        <div className="bg-gray-100 text-gray-900 rounded-lg px-4 py-2 text-sm">
          <div className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Searching your Notion workspace...</span>
          </div>
        </div>
      </div>
    </div>
  )
}
