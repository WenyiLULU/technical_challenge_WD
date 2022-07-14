import axios from "axios"
import { useEffect, useState } from "react";
import { Loader } from "@mantine/core"

const PhoneDetails = ({showDetails, phoneId}) => {
    const [phone, setPhone] = useState("")
    const [fetching, setFetching] = useState(true)

    const fetchPhone = async ()=>{
        const response = await axios.get(`http://localhost:5005/phones/${phoneId}`)
        console.log("phone data",response.data)
        setPhone(response.data)
        setFetching(false)
    }
    useEffect(()=>{
        fetchPhone()
    },[phoneId])
    return ( 
        fetching ? <Loader /> 
        :<div style={{display: showDetails}}>
            <div><strong>Details of {phone.name}</strong></div>
            <div>{phone.description}</div>
        </div>
     );
}
 
export default PhoneDetails;