import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { QuickDB, MySQLDriver } from "quick.db";
import dotenv from "dotenv";

const photoCache = new Map();

async function fetchPhoto(id, gender = "male") {
	if (photoCache.has(id)) return photoCache.get(id);
	let url;
	try {
		const res = await fetch(
			`https://randomuser.me/api/?gender=${gender}&seed=${encodeURIComponent(
				id,
			)}&inc=picture`,
		);
		const data = await res.json();
		url = data.results?.[0]?.picture?.large;
	} catch {
		url = undefined;
	}
	if (!url) {
		url = `https://i.pravatar.cc/300?u=${encodeURIComponent(id)}`;
	}
	photoCache.set(id, url);
	return url;
}

dotenv.config();
const app = express();
app.use(cors());

const mysqlDriver = new MySQLDriver({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});
await mysqlDriver.connect();
const db = new QuickDB({ driver: mysqlDriver });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const contentPath = path.join(__dirname, "data", "content.json");
const loadJson = (p) => JSON.parse(fs.readFileSync(p, "utf-8"));

// ===== API ROUTES =====
app.get("/api/teachers", async (req, res) => {
	try {
		const { location, subject, topTeacher, limit } = req.query;
		let { grade, curriculum } = req.query;
		if (!grade && curriculum) {
			const map = {
				igcse: "IGCSE",
				"o-levels": "O Levels",
				olevels: "O Levels",
			};
			grade = map[String(curriculum).toLowerCase()] || curriculum;
		}
		let teachers = (await db.get("teachers")) || [];

		if (location) {
			teachers = teachers.filter((t) => t.location === location);
		}
		if (subject) {
			teachers = teachers.filter((t) => (t.subjects || []).includes(subject));
		}
		if (grade) {
			teachers = teachers.filter((t) => (t.grades || []).includes(grade));
		}
		if (topTeacher === "true") {
			teachers = teachers.filter((t) => t.topTeacher);
		}
		if (limit) {
			teachers = teachers.slice(0, Number(limit));
		}

		const enriched = await Promise.all(
			teachers.map(async (t) => {
				let photoUrl = t.photoUrl;
				if (!photoUrl) {
					const gender =
						t.gender && t.gender.toLowerCase() === "female" ? "female" : "male";
					photoUrl = await fetchPhoto(t.id || t.name, gender);
				}
				return { ...t, photoUrl };
			}),
		);

		res.json(enriched);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Failed to fetch teachers" });
	}
});

app.get("/api/:page", (req, res) => {
	try {
		const content = loadJson(contentPath);
		const page = req.params.page.replace(/-([a-z])/g, (_, c) =>
			c.toUpperCase(),
		);
		content[page]
			? res.json(content[page])
			: res.status(404).json({ error: "Not found" });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Failed to load content" });
	}
});

// ===== SERVE REACT BUILD =====
const distPath = path.join(__dirname, "../dist");
app.use(express.static(distPath));

// Catch-all to index.html (for React Router)
app.get("*", (req, res) => {
	res.sendFile(path.join(distPath, "index.html"));
});

// ===== START SERVER =====
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
