import { useState, useContext } from "react"
import { AuthContext } from "../../contexts/auth.context"


const LikeButton = () => {

    const { user } = useContext(AuthContext)

    console.log(user, '----')

    const [counterValue, setCounterValue] = useState(0)
    const incrementValue = () => setCounterValue(counterValue + 1)

    console.log(counterValue, 'EOEOEEOE')
    return (
        <>
            <button onClick={incrementValue} > Likes  {counterValue}</button>
        </>
    )
}


export default LikeButton