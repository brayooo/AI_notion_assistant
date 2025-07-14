import { cn } from "@/lib/utils"
import { formatTimestamp } from "@/utils/chat"
import { User, Database } from "lucide-react"
import type { ChatMessage as ChatMessageType } from "@/types"

interface ChatMessageProps {
  message: ChatMessageType
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user"

  return (
    <div className={cn("flex gap-3 p-4", isUser ? "justify-end" : "justify-start")}>
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
          <Database className="h-4 w-4 text-blue-600" />
        </div>
      )}

      <div className={cn("max-w-[80%] space-y-1", isUser && "order-first")}>
        <div
          className={cn(
            "rounded-lg px-4 py-2 text-sm",
            isUser ? "bg-blue-600 text-white ml-auto" : "bg-gray-100 text-gray-900",
          )}
        >
          <div className="whitespace-pre-wrap">{message.content}</div>
        </div>
        <div className={cn("text-xs text-gray-500", isUser ? "text-right" : "text-left")}>
          {formatTimestamp(message.timestamp)}
        </div>
      </div>

      {isUser && (
        <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
          <User className="h-4 w-4 text-white" />
        </div>
      )}
    </div>
  )
}
