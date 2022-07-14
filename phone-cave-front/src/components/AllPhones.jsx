import { Loader, SimpleGrid } from "@mantine/core"
import { useEffect, useState } from "react";

import axios from "axios";
import PhoneDetails from "./PhoneDetails";

const AllPhones = () => {
    const [allPhones, setAllPhones] = useState([])
    const [fetching, setFetching] = useState(true)
    const [showDetails, setShowDetails] = useState("none")
    const [phoneId, setPhoneId] = useState("")

    const fetchPhones = async ()=>{
        const response = await axios.get("http://localhost:5005/phones/")
        //console.log(response.data)
        setAllPhones(response.data)
        setFetching(false)
    }
    useEffect(()=>{
        fetchPhones()
    },[])
    //console.log("all phones get", allPhones)
    return ( 
        fetching ? <Loader /> 
        :<div>
        <PhoneDetails showDetails={showDetails} phoneId={phoneId} />

        <SimpleGrid
        breakpoints={[
          { maxWidth: 2000, cols: 6, spacing: "md" },
          { maxWidth: 1750, cols: 5, spacing: "md" },
          { maxWidth: 1500, cols: 3, spacing: "md" },
          { maxWidth: 1100, cols: 2, spacing: "sm" },
          { maxWidth: 800, cols: 1, spacing: "sm" },
        ]}
      >
        {allPhones
          .map((phone) => (
            <div key={phone.id}>
                <div><strong>Name: </strong>{phone.name}</div>
                <div><strong>Manufacturer: </strong>{phone.manufacturer}</div>
                <div><strong>color: </strong>{phone.color}</div>
                <div><strong>Price: </strong>{phone.price}</div>
                <button onClick={()=>{
                    setShowDetails("block")
                    setPhoneId(phone.id)
                    console.log(phoneId)
                }}>more details</button>
                <button onClick={()=>{
                    setShowDetails("none") 
                    setPhoneId("")
 
                    }}>hide</button>
            </div>
          ))}
      </SimpleGrid>
       
        </div>
        

    );
}
 
export default AllPhones;