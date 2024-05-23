import { IoStarOutline } from "react-icons/io5"
import PropTypes from "prop-types"

const BookCard = ({ book }) => {
  return (
    <a href={`/book/${book.bookId}`}>
      <article
        key={book.bookId}
        className="rounded-3xl p-6 border-2 border-black/10 space-y-6"
      >
        <div className="p-6 bg-black/5 rounded-xl aspect-[4/3]">
          <img
            src={`/img/${book.image}`}
            alt={book.bookName}
            className="block aspect-[4/3] rounded-xl object-contain w-full"
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 flex-wrap">
            {book.tags.slice(0, 2).map(tag => (
              <span
                className="block font-medium text-sm px-4 py-1.5 bg-green-200 rounded-full text-green-500 leading-tight"
                key={tag + book.bookId}
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-bold text-2xl">{book.bookName}</h3>
          <p className="text-black/80">By : {book.author}</p>
          <hr className="border-dashed my-4" />
          <div className="flex justify-between items-center text-black/80">
            <div>{book.category}</div>
            <div className="flex items-center gap-1">
              <span>{Number(book.rating).toFixed(2)}</span>
              <IoStarOutline />
            </div>
          </div>
        </div>
      </article>
    </a>
  )
}
export default BookCard

BookCard.propTypes = {
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
