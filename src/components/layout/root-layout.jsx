import { Outlet } from "react-router-dom"
import Header from "../header"

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="mb-12">
        <Outlet />
      </main>
    </>
  )
}
export default RootLayout
