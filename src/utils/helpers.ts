import { twMerge } from 'tailwind-merge'
import { ClassValue, clsx } from 'clsx'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' }).format(value)
}

function formatToSlug(value: string): string {
  return value.replace(/\s+/g, '-').trim()
}

function isValidPhone(value: string): boolean {
  return /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(value)
}

export { formatCurrency, formatToSlug, isValidPhone, cn }
