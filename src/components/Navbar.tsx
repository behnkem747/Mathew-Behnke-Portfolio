import { NavLink } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/resume", label: "Resume" },
];

export default function Navbar() {
  return (
    <header className="border-b">
  <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
    
    {/* Left side - Name */}
    <div className="font-semibold">Mathew Behnke</div>

    {/* Middle - Navigation */}
    <nav className="flex items-center gap-1">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            [
              "rounded-md px-3 py-2 text-sm transition",
              isActive
                ? "bg-gray-900 text-white"
                : "text-gray-700 hover:bg-gray-100",
            ].join(" ")
          }
          end={link.to === "/"}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>

    {/* Right side - Social Icons */}
    <div className="flex items-center gap-4">
      <a
        href="https://github.com/behnkem747"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-black transition"
      >
        <Github size={20} />
      </a>

      <a
        href="https://linkedin.com/in/mathew-behnke/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-blue-600 transition"
      >
        <Linkedin size={20} />
      </a>
    </div>

  </div>
</header>
  );
}
