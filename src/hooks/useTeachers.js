import { useEffect, useState } from "react";
import { fetchTeachers } from "@/api";

export function useTeachers(filters = {}) {
	const [teachers, setTeachers] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		let ignore = false;
		async function load() {
			setLoading(true);
			try {
				const data = await fetchTeachers(filters);
				if (!ignore) setTeachers(data);
			} catch (err) {
				console.error(err);
				if (!ignore) setTeachers([]);
			} finally {
				if (!ignore) setLoading(false);
			}
		}
		load();
		return () => {
			ignore = true;
		};
	}, [JSON.stringify(filters)]);

	return { teachers, loading };
}
