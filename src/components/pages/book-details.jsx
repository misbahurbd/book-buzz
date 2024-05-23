import { useLoaderData, useParams } from "react-router-dom"
import {
  addToBookReadList,
  addToBookWishlist,
} from "../../helper/local-storage"

const BookDetails = () => {
  const books = useLoaderData()
  const { bookId } = useParams()
  const book = books.find(data => data.bookId === bookId)

  const onRead = () => {
    addToBookReadList(bookId)
  }

  const onWishlist = () => {
    addToBookWishlist(bookId)
  }

  return (
    <section className="container flex gap-10 items-stretch">
      <div className="flex-1">
        <div className="rounded-xl bg-black/5 h-full relative">
          <img
            className="absolute w-full h-full p-12 object-contain"
            src={`/img/${book.image}`}
            alt={book.bookName}
          />
        </div>
      </div>
      <div className="flex-1 space-y-4">
        <h1 className="text-3xl font-bold text-black/80">{book.bookName}</h1>
        <p className=" text-black/80">By : {book.author}</p>
        <p className="border-y border-black/10 py-3 text-black/80">
          {book.category}
        </p>
        <p className="text-black/80 leading-loose">
          <strong className="text-black">Review: </strong> {book.review}
        </p>
        <div className="flex gap-3 items-center">
          <strong>Tags</strong>
          <div className="flex gap-2 items-center">
            {book.tags.map(tag => (
              <span
                className="text-sm font-semibold text-green-500 bg-green-100 block px-4 py-2 rounded-full leading-tight"
                key={tag}
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
        <hr />
        <table className="table-auto">
          <tbody>
            <tr>
              <td className="text-black/70 pr-10 py-2">Number of Pages:</td>
              <td className="font-semibold text-black/70">{book.totalPages}</td>
            </tr>
            <tr>
              <td className="text-black/70 pr-10 py-2">Publisher:</td>
              <td className="font-semibold text-black/70">{book.publisher}</td>
            </tr>
            <tr>
              <td className="text-black/70 pr-10 py-2">Year of Publishing:</td>
              <td className="font-semibold text-black/70">
                {book.yearOfPublishing}
              </td>
            </tr>
            <tr>
              <td className="text-black/70 pr-10 py-2">Rating:</td>
              <td className="font-semibold text-black/70">{book.rating}</td>
            </tr>
          </tbody>
        </table>
        <div className="flex items-center gap-2 !mt-8">
          <button
            onClick={onRead}
            className="block transition border-2 border-neutral-400 rounded-lg leading-tight px-6 py-3 font-semibold hover:text-white hover:bg-green-500 hover:border-green-500"
          >
            Read
          </button>
          <button
            onClick={onWishlist}
            className="block transition border-2 border-[#50B1C9] bg-[#50B1C9] text-white rounded-lg leading-tight px-6 py-3 font-semibold hover:bg-transparent hover:text-[#50B1C9]"
          >
            Wishlist
          </button>
        </div>
      </div>
    </section>
  )
}
export default BookDetails
