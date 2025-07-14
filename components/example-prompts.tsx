"use client"

import { Badge } from "@/components/ui/badge"
import { EXAMPLE_PROMPTS } from "@/constants/prompts"

interface ExamplePromptsProps {
  onSelectPrompt: (prompt: string) => void
}

export function ExamplePrompts({ onSelectPrompt }: ExamplePromptsProps) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-gray-700">Need inspiration? Try these examples:</p>
      <div className="flex flex-wrap gap-2">
        {EXAMPLE_PROMPTS.map((prompt, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="cursor-pointer hover:bg-purple-100 hover:text-purple-800 transition-colors"
            onClick={() => onSelectPrompt(prompt)}
          >
            {prompt}
          </Badge>
        ))}
      </div>
    </div>
  )
}
