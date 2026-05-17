import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { token } = useAuth();

  if (!token) {
    return (
      <div className="text-center mt-10 text-red-500">
        Access denied. Please login.
      </div>
    );
  }

  return children;
}

export default ProtectedRoute;