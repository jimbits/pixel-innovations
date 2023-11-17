import Link from 'next/link'

import { cn } from "@/lib/utils/mergeCss"

 

 function NavLink ( {children, href, className, icon}){
    return (
        <Link className={cn('', className)} href={href}>
          {children}
        </Link>
    )
 }



 export {NavLink}