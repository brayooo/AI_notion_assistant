import type { GenerateInstructionsRequest, GenerateInstructionsResponse } from "@/types"

export class InstructionGeneratorService {
  static async generateInstructions(request: GenerateInstructionsRequest): Promise<GenerateInstructionsResponse> {
    try {
      const response = await fetch("/api/generate-instructions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate instructions")
      }

      return data
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : "An unexpected error occurred")
    }
  }
}
