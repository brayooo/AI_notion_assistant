"use client"

import type { FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, ArrowRight, Bot } from "lucide-react"
import { ErrorDisplay } from "./error-display"
import { ExamplePrompts } from "./example-prompts"
import { PLACEHOLDER_TEXT } from "@/constants/prompts"

interface InputFormProps {
  userInput: string
  isLoading: boolean
  error: string
  onInputChange: (value: string) => void
  onSubmit: () => void
}

export function InputForm({ userInput, isLoading, error, onInputChange, onSubmit }: InputFormProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <Card className="shadow-lg border-purple-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ArrowRight className="h-5 w-5 text-purple-600" />
          Describe Your Notion Workspace
        </CardTitle>
        <CardDescription>
          Tell us what you want to track, organize, or manage in your Notion workspace. Be as detailed as possible.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            value={userInput}
            onChange={(e) => onInputChange(e.target.value)}
            placeholder={PLACEHOLDER_TEXT}
            className="min-h-[120px] resize-none border-purple-200 focus:border-purple-400"
            disabled={isLoading}
          />

          <ErrorDisplay error={error} />

          <Button
            type="submit"
            disabled={isLoading || !userInput.trim()}
            className="w-full bg-purple-600 hover:bg-purple-700"
            size="lg"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Instructions...
              </>
            ) : (
              <>
                <Bot className="mr-2 h-4 w-4" />
                Generate Notion Instructions
              </>
            )}
          </Button>
        </form>

        <ExamplePrompts onSelectPrompt={onInputChange} />
      </CardContent>
    </Card>
  )
}
