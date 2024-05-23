import { useEffect, useState } from "react"
import BookCard from "../shared/book-card"
import { useLocation } from "react-router-dom"

const Home = () => {
  const location = useLocation()
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch("/db.json")
        const booksData = await res.json()
        setBooks(booksData)
      } catch (error) {
        console.log(error)
      }
    }

    fetchBooks()
  }, [])

  useEffect(() => {
    document.title = "Book Buzz"
  }, [location])

  return (
    <div className="container flex flex-col gap-14">
      <section className="flex flex-col-reverse lg:flex-row items-center px-8 py-12 text-center lg:text-start lg:px-24 lg:py-20 rounded-3xl bg-[#131313]/5 gap-8 lg:gap-16">
        <div className="flex-1">
          <h2 className="text-4xl lg:text-6xl font-bold mb-12 leading-snug">
            Books to freshen up your bookshelf
          </h2>
          <a
            className="block mx-auto lg:mx-0 w-max px-6 py-3 lg:px-7 lg:py-4 bg-[#23BE0A] rounded-md text-white"
            href="/listed-books"
          >
            View The List
          </a>
        </div>
        <div className="flex-1 max-w-[200px] lg:max-w-none flex justify-end">
          <img
            src="/img/hero-book.png"
            alt=""
          />
        </div>
      </section>

      <section>
        <h2 className="text-center text-3xl font-bold mb-8">Books</h2>
        <div className="grid lg:grid-cols-3 gap-6">
          {books.map(book => (
            <BookCard
              key={book.bookId}
              book={book}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
export default Home
