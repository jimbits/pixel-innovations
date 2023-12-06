import Image from "next/image";
import { getCourses } from "@/lib/firebase/courses";

import { CourseHeader } from "@/components/single-product/CourseHeader";
async function Course({ params }) {
	const result = await getCourses();
	const course = Object.keys(result)
		.map((key) => result[key])
		.find((course) => course.uid === params.id);

	return (
		<>
			{<CourseHeader {...course} />}
			<main className="grid grid-cols-2"></main>
		</>
	);
}

export default Course;
