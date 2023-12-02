import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils/mergeCss";

import { FaReact, FaNode, FaCSS } from "react-icons/fa";
import {
  SiCss3,
  SiNodedotjs,
  SiReact,
  SiWordpress,
  SiBootstrap,
  SiPython,
  SiJavascript,
  SiAngular,
} from "react-icons/si";

const courseColorCode = (type) => {
  const imageColor = {
    css: "bg-blue-50  text-blue-600",
    node: "bg-green-50 text-green-600",
    angular: "bg-red-50 text-red-600",
    javascript: "bg-amber-50 text-amber-600",
    svelte: "bg-orange-50 text-orange-600",
    react: "bg-blue-50 text-blue-600",
    tailwind: "bg-indigo-50 text-indigo-600",
    firebase: "bg-violet-50 text-violet-600",
  };
  return imageColor[type];
};

const courseType = (type, price) => {
  const currency = { style: "currency", currency: "CAD" };
  const priceFormat = new Intl.NumberFormat("en-CA", currency);

  return (
    <>
      <span
        className={cn(
          "inline-flex items-center rounded-full   px-2.5 py-1 text-xs font-medium ",
          courseColorCode(type)
        )}
      >
        {priceFormat.format(price / 100)}
      </span>
    </>
  );
};

const courseLogo = (type) => {
  const logos = {
    react: <SiReact className="w-24 h-24 fill-blue-300/50" />,
    node: <SiNodedotjs className="w-24 h-24 fill-green-300/50" />,
    css: <SiCss3 className="w-24 h-24 fill-cyan-300/50" />,
    wordpress: <SiWordpress className="w-24 h-24 fill-stone-300/50" />,
    python: <SiPython className="w-24 h-24 fill-purple-300/50" />,
    bootstrap: <SiBootstrap className="w-24 h-24 fill-teal-300/50" />,
    javascript: <SiJavascript className="w-24 h-24 fill-orange-300/50" />,
    angular: <SiAngular className="w-24 h-24 fill-red-300/50" />,
  };

  return logos[type];
};

function PlaceHolderCard({
  title,
  description,
  image,
  type,
  price,
  uid,
  ...rest
}) {
  return (
    <aside className=" self-stretch  overflow-hidden rounded-t-lg shadow-md  hover:bg-zinc-50/75  hover:shadow-zinc-300 hover:shadow-lg pb-9 ">
      <Link
        className="  "
        href={`/course/${uid}`}
      >
        <Image
          src={image}
          width={270}
          height={163}
          alt="none"
          className="w-full"
        />

        <div className="px-4 pt-6">
          <p className=" ">{courseType(type, price)}</p>

          <h2 className=" my-3   text-stone-500 font-medium leading-5   ">
            {title || "title"}
          </h2>
          <p className="text-sm text-stone-400 ">{description}</p>
        </div>
      </Link>
    </aside>
  );
}

export { PlaceHolderCard };
