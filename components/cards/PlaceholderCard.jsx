function PlaceHolderCard({title}) {
    return (
        <aside className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2>{title || "title"}</h2>
           
             <div>
             <svg className=" inset-0 border   stroke-gray-900/10" fill="none">
               <defs>
                 <pattern id="pattern-b4126363-2260-432a-9ef3-4e9b56aecbec" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                   <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
                 </pattern>
               </defs>
               <rect stroke="none" fill="url(#pattern-b4126363-2260-432a-9ef3-4e9b56aecbec)" width="100%" height="100%"></rect>
             </svg>
             </div>
          
        </aside>
    )
  }

  export {PlaceHolderCard}
  