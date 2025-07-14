export const WELCOME_MESSAGE =
  "Hi! I'm your Notion assistant. Ask me anything about your databases, pages, or information stored in Notion."

export const EXAMPLE_QUERIES = [
  "Show me my recent tasks",
  "What meetings do I have this week?",
  "Find my project notes about the mobile app",
  "List all incomplete tasks in my work database",
  "Show me my reading list progress",
] as const

export const PLACEHOLDER_TEXT = "Ask me anything about your Notion workspace..."

export const N8N_WEBHOOK_URL = "https://n8n-service-7lm8.onrender.com/webhook/send_message"
