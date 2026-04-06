import { memo } from 'react'


const Card = memo(function Card({name, image, position, biography}){
    console.log(`React car : ${name}`)
    return (
        <div className="card">
            <h2 className='titolo'>{name}</h2>
            <img className='imagine' src={image} alt="" />
            <p className='posizione'>{position}</p>
            <p className='biografia'>{biography}</p>

        </div>
    )
})




export default Card