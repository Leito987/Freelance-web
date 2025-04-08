/**
 * Formats a date string into a localized French format
 * @param dateString - Date string in YYYY-MM-DD format
 * @returns Formatted date string in French locale
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  
  return new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}
