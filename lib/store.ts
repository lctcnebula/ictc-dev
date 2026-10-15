import { promises as fs } from "fs";
import path from "path";
import type { Application, ApplicationStatus } from "./application";

// File-backed store: fine for a single server. On serverless hosts (e.g. Vercel) the
// filesystem is read-only, so swap these three functions for a database.
const FILE = path.join(process.cwd(), "data", "applications.json");

let queue: Promise<unknown> = Promise.resolve();
const serial = <T,>(fn: () => Promise<T>) => (queue = queue.then(fn, fn)) as Promise<T>;

async function readAll(): Promise<Application[]> {
  try {
    return JSON.parse(await fs.readFile(FILE, "utf8"));
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }
}

async function writeAll(list: Application[]) {
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  const tmp = FILE + ".tmp";
  await fs.writeFile(tmp, JSON.stringify(list, null, 2));
  await fs.rename(tmp, FILE);
}

export const listApplications = () => serial(readAll);

export const addApplication = (app: Application) =>
  serial(async () => {
    const list = await readAll();
    list.push(app);
    await writeAll(list);
    return app;
  });

export const setStatus = (id: string, status: ApplicationStatus) =>
  serial(async () => {
    const list = await readAll();
    const app = list.find(a => a.id === id);
    if (!app) return null;
    app.status = status;
    await writeAll(list);
    return app;
  });
