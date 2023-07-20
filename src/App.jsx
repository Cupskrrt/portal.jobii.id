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
            
              <DashboardLayout />
            
          }
        >
          <Route path="home" />
          <Route
            path="create-job"
            element={
              
                <CreateJobPages />
              
            }
          />
          <Route
            path="applicant"
            element={
              
                <ViewApplicantPage />
              
            }
          />
          <Route path="project" element={<Outlet />}>
            <Route
              index
              element={
                
                  <ProjectPage />
                
              }
            />
            <Route
              path=":projectId"
              element={
                
                  <ProjectLayout />
                
              }
            >
              <Route
                path="task"
                element={
                  
                    <KanbanBoard />
                  
                }
              />
            </Route>
          </Route>
          <Route
            path="Storage"
            element={
              
                <StoragePage />
              
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
