import { useEffect } from "react"
import { useLoaderData, useLocation } from "react-router-dom"

const Authors = () => {
  const bookData = useLoaderData()
  const location = useLocation()
  const authors = [...new Set(bookData.map(book => book.author))]

  useEffect(() => {
    document.title = "Our Authors - Book Buzz"
  }, [location])

  return (
    <div className="container space-y-8">
      <h2 className="text-2xl font-bold">Our Authors</h2>
      <ul className="list-disc pl-4">
        {authors.map((author, index) => (
          <li
            className="list-item"
            key={index}
          >
            {author}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Authors
