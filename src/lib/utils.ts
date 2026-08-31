/** Format an ISO date string to a readable label, e.g. "June 2025". */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'month' in Intl.DateTimeFormat.prototype ? 'numeric' : undefined,
    month: 'long',
    day: undefined,
  })
}

/** Format just the year from an ISO date string. */
export function formatYear(iso: string): string {
  return new Date(iso).getFullYear().toString()
}

/** Clamp a number between min and max. */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

/** Truncate a string to maxLength, appending '…' if needed. */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str
  return str.slice(0, maxLength).trimEnd() + '…'
}
