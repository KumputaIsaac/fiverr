import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
