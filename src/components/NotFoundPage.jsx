import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-[#e9f1f3] to-[#f3e8df] px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-7xl font-bold text-gray-800 mb-4">404</h1>

        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Page Not Found
        </h2>

        <p className="text-gray-500 mb-8">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:opacity-90 transition"
        >
          <ArrowLeft size={18} />
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
