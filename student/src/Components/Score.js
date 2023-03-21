import { useState } from "react";

function Score({info}){
    const [data, setData] = useState(info)
    return(
        <>
        <p>{data.score}</p>
        <p>{data.date}</p>
        </>

    )
}

export default Score;