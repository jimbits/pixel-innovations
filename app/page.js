import Link from "next/link";

import { Hero } from "@/components/hero/Hero";
import { SuccessSection } from "@/components/sections/SuccessSection";
import { CarrerSection } from "@/components/sections/CarrerSection";
import { QuestionSection } from "@/components/sections/QuestionSection";

const getPrices = async () => {
	const res = await fetch("http:localhost:3000/api/prices", {
		method: "POST",
	});
	const prices = await res.json();

	return null;
};
export default async function Home() {
	const priceList = await getPrices();

	return (
		<>
			<Hero />
			<main className="">
				<CarrerSection />
				<SuccessSection />
				<QuestionSection />
			</main>
		</>
	);
}
