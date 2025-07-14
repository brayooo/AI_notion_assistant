"use client"

import { ChatHeader } from "@/components/chat-header"
import { ChatMessages } from "@/components/chat-messages"
import { ChatInput } from "@/components/chat-input"
import { useNotionChat } from "@/hooks/use-notion-chat"

export default function NotionChatAssistant() {
  const { messages, currentInput, isLoading, error, setCurrentInput, sendMessage, clearChat } = useNotionChat()

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <ChatHeader onClearChat={clearChat} />
      <ChatMessages messages={messages} isLoading={isLoading} />
      <ChatInput
        currentInput={currentInput}
        isLoading={isLoading}
        error={error}
        onInputChange={setCurrentInput}
        onSendMessage={sendMessage}
      />
    </div>
  )
}
