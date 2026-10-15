import { NextRequest, NextResponse } from "next/server";
import { randomBytes, timingSafeEqual } from "crypto";
import { sanitize, validate, type ApplicationStatus } from "@/lib/application";
import { addApplication, listApplications, setStatus } from "@/lib/store";

function isAdmin(req: NextRequest) {
  const key = process.env.ADMIN_KEY;
  const given = req.headers.get("x-admin-key") || "";
  if (!key) return false;
  const a = Buffer.from(given), b = Buffer.from(key);
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  // Honeypot: real people never fill the hidden "website" field.
  if (typeof body.website === "string" && body.website) return NextResponse.json({ id: "LCTC-G-OK" });

  const input = sanitize(body);
  const errors = validate(input);
  if (Object.keys(errors).length) return NextResponse.json({ error: "Please fix the highlighted fields.", errors }, { status: 422 });

  const id = "LCTC-G-" + randomBytes(3).toString("hex").toUpperCase();
  await addApplication({ ...input, id, submittedAt: new Date().toISOString(), status: "new" });
  return NextResponse.json({ id }, { status: 201 });
}

export async function GET(req: NextRequest) {
  if (!process.env.ADMIN_KEY) return NextResponse.json({ error: "Set ADMIN_KEY in .env.local to enable the review dashboard." }, { status: 503 });
  if (!isAdmin(req)) return NextResponse.json({ error: "Wrong access key." }, { status: 401 });
  const list = await listApplications();
  return NextResponse.json(list.sort((a, b) => b.submittedAt.localeCompare(a.submittedAt)));
}

const STATUSES: ApplicationStatus[] = ["new", "reviewing", "approved", "declined"];

export async function PATCH(req: NextRequest) {
  if (!isAdmin(req)) return NextResponse.json({ error: "Wrong access key." }, { status: 401 });
  const { id, status } = await req.json().catch(() => ({}));
  if (typeof id !== "string" || !STATUSES.includes(status)) return NextResponse.json({ error: "Invalid update." }, { status: 400 });
  const app = await setStatus(id, status);
  return app ? NextResponse.json(app) : NextResponse.json({ error: "Not found." }, { status: 404 });
}
