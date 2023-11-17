import { cn } from "@/lib/utils/mergeCss";
const MobileMenuIcon = ({className}) => (
  <svg
 
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24" 
    className={cn("w-6 h-5 fill-neutral-500", className)} 
  >
    <path fill="none" stroke="none" d="M0 0h24v24H0V0z" />
    <path stroke="none" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);
export  { MobileMenuIcon};

