import { useContext } from "react"
// import { MemoryContext } from "../../contexts/MemoryContext"
import "./memorycard.css"

export const MemoryCard = ({ memory }) => {
  return (
    <div className="mry-crd-ctn jst-ct-ctr a-itm-ctr">
      <p>{memory.theme}</p>
      {/* <p>{memories.presentation}</p> */}
      {/* <p>{memories.content}</p> */}
    </div>
  )
}
