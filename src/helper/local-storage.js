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

export const addToBookReadList = id => {
  const existedReadBooks = getReadlist()
  if (existedReadBooks.includes(id)) {
    return toast.warning("Book already exist in reading list", {
      className: "bg-yellow-50 text-yellow-600",
    })
  }
  localStorage.setItem(
    "book-readlist",
    JSON.stringify([...existedReadBooks, id])
  )
  toast.success("Book successfully added to reading list", {
    className: "bg-green-100 text-green-600",
  })
}

export const addToBookWishlist = id => {
  const existedReadList = getReadlist()
  const existedWishlist = getWishlist()
  if (existedReadList.includes(id)) {
    return toast.warning("Book already exist in reading list", {
      className: "bg-yellow-50 text-yellow-600",
    })
  }
  if (existedWishlist.includes(id)) {
    return toast.warning("Book already exist in wishlist", {
      className: "bg-yellow-50 text-yellow-600",
    })
  }
  localStorage.setItem(
    "book-wishlist",
    JSON.stringify([...existedWishlist, id])
  )
  toast.success("Book successfully added to wishlist", {
    className: "bg-green-100 text-green-600",
  })
}
