import { useState } from "react"
import { HiCheck, HiChevronDown } from "react-icons/hi2"
import { twMerge } from "tailwind-merge"

const DropdownSelect = ({ className, value, setValue, data, label }) => {
  const [open, setOpen] = useState(false)
  const onSelect = dataItem => {
    setValue(dataItem.value)
    setOpen(false)
  }

  return (
    <div className="w-max relative">
      <button
        onClick={() => setOpen(open => !open)}
        className={twMerge(
          "w-56 border rounded-lg bg-green-500 px-4 py-3 text-white text-start pr-8 relative",
          className
        )}
      >
        <span>{label}</span>
        <span
          className={twMerge(
            "absolute text-lg right-4 top-1/2 -translate-y-1/2"
          )}
        >
          <HiChevronDown />
        </span>
      </button>
      <ul
        className={twMerge(
          "absolute transition w-full left-0 top-[105%] bg-neutral-100 rounded-lg p-1 border",
          open
            ? "visible opacity-100 translate-y-0"
            : "invisible opacity-0 translate-y-6"
        )}
      >
        {data &&
          data.map((dataItem, i) => (
            <li
              className="text-nowrap px-3 py-2 hover:bg-white rounded-md relative select-none cursor-pointer"
              key={i}
              onClick={() => onSelect(dataItem)}
            >
              {dataItem.label}
              {value === dataItem.value && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2">
                  <HiCheck />
                </span>
              )}
            </li>
          ))}
      </ul>
    </div>
  )
}
export default DropdownSelect
