export async function fetchTeachers(filters = {}) {
	const query = new URLSearchParams(filters).toString();
	const res = await fetch(`/api/teachers${query ? `?${query}` : ""}`);
	if (!res.ok) throw new Error("Failed to fetch teachers");
	return res.json();
}
