"use client"

import { Button } from "@/components/ui/button"
import { Database, RotateCcw } from "lucide-react"

interface ChatHeaderProps {
  onClearChat: () => void
}

export function ChatHeader({ onClearChat }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Database className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Notion habit assistant</h1>
          <p className="text-sm text-gray-500">Tell me about your day and I will help to save the information</p>
        </div>
      </div>
      <Button variant="outline" size="sm" onClick={onClearChat}>
        <RotateCcw className="h-4 w-4" />
        Clear
      </Button>
    </div>
  )
}
