import React from "react"
function Pet(props){
    return (
        <div>
            <h4>{props.pet.name}</h4>
            <p>{props.pet.breed}</p>        
        </div>
    )
}
export default Pet