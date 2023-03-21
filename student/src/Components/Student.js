import StudentData from "./StudentData";
import Score from "./Score"
import { useState } from "react";

function Student({info}){
    const [data, setData] = useState(info)
    return(
        <>
        <p>{data.name}</p>
        <p>{data.bio}</p>
        {data.scores.map(score => <Score info={score}/>) }
        </>

    )
}

export default Student;
