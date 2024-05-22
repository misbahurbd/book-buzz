import { NavLink } from "react-router-dom"
import { twMerge } from "tailwind-merge"

const Header = () => {
  const navLinks = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Listed Books",
      link: "/listed-books",
    },
    {
      label: "Pages to Read",
      link: "/pages-to-read",
    },
  ]

  return (
    <header className="py-8">
      <nav className="container flex items-center justify-between">
        <a
          href="/"
          className="font-bold text-2xl"
        >
          Book Stol
        </a>
        <ul className="flex items-center gap-2">
          {navLinks.map(navItem => (
            <li key={navItem.link}>
              <NavLink
                className={({ isActive }) =>
                  twMerge(
                    "block px-5 py-2.5 text-lg rounded-md border border-transparent transition text-black/80",
                    isActive && "border-green-500 text-green-500 font-bold"
                  )
                }
                to={navItem.link}
              >
                {navItem.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <button className="text-lg px-7 py-3 rounded-md bg-[#23BE0A] text-white font-semibold">
            Sign In
          </button>
          <button className="text-lg px-7 py-3 rounded-md bg-[#59C6D2] text-white font-semibold">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  )
}
export default Header
