 function CourseCard ( {children}){
    return (
        <aside
        className=" overflow-clip  rounded-lg    selection:  max-w-[260px]  bg-slate-50 shadow ">
        <img
        className="mb-2"
        width="825"
        height="490"
        src="test.jpg"
        alt="graphql"
      />
     <div className="px-3 pt-3  ">
        
     
          <h2 className="mb-1  text-lg text-stone-700 font-medium">
            Beginners Guide To Graphql
          </h2>
          <p className="mb-3 text-xs text-stone-500" >
            Samates, quos totam pers pic is cupidi tate com modi libero sed voluppsum. Foolor sit amet con ectet ur adip smicing elit...
          </p>
 
     
          <ul className="pl-5 text-stone-500 font-semibold   text-sm  flex flex-col gap-y-2 ">
            <li className="flex items-center gap-x-2">
              <img
                className="w-4 h-4 opacity-40"
                src="icons/clock.svg"
                alt=""
              />
              <time> 3 hours 56 minutes</time>
            </li>
            <li className="flex items-center gap-x-2 ">
              <span
                ><img
                  className="w-4 h-4 opacity-40"
                  src="icons/course-level.svg"
                  alt="" /></span
              ><span className="font-medi"> Begginer Level</span>
            </li>
          
             <li className="flex items-center gap-x-1">
              
              <ul className="flex opacity-40 ">
                <li>
                  <img
                    className="w-5 h-5"
                    src="icons/star.svg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="w-5 h-5"
                    src="icons/star.svg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="w-5 h-5"
                    src="icons/star.svg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="w-5 h-5"
                    src="icons/star.svg"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    className="w-5 h-5"
                    src="icons/star.svg"
                    alt=""
                  />
                </li>
              </ul>
              <span className="text-xs">(4.85)</span>
          
            </li>
        
          </ul>

       
        
     </div>
    

     <footer  className="flex flex-col gap-y-4 p-6">   
   
     <button className=" py-2.5 bg-pink-500 rounded-md   font-bold text-white text-sm  ">Buy Now</button>
    
     </footer>
      </aside>
    )
 }



 export {CourseCard}