import React from "react"
import { Link } from "react-router-dom"

export const MemoryCard = ({ theme, presentation, content }) => {
  return (
    <div className="memory-card-container">
      <p>{theme}</p>
      <p>{presentation}</p>
      <p>{content}</p>
    </div>
  )
}
