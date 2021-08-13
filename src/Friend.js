import React from "react"
function Friend(props){
    return (
        <div>
            <h2>{props.Name}</h2>
            <h2>{props.Age}</h2>
        </div>
    )
}
export default Friend