// ToggleButton.jsx
"use client"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

export default function ToggleButton() {
  const [isOpen, setIsOpen] = useState(false)
  
  const handleClick = () => {
    const moreContent = document.getElementById('more-cases')
    if (moreContent) {
      if (moreContent.classList.contains('hidden')) {
        moreContent.classList.remove('hidden')
        setIsOpen(true)
      } else {
        moreContent.classList.add('hidden')
        setIsOpen(false)
      }
    }
  }
  
  return (
    <button 
      className="flex items-center mx-auto space-x-2 text-blue-600 hover:text-blue-800 focus:outline-none"
      onClick={handleClick}
    >
      {isOpen ? '閉じる' : 'もっと見る'} <ArrowRight className="h-5 w-5 ml-1" />
    </button>
  )
}

// UseCasesコンポーネント内で使用
<div className="mt-10 text-center">
  <ToggleButton />
</div>