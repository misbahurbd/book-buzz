import { useEffect, useState } from "react"
import { HiBars3, HiXMark } from "react-icons/hi2"
import { NavLink, useLocation } from "react-router-dom"
import { twMerge } from "tailwind-merge"

const Header = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()
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

  useEffect(() => {
    setOpen(false)
  }, [location])

  return (
    <header>
      <nav className="container py-6 lg:py-8 flex items-center justify-between relative">
        <a
          href="/"
          className="font-bold text-2xl"
        >
          Book Buzz
        </a>
        <button
          onClick={() => setOpen(open => !open)}
          className="md:hidden border rounded-md flex items-center justify-center aspect-square p-1 bg-white select-none cursor-pointer text-2xl"
        >
          {!open ? <HiBars3 /> : <HiXMark />}
        </button>
        <ul
          className={twMerge(
            "flex transition max-lg:bg-neutral-100 max-lg:w-full max-lg:left-0 py-4 max-lg:rounded-md max-lg:shadow-sm max-lg:z-10 items-center gap-2 max-lg:absolute max-lg:flex-col max-lg:top-full",
            open
              ? "max-lg:visible max-lg:opacity-100 max-lg:translate-y-0"
              : "max-lg:invisible max-lg:opacity-0 max-lg:translate-y-4"
          )}
        >
          {navLinks.map(navItem => (
            <li
              className="max-lg:w-full max-lg:px-3"
              key={navItem.link}
            >
              <NavLink
                className={({ isActive }) =>
                  twMerge(
                    "block leading-tight px-5 py-1.5 text-lg rounded-md border border-transparent transition text-black/80 hover:bg-black/5 hover:border-black/10",
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
        <div className="hidden md:flex items-center gap-4">
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
