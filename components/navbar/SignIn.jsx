import Link from "next/link";
import { BiLogIn } from "react-icons/bi";
import { cn } from "@/lib/utils/mergeCss";

function SignIn({ children, className, active, ...props }) {
 
  return (
    <Link
      className={cn(
        "inline-flex items-center gap-x-1 ",
        className,
  
      )}
      {...props}
      href="/"
    >
      <BiLogIn />
      login
    </Link>
  );
}

export { SignIn };
