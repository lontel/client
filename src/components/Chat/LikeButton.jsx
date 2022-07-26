import { useState } from "react"


const LikeButton = () => {

    const [counterValue, setCounterValue] = useState(0)
    const incrementValue = () => setCounterValue(counterValue + 1)


    return (
        <>
            <button onClick={incrementValue} > Likes  {counterValue}</button>
        </>
    )
}


export default LikeButton