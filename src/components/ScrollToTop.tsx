'use client'

import { ArrowUp } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <button onClick={scrollToTop} className="fixed bottom-4 right-4 bg-(--primary) text-white p-2 rounded-full shadow-lg hover:bg-(--primary)/90 transition-colors cursor-pointer">
      <ArrowUp />
    </button>
  )
}