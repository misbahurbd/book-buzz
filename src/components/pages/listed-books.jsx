import { useEffect, useMemo, useState } from "react"
import { useLoaderData, useLocation } from "react-router-dom"
import { twMerge } from "tailwind-merge"
import sortBy from "sort-by"
import { getReadlist, getWishlist } from "../../helper/local-storage"
import BookListItem from "../shared/book-list-item"
import DropdownSelect from "../shared/select"

const ListedBooks = () => {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState("readlist")
  const [sort, setSort] = useState("")
  const booksData = useLoaderData()
  const sortOptions = [
    { label: "Rating", value: "rating" },
    { label: "Number of pages", value: "totalPages" },
    { label: "Publisher year", value: "yearOfPublishing" },
  ]

  const activeBookData = useMemo(() => {
    const listIdes = activeTab === "readlist" ? getReadlist() : getWishlist()
    return booksData
      .filter(book => listIdes.includes(book.bookId))
      .sort(sortBy(sort))
  }, [activeTab, booksData, sort])

  useEffect(() => {
    document.title = "Listed Books - Book Buzz"
  }, [location])

  return (
    <div className="container space-y-6">
      <div className="bg-neutral-100 px-8 py-6 rounded-xl flex items-center justify-between">
        <h2 className="text-3xl font-bold">Books</h2>
        <DropdownSelect
          defaultValue={"Sort by"}
          data={sortOptions}
          value={sort}
          setValue={setSort}
          label={"Sort By"}
        />
      </div>
      <ul className="border-b border-neutral-200  flex">
        <li
          onClick={() => setActiveTab("readlist")}
          className={twMerge(
            "px-6 py-3 block border border-transparent -mb-[1px] rounded-t-xl font-semibold select-none cursor-pointer",
            activeTab == "readlist" && "border-neutral-200 border-b-white"
          )}
        >
          Read Books
        </li>
        <li
          onClick={() => setActiveTab("wishlist")}
          className={twMerge(
            "px-6 py-3 block border border-transparent -mb-[1px] rounded-t-xl font-semibold select-none cursor-pointer",
            activeTab === "wishlist" ? "border-neutral-200 border-b-white" : ""
          )}
        >
          Wishlist Books
        </li>
      </ul>

      <div>
        {activeBookData.length == 0 && (
          <div>
            <p className="text-center text-lg font-semibold">
              No books found in{" "}
              {activeTab == "readlist" ? "reading list" : "wishlist"}
            </p>
          </div>
        )}
        <ul className="grid gap-4">
          {activeBookData.map(book => (
            <li key={book.bookId}>
              <BookListItem book={book} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default ListedBooks
