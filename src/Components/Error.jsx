import { useEffect, useState } from "react"


function Error ({error}){


    const [defaultError, setDefaultError] = useState("Opps! Page Not Found")

    useEffect(()=>{
        if(error){
            setDefaultError(error)
        }
    }, [error])

    return (
        <p>{defaultError}</p>
    )
}

export default Error