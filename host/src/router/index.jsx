import { createBrowserRouter } from "react-router-dom"
import HomePage from "./routes/Home"
import HumanResourcesPage from "./routes/HumanResources"
import LegalPage from "./routes/Legal"

export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomePage
    },
    {
        path: "/recursos-humanos",
        Component: HumanResourcesPage
    },
    {
        path: "/legal",
        Component: LegalPage
    },
])