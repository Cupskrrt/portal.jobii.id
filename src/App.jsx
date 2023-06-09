import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardLayout from "./layouts/DashboardLayout";
import CreateJobPages from "./pages/CreateJobPage";
import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./context/UserContext";
import ViewApplicantPage from "./pages/ViewApplicantPage";
import RequireAuth from "./utils/RequireAuth";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<LoginPage />} />

        {/* DASHBOARD ROUTE */}
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route
            path="create-job"
            element={
              <RequireAuth>
                <CreateJobPages />
              </RequireAuth>
            }
          />
          <Route
            path="applicant"
            element={
              <RequireAuth>
                <ViewApplicantPage />
              </RequireAuth>
            }
          />
        </Route>
      </Route>
    )
  );

  return (
    <AuthProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </AuthProvider>
  );
};

export default App;
