import { Inter, JetBrains_Mono } from 'next/font/google'

/** Primary sans font from `next/font/google` with CSS variable `--font-sans`. */
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
})

/** Monospace font from `next/font/google` with CSS variable `--font-mono`. */
export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono'
})
