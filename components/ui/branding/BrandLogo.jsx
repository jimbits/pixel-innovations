import {cn} from '@/lib/utils/mergeCss' 
  
  function BrandLogo ( {children, className}){
   
     return (
      <svg
      xmlns="http://www.w3.org/2000/svg"    
      viewBox="0 0 512 512"
      className={cn('fill-inherit w-8 h-8', className)}
    >
      <path d="M231.9 349.6c-25.5 21.5-48.9 41.1-73.6 61.9C84.2 354.6 18.5 291 33.7 187.8 48 89.7 142.1 13.9 254.6 13.3c112.9-.6 208.9 73.5 223.5 171.6 10 67.3-10.1 125.7-63.1 173.6-52 46.9-105.8 92.1-161.3 140.2-12.4-12.6-27.8-28.3-45.3-46.1 4.4-4.5 10.2-11 16.7-17 45.4-41.8 91.7-82.8 136.2-125.4 45.7-43.7 58.9-95.1 31.7-151-25.7-52.7-72.9-79.9-136.6-80.9-73.9-1.2-134.7 46.8-147.7 114.7-12.1 63 29.7 126.6 97.5 148.5 7.8 2.6 15.7 5 25.7 8.1z" />
      <path d="M255.9 132.4c50.2 0 90.2 35.6 90.5 80.6.3 44.6-40 82.1-89 83-49.7.8-92.1-37.4-91.8-82.8.3-45.2 40.1-80.8 90.3-80.8z" />
    </svg>
        
  
     )
  }
 
 
 
 export default BrandLogo  


 