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
          Brain Stole
        </a>
        <ul className="flex items-center gap-2">
          {navLinks.map(navItem => (
            <li key={navItem.link}>
              <NavLink
                className={({ isActive }) =>
                  twMerge(
                    "block leading-tight px-5 py-2.5 text-lg rounded-md border border-transparent transition text-black/80 hover:bg-black/5 hover:border-black/10",
                    isActive &&
                      "border-green-500 text-green-500 font-bold hover:bg-green-100 hover:border-green-500"
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
          <button className="text-lg px-7 py-3 rounded-md leading-tight transition bg-[#23BE0A] border-2 border-[#23BE0A] text-white font-semibold hover:bg-transparent hover:text-[#23BE0A]">
            Sign In
          </button>
          <button className="text-lg px-7 py-3 rounded-md leading-tight transition bg-[#59C6D2] border-2 border-[#59C6D2] text-white font-semibold hover:bg-transparent hover:text-[#59C6D2]">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  )
}
export default Header
