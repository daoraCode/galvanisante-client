import { useContext } from "react"
import { MemoryContext } from "../../contexts/MemoryContext"
import { MemoryCard } from "../../components/MemoryCard/MemoryCard"
import "./home.css"

export const Home = () => {
  const { memories } = useContext(MemoryContext)

  console.log('9, home', memories)

  return (
    <div className="hm-ctn">
      <div className="grd-mry-crd">
        {memories && memories.map((m, i) => <MemoryCard key={i} memory={m} />)}
      </div>
    </div>
  )
}
