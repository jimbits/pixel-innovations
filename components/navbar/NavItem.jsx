import Link from 'next/link'

import { cn } from "@/lib/utils/mergeCss"

 

 function NavItem ( {label, routePath, className, icon}){
    return (
        <li className={cn('', className)} href={routePath || "/"}>
            {label || "route path "}
        </li>
    )
 }



 export {NavItem}