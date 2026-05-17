import {
  Routes,
  Route,
} from "react-router-dom";

import Layout from "../components/layout/Layout";
import ProtectedRoute from "../components/ProtectedRoute";

import Home from "../pages/Home";
import PostDetail from "../pages/PostDetail";
import CreatePost from "../pages/CreatePost";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/posts/:id"
          element={<PostDetail />}
        />

        <Route
          path="/create"
          element={<CreatePost />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </Layout>
  );
}

export default AppRoutes;