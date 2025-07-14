import type { NotionQueryRequest, NotionQueryResponse } from "@/types"

export class NotionChatService {
  static async queryNotion(request: NotionQueryRequest): Promise<NotionQueryResponse> {
    try {
      const response = await fetch("/api/query-notion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to query Notion")
      }

      return data
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : "An unexpected error occurred")
    }
  }
}
