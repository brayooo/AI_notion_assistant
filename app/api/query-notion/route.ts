import type { NotionQueryRequest } from "@/types"
import { N8N_WEBHOOK_URL } from "@/constants/chat"

export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { query }: NotionQueryRequest = await req.json()

    const response = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_message: query,
      }),
    })

    if (!response.ok) {
      throw new Error(`N8N request failed: ${response.statusText}`)
    }

    const data = await response.json()

    return Response.json({
      response: data.reply || "No response from Notion workspace",
    })
  } catch (error) {
    console.error("Error querying Notion via n8n:", error)
    return Response.json({ error: "Failed to query your Notion workspace" }, { status: 500 })
  }
}
