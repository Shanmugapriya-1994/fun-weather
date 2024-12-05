import { createContext, useState } from "react";

const appcontext = createContext()

function AppContextProvider(data)
{
    const [city,setcity] = useState("")

    const [weather,setweather] = useState("")
    const [temp,settemp] = useState("")
    const [desc,setdesc] = useState("") 
    return(
        <appcontext.Provider value={{city,setcity,weather,setweather,temp,settemp,desc,setdesc}}>
            {data.children}
        </appcontext.Provider>
    )
}

export default AppContextProvider
export {appcontext}