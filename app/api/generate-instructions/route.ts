import { huggingface } from "@ai-sdk/huggingface"
import { generateText } from "ai"
import type { GenerateInstructionsRequest } from "@/types"

export const maxDuration = 30

const SYSTEM_PROMPT = `You are a Notion expert who converts natural language descriptions into clear, actionable Notion setup instructions. 

Your task is to:
1. Analyze the user's natural language description of what they want in their Notion workspace
2. Convert it into step-by-step instructions for setting up their Notion workspace
3. Include specific database properties, templates, and organizational structures
4. Format the response as clear, numbered instructions
5. Include relevant Notion features like databases, templates, formulas, relations, etc.

Format your response with:
- Clear section headers
- Numbered step-by-step instructions
- Specific property types and configurations
- Template suggestions where applicable
- Tips for organization and workflow optimization`

export async function POST(req: Request) {
  try {
    const { userInput }: GenerateInstructionsRequest = await req.json()

    const { text } = await generateText({
      model: huggingface("microsoft/DialoGPT-large"),
      system: SYSTEM_PROMPT,
      prompt: `Convert this natural language description into detailed Notion setup instructions:

"${userInput}"

Please provide comprehensive, actionable instructions that someone can follow to set up their Notion workspace exactly as described.`,
    })

    return Response.json({ instructions: text })
  } catch (error) {
    console.error("Error generating instructions:", error)
    return Response.json({ error: "Failed to generate instructions" }, { status: 500 })
  }
}
