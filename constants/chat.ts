export const WELCOME_MESSAGE =
  "Hi! I'm your Notion habit assistant. Tell me all about your day and I will store the information in Notion."

export const EXAMPLE_QUERIES = [
  "Show me my recent tasks",
  "What meetings do I have this week?",
  "Find my project notes",
  "List my incomplete tasks",
  "Show my reading progress",
] as const

export const PLACEHOLDER_TEXT = "Tell me anything about your day..."

export const N8N_WEBHOOK_URL = "https://n8n-service-7lm8.onrender.com/webhook/send_message"
