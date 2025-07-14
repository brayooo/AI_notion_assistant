"use client"

import { useState, useCallback } from "react"
import { createUserMessage, createAssistantMessage } from "@/utils/chat"
import { WELCOME_MESSAGE } from "@/constants/chat"
import type { ChatState } from "@/types"

export function useNotionChat() {
  const [state, setState] = useState<ChatState>({
    messages: [createAssistantMessage(WELCOME_MESSAGE)],
    currentInput: "",
    isLoading: false,
    error: "",
  })

  const setCurrentInput = useCallback((input: string) => {
    setState((prev) => ({ ...prev, currentInput: input, error: "" }))
  }, [])

  const sendMessage = useCallback(async () => {
    const query = state.currentInput.trim()

    if (!query) {
      setState((prev) => ({
        ...prev,
        error: "Please enter a question about your Notion workspace.",
      }))
      return
    }

    const userMessage = createUserMessage(query)

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      currentInput: "",
      isLoading: true,
      error: "",
    }))

    try {
      const response = await fetch("/api/query-notion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to query Notion")
      }

      const assistantMessage = createAssistantMessage(
        data.response || "I couldn't find any information for your query.",
      )

      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, assistantMessage],
        isLoading: false,
      }))
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error instanceof Error ? error.message : "An unexpected error occurred",
        isLoading: false,
      }))
    }
  }, [state.currentInput])

  const clearChat = useCallback(() => {
    setState({
      messages: [createAssistantMessage(WELCOME_MESSAGE)],
      currentInput: "",
      isLoading: false,
      error: "",
    })
  }, [])

  return {
    ...state,
    setCurrentInput,
    sendMessage,
    clearChat,
  }
}
