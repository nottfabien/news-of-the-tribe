export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-amber-50">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-green-800 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <a 
          href="/" 
          className="bg-green-800 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-green-900 transition-colors shadow-lg inline-block"
        >
          Go Back Home
        </a>
      </div>
    </div>
  )
}