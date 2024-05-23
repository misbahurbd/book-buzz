import { toast } from "sonner"

export const getReadlist = () => {
  const bookReadList = localStorage.getItem("book-readlist")
  if (bookReadList) {
    return JSON.parse(bookReadList)
  }
  return []
}

export const getWishlist = () => {
  const bookWishlist = localStorage.getItem("book-wishlist")
  if (bookWishlist) {
    return JSON.parse(bookWishlist)
  }
  return []
}

export const addBookReadList = id => {
  const existedReadBooks = getReadlist()
  if (existedReadBooks.includes(id)) {
    toast.warning("Book already exist in Read list")
  } else {
    localStorage.setItem(
      "readBookList",
      JSON.stringify([...existedReadBooks, id])
    )
    toast.success("Book add to read list")
  }
}
