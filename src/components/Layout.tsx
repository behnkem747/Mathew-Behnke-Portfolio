import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Background pattern only on non-home page */}
      {!isHome && (
        <div
          className="pointer-events-none fixed inset-0 -z-10 cool-pattern-bg"
          aria-hidden="true"
        />
      )}
      <main className="mx-auto max-w-5xl px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
}