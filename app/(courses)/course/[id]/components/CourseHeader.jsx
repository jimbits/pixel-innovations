import Image from "next/image";

import { BuyNow } from "./BuyNow";

import { cn } from "@/lib/utils/mergeCss";

const courseColors = {
  node: {
    header: "bg-green-600",
    shadow: "shadow-green-700",
    size: "shadow-md",
  },
  react: {
    header: "bg-cyan-600",
    shadow: "shadow-cyan-700",
    size: "shadow-md",
  },
  css: {
    header: "bg-blue-800",
    shadow: "shadow-blue-900",
    size: "shadow-md",
  },
  javascript: {
    header: "bg-amber-400",
    shadow: "shadow-yellow-600",
    size: "shadow-md",
  },
  firebase: {
    header: "bg-purple-600",
    shadow: "shadow-purple-700",
    size: "shadow-md",
  },
  tailwind: {
    header: "bg-indigo-600",
    shadow: "shadow-indigo-900",
    size: "shadow-md",
  },
  svelte: {
    header: "bg-orange-500",
    shadow: "shadow-orange-900",
    size: "shadow-md",
  },
};

function CourseHeader({ title, type, price, priceId, className }) {
  const { header, shadow, size } = courseColors[type];

  return (
    <header className={cn("py-28", header, shadow)}>
      <div className="flex justify-center items-center  w-2/3 mx-auto">
        <div className="max-w-[600px]  ">
          <p className="  p-2 text-6xl font-bold text-white/50 ">
            ${price / 100}{" "}
            <span className="text-sm tracking-tighter opacity-80 -ml-1.5">
              CAD
            </span>
          </p>
          <h1 className=" text-6xl text-white/95 font-medium  mb-3">{title}</h1>
          <p className="w-5/6 text-white/80 mb-5 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores,
            expedita assumenda placeat, ipsam praesentium ad rem ab quidem
            exercitationem harum suscipit reiciendis quos doloremque fugiat eos
            sit odit.
          </p>
          {/*   ring-4   text-red-50 font-bold py-2.5 ring-offset-white/20 ring-white/10 */}
          <BuyNow priceId={priceId} />;
          {/* <button className="w-2/5 text-xl font-bold rounded-md bg-white/5 hover:bg-white/20  py-2.5  text-white ring-4 ring-white/5 ring-offset-2 ring-offset-white/[0.09]">
            Buy Now
          </button> */}
        </div>
        <div
          className={cn("rounded-md overflow-hidden shadow-lg", shadow, size)}
        >
          <Image
            src={`/courses/${type}.jpg`}
            alt="course type"
            width={520}
            height={309}
            className="shadow  block  "
          />
        </div>
      </div>
    </header>
  );
}

export { CourseHeader };
