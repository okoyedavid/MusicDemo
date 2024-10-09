import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./components/Home";
import Playlist from "./components/Playlist";
import { UseContextState } from "./context/Appprovider";

function App() {
  const { loader } = UseContextState();
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { element: <Home />, path: "/" },
        { element: <Playlist />, path: "/playlist", loader: loader },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
