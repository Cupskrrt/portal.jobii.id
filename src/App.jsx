import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardLayout from "./layouts/DashboardLayout";
import CreateJobPages from "./pages/CreateJobPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<LoginPage />} />

        {/* DASHBOARD ROUTE */}
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route path="create-job" element={<CreateJobPages />} />
          <Route path="applicant" />
          <Route path="applicant/:applicantId" />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
