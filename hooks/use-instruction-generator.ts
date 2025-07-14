"use client"

import { useState } from "react"
import { InstructionGeneratorService } from "@/services/instruction-generator"
import type { InstructionGeneratorState } from "@/types"

export function useInstructionGenerator() {
  const [state, setState] = useState<InstructionGeneratorState>({
    userInput: "",
    instructions: "",
    isLoading: false,
    error: "",
  })

  const setUserInput = (userInput: string) => {
    setState((prev) => ({ ...prev, userInput, error: "" }))
  }

  const generateInstructions = async () => {
    if (!state.userInput.trim()) {
      setState((prev) => ({
        ...prev,
        error: "Please enter a description of what you want in your Notion workspace.",
      }))
      return
    }

    setState((prev) => ({
      ...prev,
      isLoading: true,
      error: "",
      instructions: "",
    }))

    try {
      const response = await InstructionGeneratorService.generateInstructions({
        userInput: state.userInput.trim(),
      })

      setState((prev) => ({
        ...prev,
        instructions: response.instructions || "",
        isLoading: false,
      }))
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error instanceof Error ? error.message : "An unexpected error occurred",
        isLoading: false,
      }))
    }
  }

  return {
    ...state,
    setUserInput,
    generateInstructions,
  }
}
