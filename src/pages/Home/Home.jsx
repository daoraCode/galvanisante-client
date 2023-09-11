import './home.css'

import { useContext } from "react"
import { MemoryContext } from "../../contexts/MemoryContext"
import { MemoryCard } from '../../components/MemoryCard/MemoryCard'


export const Home = () => {
  const { memories } = useContext(MemoryContext)

  return (
    <div className="hm-ctn">
      <div className="grd-mry-crd">
        {memories && memories.map((m, i) => <MemoryCard key={i} memory={m} />)}
      </div>
    </div>
  )
}
