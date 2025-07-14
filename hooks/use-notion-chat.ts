"use client"

import { useState, useCallback } from "react"
import { NotionChatService } from "@/services/notion-chat"
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
      const response = await NotionChatService.queryNotion({
        query,
      })

      const assistantMessage = createAssistantMessage(
        response.response || "I couldn't find any information for your query.",
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
  }, [state.currentInput, state.messages])

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
