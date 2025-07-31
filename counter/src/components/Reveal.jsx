import {useState} from "react"
function Reveal(){
    let [name,setName] = useState("XYZ")
    return(
        <>
        <h2>{name}</h2>
        <button onClick = {()=> {setName("Priyanshu")}}>Reveal</button>
        </>
    )
}
export default Reveal;
