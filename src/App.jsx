import { useEffect, useState, useMemo } from 'react'
import Card from './assets/components/card'

import './App.css'

function App() {
  const [policians, setPolician] = useState([])
  const [search, setSearch] = useState('')
  async function getPolitician() {
    const promisePolician = await fetch(`http://localhost:3333/politicians`);
    const data = await promisePolician.json();
    setPolician(data)
    console.log(data)
  }
  const ricerca = useMemo(() => {
    const query = search.trim().toLowerCase()
    if(!query) return policians
    return policians.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()) || p.biography.toLowerCase().includes(search.toLowerCase()) || p.position.toLowerCase().includes(search.toLowerCase()))


  }, [policians, search])
  useEffect(() => {
    getPolitician()
  }, [])

  const listaDaMostrare = search.trim() === '' ? policians : ricerca;

  return (
    <>
      <div className="container">
        <input type="search"
         value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Ricerca politico...'
          />
        <div className='flex'>

          {ricerca.map((p) => {
            return (
              <Card
                key={p.id}
                name={p.name}
                position={p.position}
                image={p.image}
                biography={p.biography}
              />

            )
          })}



        </div>


      </div>

    </>
  )
}



export default App
