import { useLoaderData, useLocation } from "react-router-dom"
import sortBy from "sort-by"
import BookCard from "../shared/book-card"
import { useEffect } from "react"

const Recommendations = () => {
  const booksData = useLoaderData()
  const location = useLocation()

  useEffect(() => {
    document.title = "Best Books - Book Buzz"
  }, [location])

  return (
    <div className="container space-y-8">
      <h2 className="text-2xl font-bold capitalize">Best book for you</h2>
      <div className="grid lg:grid-cols-3 gap-4">
        {booksData.sort(sortBy("-rating")).map(book => (
          <BookCard
            key={book.bookId}
            book={book}
          />
        ))}
      </div>
    </div>
  )
}
export default Recommendations
