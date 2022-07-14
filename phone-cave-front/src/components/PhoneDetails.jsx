import axios from "axios"
import { useEffect, useState } from "react";

const PhoneDetails = ({showDetails, phoneId}) => {
    const [phone, setPhone] = useState("")
    const [fetching, setFetching] = useState(true)

    const fetchPhone = async ()=>{
        const response = await axios.get(`http://localhost:5005/phones/${phoneId}`)
        console.log(response.data)
        setPhone(response.data)
        setFetching(false)
    }
    useEffect(()=>{
        fetchPhone()
    },[])
    return ( 
        <div style={{display: showDetails, width:"60%", margin:"20 auto"}}>
            <div>Details of {phone.name}</div>
            <div>{phone.description}</div>
        </div>
     );
}
 
export default PhoneDetails;