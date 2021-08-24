import React from "react"
import Pet from "./Pet.js"
function Friend(props){
    console.log(props)
    const petsMap= props.human.pets.map(animal=><Pet key= {animal.name} pet={animal} />)

    return (
        <div>
            <h2>{props.human.name}</h2>
            <p>{props.human.age}</p >

            {petsMap}
        </div>
    )
}
export default Friend