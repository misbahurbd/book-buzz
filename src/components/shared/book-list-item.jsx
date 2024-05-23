import PropTypes from "prop-types"
import { HiOutlineDocumentChartBar, HiOutlineUsers } from "react-icons/hi2"
import { IoLocationOutline } from "react-icons/io5"

const BookListItem = ({ book }) => {
  return (
    <article className="flex items-center gap-6 rounded-2xl border border-gray-200 p-6">
      <div className="relative bg-black/5 rounded-xl h-full min-w-60 aspect-square">
        <img
          src={`/img/${book.image}`}
          alt={book.bookName}
          className="absolute inset-0 p-4 object-contain w-full h-full"
        />
      </div>
      <div className="space-y-4 flex-1">
        <h3 className="text-3xl font-bold">{book.bookName}</h3>
        <p className="text-neutral-700">By : {book.author}</p>
        <div className="flex items-center gap-4 text-neutral-700">
          <p className="flex gap-2 items-center">
            <strong className="mr-2">Tags</strong>
            {book.tags.map(tag => (
              <span
                className="block text-sm font-medium text-green-500 bg-green-500/10 px-3 py-1.5 rounded-full leading-tight"
                key={tag}
              >
                #{tag}
              </span>
            ))}
          </p>
          <p className="flex items-center gap-1.5">
            <IoLocationOutline />
            <span>Year of Publishing: {book.yearOfPublishing}</span>
          </p>
        </div>
        <div className="flex gap-3 text-neutral-500 items-center">
          <p className="flex gap-1.5 items-center">
            <HiOutlineUsers />
            <span>Publisher: {book.publisher}</span>
          </p>
          <p className="flex gap-1.5 items-center">
            <HiOutlineDocumentChartBar />
            <span>Publisher: {book.totalPages}</span>
          </p>
        </div>
        <hr />
        <ul className="flex items-center gap-2">
          <li className="text-sm px-4 py-2 rounded-full text-blue-600 bg-blue-600/10">
            Category: {book.category}
          </li>
          <li className="text-sm px-4 py-2 rounded-full text-orange-600 bg-orange-600/10">
            Rating: {book.category}
          </li>
          <li>
            <a
              href={`/book/${book.bookId}`}
              className="block text-sm px-4 py-2 rounded-full text-white bg-green-500"
            >
              View Details
            </a>
          </li>
        </ul>
      </div>
    </article>
  )
}
export default BookListItem

BookListItem.propTypes = {
  book: PropTypes.shape({
    bookId: PropTypes.string.isRequired,
    bookName: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
    totalPages: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    publisher: PropTypes.string.isRequired,
    yearOfPublishing: PropTypes.number.isRequired,
  }).isRequired,
}
