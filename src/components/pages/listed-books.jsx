import { useMemo, useState } from "react"
import { useLoaderData } from "react-router-dom"
import { getReadlist, getWishlist } from "../../helper/local-storage"
import { twMerge } from "tailwind-merge"
import BookListItem from "../shared/book-list-item"

const ListedBooks = () => {
  const [activeTab, setActiveTab] = useState("readlist")
  const booksData = useLoaderData()

  console.log(activeTab)

  const activeBookData = useMemo(() => {
    const listIdes = activeTab === "readlist" ? getReadlist() : getWishlist()
    return booksData.filter(book => listIdes.includes(book.bookId))
  }, [activeTab, booksData])

  return (
    <div className="container space-y-6">
      <div className="bg-neutral-100 px-8 py-6 rounded-xl flex items-center justify-between">
        <h2 className="text-3xl font-bold">Books</h2>
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
