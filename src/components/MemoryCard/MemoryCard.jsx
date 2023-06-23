import { useContext } from "react"
// import { MemoryContext } from "../../contexts/MemoryContext"
import "./memorycard.css"

export const MemoryCard = ({ memory }) => {
  return (
    <div className="mry-crd-ctn jst-ct-ctr a-itm-ctr">
      <p className="mry-p-theme">{memory.theme}</p>
      <p className="mry-p-content">{memory.content}</p>
      <img src={`${import.meta.env.VITE_BACKEND_API}/${memory.cover}`} />
    </div>
  )
}
