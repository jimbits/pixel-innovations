import { db } from "./firebaseConfig";
export async function getCourses() {
	const dbRef = db.ref("/courses");
	const dataSnapshot = await dbRef.get("value");
	return dataSnapshot.val();
}
