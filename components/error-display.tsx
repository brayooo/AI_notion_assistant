interface ErrorDisplayProps {
  error: string
}

export function ErrorDisplay({ error }: ErrorDisplayProps) {
  if (!error) return null

  return <div className="text-red-600 text-sm bg-red-50 p-3 rounded-md border border-red-200">{error}</div>
}
