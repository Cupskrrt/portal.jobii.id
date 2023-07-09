import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardLayout from "./layouts/DashboardLayout";
import CreateJobPages from "./pages/CreateJobPage";
import ViewApplicantPage from "./pages/ViewApplicantPage";
import RequireAuth from "./utils/RequireAuth";
import ProjectLayout from "./layouts/ProjectLayout";
import ProjectPage from "./pages/ProjectPage";
import store from "./redux/store";
import { Provider } from "react-redux";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<LoginPage />} />

        {/* DASHBOARD ROUTE */}
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route path="home" />
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
          <Route path="project" element={<ProjectLayout />}>
            <Route path=":projectId" element={<ProjectPage />} />
          </Route>
        </Route>
      </Route>
    )
  );

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
