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
import ProjectLayout from "./layouts/ProjectLayout";
import KanbanBoard from "./components/KanbanBoard";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<LoginPage />} />

        {/* DASHBOARD ROUTE */}
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <DashboardLayout />
            </RequireAuth>
          }
        >
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
          <Route path="project" element={<Outlet />}>
            <Route
              index
              element={
                <RequireAuth>
                  <ProjectPage />
                </RequireAuth>
              }
            />
            <Route
              path=":projectId"
              element={
                <RequireAuth>
                  <ProjectLayout />
                </RequireAuth>
              }
            >
              <Route
                path="task"
                element={
                  <RequireAuth>
                    <KanbanBoard />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
          <Route
            path="Storage"
            element={
              <RequireAuth>
                <StoragePage />
              </RequireAuth>
            }
          />
        </Route>
      </Route>
    )
  );

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
};

export default App;
