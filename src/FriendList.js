import React from "react"
import FriendData from "./FriendData"
import Friend from "./Friend"


function FriendList() {
   const FriendComponents=FriendData.map(person=> <Friend key={person.name} human = {person}/>)
//    const PetComponents=FriendData.map(friend=> <Pet pets={friend.pets.name}/>)
return (
    <div>
        {FriendComponents} 
        {/* {PetComponents} */}
    </div>
)
}

export default FriendList