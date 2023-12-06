import Image from "next/image";

import { BuyNow } from "./BuyNow";

import { cn } from "@/lib/utils/mergeCss";
import { AddToCart } from "../cart/AddToCart";

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
		<header className={cn(" ", header, shadow)}>
			<div
				className=" 
			flex flex-col p-14
			sm:p-0  sm:px-4 sm:py-9
			sm:flex-row sm-justify-center  sm:items-center sm:gap-x-4 
			md:max-w-4xl md:mx-auto md:gap-8
			md:justify-center
			lg:py-20 lg:max-w-5xl
			 
			">
				<div
					className="  
				 order-2    pt-8 pb-14
				 sm:order-1  sm:pt-0 sm:pb-0  sm:w-1/2 ">
					<p
						className="
						mb-4 text-5xl font-semibold text-white/50
					     sm:text-4xl sm:mb-2
						 md:text-5xl
						 lg:text-7xl
					">
						${price / 100} <span className="text-sm tracking-tighter opacity-80 -ml-1.5">CAD</span>
					</p>
					<h1
						className="text-4xl mb-4 text-white/95 font-semibold
					   sm:text-3xl lg:text-6xl   ">
						{title}
					</h1>
					<p className="   text-white/80 mb-5 sm:text-sm  ">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, expedita assumenda
						placeat, ipsam prae t odit.
					</p>
					<div className="w-2/3 md:w-7/12">
						<BuyNow
							priceId={priceId}
							className=" text-center sm:text-sm md:text-base  mb-4  w-full    font-semibold  rounded-md 
							bg-white/[0.09]      py-2   text-white ring-1 ring-white/40 hover:bg-white/[0.2] "
						/>

						<AddToCart
							label="Add To Cart"
							className=" text-center   block w-full font-semibold rounded-md py-2     text-white/95 ring-1 ring-white/30  hover:bg-white/10 hover:ring-white/50
							sm:text-sm 
							md:text-base
							"
						/>
					</div>
				</div>

				{/* IMAGE */}
				<div
					className={cn(
						"rounded-md  overflow-hidden shadow-lg order-1 sm:order-2   sm:w-1/2   lg:w-fit",
						shadow,
						size
					)}>
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
