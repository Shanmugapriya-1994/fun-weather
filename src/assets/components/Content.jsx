import { useContext } from "react"
import { appcontext } from "./AppContext"
import { WiThermometer, WiDaySunny, WiCloud } from 'react-icons/wi'; 


function Content()
{
    const {city} = useContext(appcontext)   

    const {weather} = useContext(appcontext)
    const {temp} = useContext(appcontext)
    const {desc} = useContext(appcontext)


        return(

        <div>
            <div className="bg-slate-300 flex flex-col w-60 gap-3 p-3 mx-auto rounded-md">
                <h1 className="text-2xl font-medium text-center">Report </h1>
                <p className="flex gap-1 ">  Weather <WiCloud className="p-1 text-3xl"/> : <b className="text-blue-900 p-1">{weather}</b></p>
                <p className="flex gap-1 "> Temperature <WiThermometer className="p-1 text-3xl"/> :<b className="text-blue-900 p-1">{temp}</b></p>
                <p className="flex gap-1 ">Description  <WiDaySunny className="p-1 text-3xl"/> :<b className="text-blue-900 p-1">{desc}</b></p>

            </div>
        </div>
    )
}

export default Content