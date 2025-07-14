"use client"

import type { FormEvent, KeyboardEvent } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"
import { ErrorDisplay } from "./error-display"
import { QuickQueries } from "./quick-queries"
import { PLACEHOLDER_TEXT } from "@/constants/chat"

interface ChatInputProps {
  currentInput: string
  isLoading: boolean
  error: string
  onInputChange: (value: string) => void
  onSendMessage: () => void
}

export function ChatInput({ currentInput, isLoading, error, onInputChange, onSendMessage }: ChatInputProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSendMessage()
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      onSendMessage()
    }
  }

  return (
    <div className="border-t border-gray-200 bg-white p-4 space-y-3">
      <ErrorDisplay error={error} />

      <form onSubmit={handleSubmit} className="flex gap-2">
        <Textarea
          value={currentInput}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={PLACEHOLDER_TEXT}
          className="min-h-[60px] max-h-[120px] resize-none flex-1"
          disabled={isLoading}
        />
        <Button
          type="submit"
          disabled={isLoading || !currentInput.trim()}
          className="self-end bg-blue-600 hover:bg-blue-700"
          size="lg"
        >
          <Send className="h-4 w-4" />
        </Button>
      </form>

      <QuickQueries onSelectQuery={onInputChange} />
    </div>
  )
}
