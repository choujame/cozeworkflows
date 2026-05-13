import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function FadeIn({ children, className = '', delay = 0, direction = 'up' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 36 : direction === 'down' ? -36 : 0,
      x: direction === 'left' ? 36 : direction === 'right' ? -36 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
