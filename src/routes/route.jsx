import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from "../pages/Home";
import HomeLayout from "../components/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      }
    ]
  },
]);

export default router