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
import StoragePage from "./pages/StoragePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import KanbanBoard from "./components/KanbanBoard";

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
            <Route path=":projectId" element={<ProjectPage />}>
              <Route path="task" element={<KanbanBoard />} />
            </Route>
          </Route>
          <Route path="Storage" element={<StoragePage />} />
        </Route>
      </Route>
    )
  );

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
