import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CrewPage from "./pages/Crew";
import DestinationPage from "./pages/Destination";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import TechnologyPage from "./pages/Technology";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "destination", element: <DestinationPage /> },
        { path: "crew", element: <CrewPage /> },
        { path: "technology", element: <TechnologyPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
