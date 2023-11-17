import { cn } from "@/lib/utils/mergeCss"

 
 function NavLinks ( {children, className}){
    return (
       <ul className={cn('flex justify-center', className)}
       >
        {children}
       </ul>
    )
 }



 export {NavLinks}


 
  
  
  
 