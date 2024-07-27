/* eslint-disable */
export default function getStudentsByLocation(students, city) {
	return students.filter(i => i.location == city);
}
