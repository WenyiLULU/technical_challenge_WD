import axios from "axios"

const APIURL = "http://localhost:5005/phones/"

export  const getAllPhones = async ()=>{
    const response = await axios.get(APIURL)
    console.log("response",response.data)
    return response.data
}