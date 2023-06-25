import React from 'react'
import './memory.css'
import { useParams } from 'react-router-dom'

export const Memory = () => {
  const { memoryId } = useParams()
  // const { }
  return <div className="mry-dtl-ctn">Memory</div>
}
