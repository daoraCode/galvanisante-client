import { useContext } from "react"
import { MemoryContext } from "../../contexts/MemoryContext"
import "./home.css"

export const Home = () => {
  const { memories, setMemories } = useContext(MemoryContext)

  return (
    <main className="main-home-ctn">
      {!memories && <h1>Hello</h1>}
      {memories && memories.map( m => <p key={m._id}>{m.theme}</p>)}
      {memories && <h1>AU REVOIR</h1>}
    </main>
  )
}
