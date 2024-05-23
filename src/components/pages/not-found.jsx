const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md rounded-lg bg-white shadow-xl p-8 text-center">
        <h1 className="text-4xl font-bold text-red-500">
          Oops! Page not found
        </h1>
        <p className="text-gray-700 mt-4">
          The page you&apos;re looking for doesn&apos;t seem to exist. Maybe you
          mistyped the URL or the page has been removed.
        </p>
        <a
          href="/"
          className="inline-block mt-8 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  )
}

export default NotFoundPage
