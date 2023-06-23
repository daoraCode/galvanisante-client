import { useContext } from "react"
import { MemoryContext } from "../../contexts/MemoryContext"
import { MemoryCard } from "../../components/MemoryCard/MemoryCard"
import "./home.css"

export const Home = () => {
  const { memories } = useContext(MemoryContext)

  console.log(memories)

  return (
    <div className="hm-ctn">
      <div className="grd-mry-crd">
        {/* {!memories && <h1>Au revoir</h1>} */}
        {/* {memories && memories.map((m) => <p key={m._id}>{m.theme}</p>)} */}
        {/* {memories && memories.map((m) => <MemoryCard  />)} */}
        {memories && memories.map((m, i) => <MemoryCard key={i} memory={m} />)}
        {/* {memories && memories.map(m, i) => {<MemoryCard theme={m.theme}/>} */}
      </div>
    </div>
  )
}
