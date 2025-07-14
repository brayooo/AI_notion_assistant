"use client"

import { useEffect, useRef } from "react"
import { ChatMessage } from "./chat-message"
import { LoadingMessage } from "./loading-message"
import type { ChatMessage as ChatMessageType } from "@/types"

interface ChatMessagesProps {
  messages: ChatMessageType[]
  isLoading: boolean
}

export function ChatMessages({ messages, isLoading }: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isLoading])

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50">
      <div className="space-y-1">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isLoading && <LoadingMessage />}
      </div>
      <div ref={messagesEndRef} />
    </div>
  )
}
