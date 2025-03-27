function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' }).format(value)
}

function formatToSlug(value: string): string {
  return value.replace(/\s+/g, '-').trim()
}

export { formatCurrency, formatToSlug }
