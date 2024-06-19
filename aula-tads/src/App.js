import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import SimulateApi from "./components/SimulateApi";
import ToDoList from "./pages/ToDoList";
import Home from "./pages/Home";
import List from "./pages/List";
import Profile from "./pages/Profile";
import { ChakraProvider } from "@chakra-ui/react";
import SearchPokemon from "./pages/SearchPokemon";
import CreatePost from "./pages/CreatePost";
import CreatePostLibForm from "./pages/CreatePostLibForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/post",
    element: <CreatePost />,
  },
  {
    path: "/postLibForm",
    element: <CreatePostLibForm />,
  },
  {
    path: "/list",
    element: <List />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/search",
    element: <SearchPokemon />,
  },
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
