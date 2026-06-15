import type { Variants } from "motion/react"

export const defaultViewport = { once: true, margin: "0px 0px -80px 0px" } as const

/* CONTAINERS */
export const motionContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 }}
}

/* ITEMS */
export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

export const fadeDownItem: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

export const fadeLeftItem: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

export const fadeRightItem: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}