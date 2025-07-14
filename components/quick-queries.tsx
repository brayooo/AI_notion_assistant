"use client"

import { Badge } from "@/components/ui/badge"
import { EXAMPLE_QUERIES } from "@/constants/chat"

interface QuickQueriesProps {
  onSelectQuery: (query: string) => void
}

export function QuickQueries({ onSelectQuery }: QuickQueriesProps) {
  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-gray-700">Quick queries:</p>
      <div className="flex flex-wrap gap-2">
        {EXAMPLE_QUERIES.map((query, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="cursor-pointer hover:bg-blue-100 hover:text-blue-800 transition-colors"
            onClick={() => onSelectQuery(query)}
          >
            {query}
          </Badge>
        ))}
      </div>
    </div>
  )
}
