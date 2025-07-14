export interface ChatMessage {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

export interface NotionQueryRequest {
  query: string
}

export interface NotionQueryResponse {
  response?: string
  error?: string
}

export interface ChatState {
  messages: ChatMessage[]
  currentInput: string
  isLoading: boolean
  error: string
}
