import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import SimulateApi from "./components/SimulateApi";
import ToDoList from "./pages/ToDoList";
import Home from "./pages/Home";
import List from "./pages/List";
import Profile from "./pages/Profile";
// import UseEffect from "./pages/UseEffect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/list",
    element: <List />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
