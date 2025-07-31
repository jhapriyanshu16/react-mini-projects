import React from 'react'
import {useParams} from 'react-router'

function Param(){
    const {id} = useParams();
    return(
        <>
            <h2 style={{ textAlign: "center", paddingTop: "200px" }}>Welcome {id}</h2>
        </>
    )
}
export default Param