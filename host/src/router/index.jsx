import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import MainLayout from "../components/layout/main";
import { lazy, Suspense } from "react";

const HumanResourcesPage = lazy(() => import("HumanResourcesModule/HumanResourcesPage"));
const LegalPage = lazy(() => import("LegalModule/LegalPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>Ha ocurrido un error.</div>,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/recursos-humanos",
        errorElement: <div>El módulo Recursos Humanos no está disponible</div>,
        element: (
          <Suspense fallback={<div>Cargando Módulo...</div>}>
            <HumanResourcesPage />
          </Suspense>
        ),
      },
      {
        path: "/legal",
        errorElement: <div>El módulo Legal no está disponible</div>,
        element: (
          <Suspense fallback={<div>Cargando Módulo...</div>}>
            <LegalPage />
          </Suspense>
        ),
      },
    ],
  },
]);
