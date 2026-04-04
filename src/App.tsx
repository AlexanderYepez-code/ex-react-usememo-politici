import { useEffect, useState, useMemo } from 'react'

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
    return policians.filter((p) =>
      p.name.toLowerCase() || p.biography.toLowerCase().includes(search.toLowerCase()))


  }, [policians, search])
  useEffect(() => {
    getPolitician()
  }, [])

  return (
    <>
      <div className="container">
        <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} />
        <div>
          {search.map((p, i) => {
            return (

              <div key={i} className="card">
                <h2 className='titolo'>{p.name}</h2>
                <img className='imagine' src={p.image} alt="" />
                <p className='posizione'>{p.position}</p>
                <p className='biografia'>{p.biography}</p>

              </div>

            )
          })}
        </div>
        {policians.map((p, i) => {
          return (


            <div key={i} className="card">
              <h2 className='titolo'>{p.name}</h2>
              <img className='imagine' src={p.image} alt="" />
              <p className='posizione'>{p.position}</p>
              <p className='biografia'>{p.biography}</p>

            </div>

          )
        })}

      </div>

    </>
  )
}


export default App
