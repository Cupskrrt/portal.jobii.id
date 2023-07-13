import {
  Outlet,
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
import ProjectPage from "./pages/ProjectPage";
import StoragePage from "./pages/StoragePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProjectLayout from "./layouts/ProjectLayout";
import KanbanBoard from "./components/KanbanBoard";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<LoginPage />} />

        {/* DASHBOARD ROUTE */}
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route path="home" />
          <Route path="create-job" element={<CreateJobPages />} />
          <Route
            path="applicant"
            element={
              <RequireAuth>
                <ViewApplicantPage />
              </RequireAuth>
            }
          />
          <Route path="project" element={<Outlet />}>
            <Route index element={<ProjectPage />} />
            <Route path=":projectId" element={<ProjectLayout />}>
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
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
