import type { Metadata } from "next";
import AdminDashboard from "./AdminDashboard";

export const metadata: Metadata = { title: "Grant applications", robots: { index: false, follow: false } };

export default function AdminPage() {
  return (
    <section className="block tint" style={{ paddingTop: 56, minHeight: "70vh" }}>
      <div className="wrap">
        <div className="head">
          <div>
            <p className="kicker">Foundation reviewers</p>
            <h2>Grant applications</h2>
          </div>
        </div>
        <AdminDashboard />
      </div>
    </section>
  );
}
