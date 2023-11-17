import Link from 'next/link'

function NotFound({ children }) {
  return (
    <body className="antialiased">
    <div className=" flex items-center justify-center min-h-screen bg-slate-50 sm:pt-0">
   
     <div className="md:flex">
     <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight sm:pr-6 sm:mr-6 sm:border-r sm:border-slate-900/10    ">404</h1>


<div>
<h2 class=" text-sm sm:text-base   text-slate-700 font-semibold ">This page could not be found.</h2>
<div >
    <Link href="/" class=" text-sm font-bold leading-7 text-indigo-600">
      <span aria-hidden="true">&larr;</span> Back to home</Link>
</div>
</div>

     </div>
 
    </div>


</body>
  );
}

export default NotFound;
