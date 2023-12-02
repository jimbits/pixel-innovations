import { Suspense } from "react";
import { ListPlaceHolder } from "./components/ListPlaceholder";
import { PlaceHolderCard } from "./components/PlaceholderCard";

/* 
     Server Component  fetch API
*/

async function getCourses() {
  const res = await fetch(
    "https://pixel-innovations-default-rtdb.firebaseio.com/courses.json",
    { cache: "no-store" }
  );
  return await res.json();
}

async function Courses() {
  //  Load Project Data From Firebase URL
  //  https://firebase.com/path/data.json
  // Object { -uid:{}, -uid:{}. -uid:{}}

  const courses = await getCourses();

  const courseDetails = Object.keys(courses).map((key) => {
    return courses[key];
  });

  return (
    <>
      <header className="bg-white mt-12">
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 p-8 ">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-60deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
            aria-hidden="true"
          />

          <div className="max-w-7xl bg-orange-50 py-20 mx-auto sm:flex sm:justify-center sm:items-center  sm:gap-x-12">
            <div className="sm:w-3/6 ">
              <h1 className=" text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-2">
                Courses
              </h1>

              <p className="text-lg leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptate porro, minima similique fuga doloribus dignissimos nam
                architecto numquam quas cum sequi quibusdam beatae iure modi
                accusamus. Adipisci voluptates neque earum.
              </p>
            </div>

            <div className=" w-fit mx-auto  sm:mx-0 ">
              <ListPlaceHolder />
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>
      </header>

      <main className="max-w-7xl mx-auto mb-48  ">
        <section className="max-w-lg mx-auto px-8  grid grid-cols-1   sm:max-w-none   sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:max-w-none xl:grid-cols-4 ">
          {courseDetails.map((details) => (
            <PlaceHolderCard
              key={details.uid}
              {...details}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default Courses;
