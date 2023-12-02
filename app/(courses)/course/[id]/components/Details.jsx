import { FaRegClock } from "react-icons/fa";
import { cn } from "@/lib/utils/mergeCss"
 
function Details ( {children}){
    return (
        <ul>
        <li><FaRegClock/>time</li>
        <li>Enrolled</li>
        <li>star rating</li>
        <li>level</li>
       </ul>
    )
 }

export {Details}

 